/**
 * Higanbana — a procedural field of red spider lilies (Lycoris radiata).
 *
 * Every flower is drawn from curves at runtime: a leafless stem, an umbel of
 * florets, six recurved tepals per floret and long upswept stamens. Flowers
 * bloom white, then "turn red" as colour waves travel through the field.
 * The cursor stains nearby flowers, clicks send a white→red ripple, and the
 * host page can push the whole field to red through `setScrollRed`.
 */

type RGB = [number, number, number];

interface Tepal {
  spread: number;
  lenK: number;
  width: number;
  curl: number;
}

interface Stamen {
  spread: number;
  lenK: number;
  bend: number;
}

interface Floret {
  angle: number;
  reach: number;
  delay: number;
  redLag: number;
  tepals: Tepal[];
  stamens: Stamen[];
}

interface Flower {
  x: number;
  baseY: number;
  headY: number;
  size: number;
  depth: number;
  alpha: number;
  stemCurve: number;
  bloomAt: number;
  red: number;
  redTarget: number;
  redSetAt: number;
  swayPhase: number;
  swaySpeed: number;
  push: number;
  pushVel: number;
  florets: Floret[];
}

interface Wave {
  x: number;
  y: number;
  t0: number;
  speed: number;
  target: number;
}

interface Petal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  size: number;
  life: number;
  max: number;
  red: number;
}

export interface FieldOptions {
  /** Draw a single, fully bloomed static frame (prefers-reduced-motion). */
  still?: boolean;
  /** Density multiplier. */
  density?: number;
  /** Bias flowers into the right-hand side, leaving room for copy. */
  composition?: 'hero' | 'full';
  /** Start with the field already red (e.g. footer). */
  startRed?: boolean;
  /** Delay before blooming begins, in seconds. */
  delay?: number;
}

const WHITE: RGB = [238, 231, 223];
const RED: RGB = [196, 18, 38];
const STEM_DARK: RGB = [30, 40, 28];
const STEM_RED: RGB = [70, 10, 16];
const BG: RGB = [6, 5, 5];

