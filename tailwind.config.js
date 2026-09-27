/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          light: '#FAF8F3',
          base: '#F5F1E8',
          card: '#EDE6D8',
          dark: '#E4DCCB',
          aged: '#DDD3BF',
        },
        ink: {
          black: '#171614',
          deep: '#262421',
          muted: '#545048',
          faint: '#868074',
          border: 'rgba(38, 36, 33, 0.12)',
        },
        paint: {
          orange: '#C85A32',
          blue: '#2B5898',
          green: '#2D5D44',
          wine: '#8E3345',
          ochre: '#C98A2C',
          teal: '#3B7577',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'sketch': '3px 4px 0px rgba(23, 22, 20, 0.08)',
        'sketch-lg': '6px 8px 0px rgba(23, 22, 20, 0.10)',
        'paper': '0 20px 40px -15px rgba(23, 22, 20, 0.07), 0 0 1px rgba(23, 22, 20, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(38, 36, 33, 0.08) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