const TAU = Math.PI * 2;
const rand = (a: number, b: number) => a + Math.random() * (b - a);
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function mix(a: RGB, b: RGB, t: number): RGB {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

function rgba(c: RGB, a: number) {
  return `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a.toFixed(3)})`;
}

function makeGlowSprite(): HTMLCanvasElement {
  const s = 128;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, 'rgba(210,20,40,0.55)');
  grad.addColorStop(0.4, 'rgba(160,10,28,0.18)');
  grad.addColorStop(1, 'rgba(120,0,20,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, s, s);
  return c;
}

export class HiganbanaField {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private opts: Required<FieldOptions>;
  private flowers: Flower[] = [];
  private waves: Wave[] = [];
  private petals: Petal[] = [];
  private glow = makeGlowSprite();
  private w = 0;
  private h = 0;
  private dpr = 1;
  private raf = 0;
  private running = false;
  private visible = true;
  private start = 0;
  private last = 0;
  private now = 0;
  private scrollRed = 0;
  private mouse = { x: -9999, y: -9999, active: false, vx: 0 };
  private nextCycle = 0;
  private ro!: ResizeObserver;

  constructor(canvas: HTMLCanvasElement, options: FieldOptions = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: true })!;
    this.opts = {
      still: false,
      density: 1,
      composition: 'hero',
      startRed: false,
      delay: 0,
      ...options,
    };
    this.start = performance.now() / 1000 + this.opts.delay;
    this.now = this.start - this.opts.delay;
    this.resize();
    this.scheduleIntro();
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(canvas);
    if (this.opts.still) {
      this.renderStill();
    } else {
      this.play();
    }
  }

  /* ---------- public API ---------- */

  setScrollRed(p: number) {
    this.scrollRed = clamp01(p);
    if (this.opts.still) this.renderStill();
  }

  setVisible(v: boolean) {
    this.visible = v;
    if (v) this.play();
  }

  pointer(x: number, y: number) {
    const dx = x - this.mouse.x;
    this.mouse.vx = this.mouse.active ? dx : 0;
    this.mouse.x = x;
    this.mouse.y = y;
    this.mouse.active = true;
  }

  pointerLeave() {
    this.mouse.active = false;
    this.mouse.x = this.mouse.y = -9999;
  }

  /** A click: wash the field white from this point, then bleed red back through it. */
  ripple(x: number, y: number) {
    const t = this.now;
    const speed = Math.max(this.w, this.h) / 1.6;
    this.waves.push({ x, y, t0: t, speed, target: 0 });
    this.waves.push({ x, y, t0: t + 1.1, speed: speed * 0.8, target: 1 });
    this.nextCycle = t + 14;
  }

  destroy() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.ro.disconnect();
  }

  /* ---------- setup ---------- */

  private resize() {
    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    // Mobile URL bars nudge the height constantly; only rebuild on real changes.
    const minor =
      this.flowers.length > 0 &&
      Math.abs(rect.width - this.w) < 1 &&
      Math.abs(rect.height - this.h) < 160;
    this.dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    this.w = rect.width;
    this.h = rect.height;
    this.canvas.width = Math.round(this.w * this.dpr);
    this.canvas.height = Math.round(this.h * this.dpr);
    if (!minor) {
      const prev = this.flowers;
      this.buildField();
      // Keep colour state across resizes so the field doesn't flash white.
      if (prev.length) {
        const avg = prev.reduce((s, f) => s + f.red, 0) / prev.length;
        const bloomed = prev.every((f) => this.now > f.bloomAt + 2);
        this.assignBloom();
        for (const f of this.flowers) {
          f.red = f.redTarget = avg > 0.5 ? 1 : 0;
          if (bloomed) f.bloomAt = this.now - 3;
        }
      }
    } else {
      for (const f of this.flowers) f.baseY = this.h + 40;
    }
    if (this.opts.still) this.renderStill();
  }

  private buildField() {
    const { w, h } = this;
    const scale = Math.max(0.55, Math.min(w, h * 1.2) / 900);
    const mobile = w < 720;
    const count = Math.round(
      Math.max(26, Math.min(90, ((w * h) / 15500) * this.opts.density)) * (mobile ? 1.15 : 1),
    );
    const flowers: Flower[] = [];
    for (let i = 0; i < count; i++) {
      const r = Math.random();
      const depth = r < 0.46 ? 0 : r < 0.82 ? 1 : 2;
      const x = rand(-0.06, 1.06) * w;
      const right = clamp01((x / w - 0.42) / 0.58);
      let size: number;
      let head: number;
      if (depth === 0) {
        size = rand(46, 78) * scale;
        head = rand(0.5, 0.74);
      } else if (depth === 1) {
        size = rand(84, 128) * scale;
        head = rand(0.6, 0.86);
      } else {
        size = rand(140, 210) * scale;
        head = rand(0.8, 1.02);
      }
      if (this.opts.composition === 'hero') {
        head -= right * (mobile ? 0.12 : 0.26) * (depth === 2 ? 0.5 : 1);
      } else {
        head = 0.25 + head * 0.75;
      }
      flowers.push(this.makeFlower(x, head * h, size, depth));
    }
    flowers.sort((a, b) => a.depth - b.depth || a.headY - b.headY);
    this.flowers = flowers;
  }

  private makeFlower(x: number, headY: number, size: number, depth: number): Flower {
    const n = 6 + Math.floor(Math.random() * 3);
    const florets: Floret[] = [];
    for (let i = 0; i < n; i++) {
      // Fan florets around the upper hemisphere, with a few dipping below.
      const base = -Math.PI - 0.38 + ((Math.PI + 0.76) * (i + 0.5)) / n;
      const tepals: Tepal[] = [];
      for (let j = 0; j < 6; j++) {
        tepals.push({
          spread: (j - 2.5) * rand(0.15, 0.24),
          lenK: rand(0.78, 1.08),
          width: rand(0.032, 0.048),
          curl: rand(0.65, 1.15) * (j % 2 ? 1 : -1),
        });
      }
      const stamens: Stamen[] = [];
      for (let j = 0; j < 7; j++) {
        stamens.push({
          spread: (j - 3) * rand(0.06, 0.11),
          lenK: rand(0.82, 1.12),
          bend: rand(0.55, 1.05),
        });
      }
      florets.push({
        angle: base + rand(-0.16, 0.16),
        reach: rand(0.55, 1),
        delay: rand(0, 0.28),
        redLag: rand(0, 0.35),
        tepals,
        stamens,
      });
    }
    const depthAlpha = depth === 0 ? 0.36 : depth === 1 ? 0.7 : 1;
    return {
      x,
      baseY: this.h + 40,
      headY,
      size,
      depth,
      alpha: depthAlpha,
      stemCurve: rand(-0.14, 0.14),
      bloomAt: 0,
      red: 0,
      redTarget: 0,
      redSetAt: -1,
      swayPhase: rand(0, TAU),
      swaySpeed: rand(0.45, 0.85),
      push: 0,
      pushVel: 0,
      florets,
    };
  }

  private assignBloom() {
    const t = Math.max(this.start, this.now);
    for (const f of this.flowers) {
      f.bloomAt = t + 0.15 + rand(0, 1.5) + (f.x / Math.max(1, this.w)) * 0.5 + (2 - f.depth) * 0.12;
      if (this.opts.startRed) f.red = f.redTarget = 1;
    }
  }

  private scheduleIntro() {
    const t = this.start;
    this.assignBloom();
    if (!this.opts.startRed) {
      const speed = Math.max(this.w, this.h) / 3.2;
      this.waves.push({ x: this.w * 0.78, y: this.h * 0.9, t0: t + 3.1, speed, target: 1 });
    }
    this.nextCycle = t + 18;
  }

  /* ---------- loop ---------- */

  private play() {
    if (this.running || this.opts.still) return;
    this.running = true;
    this.last = performance.now() / 1000;
    const loop = () => {
      if (!this.running) return;
      if (!this.visible || document.hidden) {
        this.running = false;
        return;
      }
      const t = performance.now() / 1000;
      const dt = Math.min(0.05, t - this.last);
      this.last = t;
      this.now = t;
      this.step(dt);
      this.draw();
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
    document.addEventListener(
      'visibilitychange',
      () => {
        if (!document.hidden && this.visible) this.play();
      },
      { once: true },
    );
  }

  private renderStill() {
    this.now = performance.now() / 1000;
    for (const f of this.flowers) {
      f.bloomAt = this.now - 10;
      f.red = f.redTarget = this.opts.startRed ? 1 : 0.85;
    }
    this.draw();
  }

  private step(dt: number) {
    const t = this.now;

    // Living cycle: every so often a pale wave washes through and red follows.
    if (t > this.nextCycle && !this.opts.startRed) {
      const x = rand(0.2, 0.9) * this.w;
      const y = rand(0.6, 1) * this.h;
      const speed = Math.max(this.w, this.h) / 2.4;
      this.waves.push({ x, y, t0: t, speed, target: 0 });
      this.waves.push({ x, y, t0: t + 2.2, speed: speed * 0.85, target: 1 });
      this.nextCycle = t + 16;
    }

    // Retire waves once they have crossed the whole field.
    const diag = Math.hypot(this.w, this.h);
    this.waves = this.waves.filter((wv) => t < wv.t0 + diag / wv.speed + 0.5);

    const m = this.mouse;
    const k = 1 - Math.exp(-dt * 2.1);
    const reach = Math.max(70, Math.min(this.w, this.h) * 0.11);

    for (const f of this.flowers) {
      for (const wv of this.waves) {
        const arrive = wv.t0 + Math.hypot(f.x - wv.x, f.headY - wv.y) / wv.speed;
        if (t >= arrive && arrive > f.redSetAt) {
          f.redSetAt = arrive;
          f.redTarget = wv.target;
        }
      }

      // The cursor stains whatever it brushes and leans the heads away.
      let force = 0;
      if (m.active) {
        const dx = f.x - m.x;
        const dy = f.headY - m.y;
        const d = Math.hypot(dx, dy);
        const r = reach + f.size * 0.4;
        if (d < r) {
          const p = 1 - d / r;
          force = Math.sign(dx || 1) * p * p * f.size * 0.22 + m.vx * p * 0.6;
          if (t > f.bloomAt + 0.8 && f.redTarget < 1) {
            f.redTarget = 1;
            f.redSetAt = t;
          }
        }
      }
      // Spring for the head displacement.
      f.pushVel += (force - f.push) * dt * 18;
      f.pushVel *= Math.exp(-dt * 6);
      f.push += f.pushVel * dt * 4;

      f.red += (f.redTarget - f.red) * k;

      // Ripe red flowers shed the occasional petal.
      if (f.red > 0.75 && f.depth > 0 && Math.random() < dt * 0.05 * f.depth && this.petals.length < 70) {
        this.spawnPetal(f);
      }
    }
    m.vx *= 0.85;

    for (const p of this.petals) {
      p.life += dt;
      p.vy += dt * 9;
      p.vy = Math.min(p.vy, 42);
      p.vx += Math.sin(p.life * 1.7 + p.rot) * dt * 14;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
    }
    this.petals = this.petals.filter((p) => p.life < p.max && p.y < this.h + 30);
  }

  private spawnPetal(f: Flower) {
    this.petals.push({
      x: f.x + rand(-0.3, 0.3) * f.size,
      y: f.headY + rand(-0.3, 0.1) * f.size,
      vx: rand(-18, 18),
      vy: rand(-6, 6),
      rot: rand(0, TAU),
      vr: rand(-2.4, 2.4),
      size: f.size * rand(0.07, 0.11),
      life: 0,
      max: rand(5, 9),
      red: f.red,
    });
  }

  /* ---------- drawing ---------- */

  private draw() {
    const { ctx, dpr } = this;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, this.w, this.h);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (const f of this.flowers) this.drawFlower(f);

    for (const p of this.petals) {
      const fade = Math.min(1, p.life * 2) * (1 - p.life / p.max);
      ctx.setTransform(dpr, 0, 0, dpr, p.x * dpr, p.y * dpr);
      ctx.rotate(p.rot);
      ctx.fillStyle = rgba(mix(WHITE, RED, p.red), 0.85 * fade);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(p.size * 0.5, -p.size * 0.22, p.size, 0);
      ctx.quadraticCurveTo(p.size * 0.5, p.size * 0.22, 0, 0);
      ctx.fill();
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  private drawFlower(f: Flower) {
    const { ctx, dpr, now } = this;
    const bloom = clamp01((now - f.bloomAt) / 1.8);
    if (now < f.bloomAt - 1.2) return;
    const grow = easeOutCubic(clamp01((now - f.bloomAt + 1.2) / 1.2));

    const red = Math.max(f.red, this.scrollRed);
    const sway = Math.sin(now * f.swaySpeed + f.swayPhase) * f.size * 0.045;
    const hx = f.x + sway + f.push;
    const hy = f.baseY + (f.headY - f.baseY) * grow;
    const tilt = (sway + f.push) / (f.size * 3.2);

    // Darker, hazier far layers.
    const haze = f.depth === 0 ? 0.42 : f.depth === 1 ? 0.18 : 0;
    const a = f.alpha;

    // Stem
    const stemCol = mix(mix(STEM_DARK, STEM_RED, red * 0.8), BG, haze);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.strokeStyle = rgba(stemCol, a);
    ctx.lineWidth = Math.max(1, f.size * 0.02);
    ctx.beginPath();
    ctx.moveTo(f.x, f.baseY);
    ctx.quadraticCurveTo(
      f.x + f.stemCurve * f.size * 2 + f.push * 0.3,
      (f.baseY + hy) / 2,
      hx,
      hy,
    );
    ctx.stroke();

    ctx.setTransform(dpr, 0, 0, dpr, hx * dpr, hy * dpr);
    ctx.rotate(tilt);

    if (bloom <= 0) {
      // Closed bud.
      const s = f.size * 0.1 * grow;
      ctx.fillStyle = rgba(mix(mix([90, 110, 70], RED, red * 0.7), BG, haze), a);
      ctx.beginPath();
      ctx.ellipse(0, -s * 0.6, s * 0.45, s, 0, 0, TAU);
      ctx.fill();
      return;
    }

    if (red > 0.05 && f.depth > 0) {
      const g = f.size * 1.6;
      ctx.globalAlpha = red * (f.depth === 2 ? 0.55 : 0.4) * bloom;
      ctx.drawImage(this.glow, -g / 2, -g / 2 - f.size * 0.1, g, g);
      ctx.globalAlpha = 1;
    }

    const S = f.size;
    for (const fl of f.florets) {
      const b = easeInOut(clamp01((bloom - fl.delay) / (1 - fl.delay)));
      if (b <= 0) continue;
      const r = clamp01(red * 1.35 - fl.redLag * (1 - red));
      const col = mix(mix(WHITE, RED, r), BG, haze);
      const ca = Math.cos(fl.angle);
      const sa = Math.sin(fl.angle);
      const ox = ca * S * 0.035;
      const oy = sa * S * 0.035 - S * 0.02;

      // Tepals: narrow, recurved, one fill per floret.
      ctx.fillStyle = rgba(col, a);
      ctx.beginPath();
      for (const tp of fl.tepals) {
        const ang = fl.angle + tp.spread * (0.4 + 0.6 * b);
        const c = Math.cos(ang);
        const s = Math.sin(ang);
        const L = S * 0.26 * tp.lenK * fl.reach * b;
        const nx = -s;
        const ny = c;
        const curl = tp.curl * b;
        const cx = ox + c * L * 0.85;
        const cy = oy + s * L * 0.85;
        const tx = ox + c * L * 0.62 + nx * L * 0.42 * curl;
        const ty = oy + s * L * 0.62 + ny * L * 0.42 * curl - L * 0.12 * b;
        const wd = S * tp.width * (0.5 + 0.5 * b);
        ctx.moveTo(ox, oy);
        ctx.quadraticCurveTo(cx + nx * wd, cy + ny * wd, tx, ty);
        ctx.quadraticCurveTo(cx - nx * wd * 0.4, cy - ny * wd * 0.4, ox, oy);
      }
      ctx.fill();

      // Stamens: long, thin and swept upward — the "spider" silhouette.
      const sb = easeOutCubic(clamp01((b - 0.25) / 0.75));
      if (sb <= 0) continue;
      const scol = mix(mix([246, 240, 232], [222, 34, 52], r), BG, haze);
      ctx.strokeStyle = rgba(scol, a * 0.92);
      ctx.lineWidth = Math.max(0.5, S * 0.0055);
      ctx.beginPath();
      const tips: number[] = [];
      for (const st of fl.stamens) {
        const ang = fl.angle + st.spread;
        const c = Math.cos(ang);
        const s = Math.sin(ang);
        const L = S * 0.6 * st.lenK * (0.55 + 0.45 * fl.reach) * sb;
        const up = L * 0.5 * st.bend;
        const ex = ox + c * L * 0.82;
        const ey = oy + s * L * 0.72 - up;
        ctx.moveTo(ox, oy);
        ctx.bezierCurveTo(
          ox + c * L * 0.42,
          oy + s * L * 0.42,
          ox + c * L * 0.8,
          oy + s * L * 0.75 - up * 0.35,
          ex,
          ey,
        );
        tips.push(ex, ey);
      }
      ctx.stroke();

      ctx.fillStyle = rgba(mix(mix([214, 196, 160], [120, 6, 18], r), BG, haze), a);
      ctx.beginPath();
      const ar = Math.max(0.8, S * 0.009) * sb;
      for (let i = 0; i < tips.length; i += 2) {
        ctx.moveTo(tips[i] + ar, tips[i + 1]);
        ctx.arc(tips[i], tips[i + 1], ar, 0, TAU);
      }
      ctx.fill();
    }
  }
}
