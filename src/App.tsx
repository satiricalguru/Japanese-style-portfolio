import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Lab } from './components/Lab';
import { EngineeringMap } from './components/EngineeringMap';
import { AboutNotebook } from './components/AboutNotebook';
import { GitHubTelemetry } from './components/GitHubTelemetry';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { IntroAnimation } from './components/IntroAnimation';

export const App: React.FC = () => {
  const [, setIntroFinished] = useState(false);

  return (
    <div className="relative min-h-screen bg-parchment-base text-ink-deep selection:bg-paint-orange/20 selection:text-ink-black overflow-x-hidden">
      {/* Custom Desktop Magnetic Ink Cursor */}
      <CustomCursor />

      {/* Quick 1.2s Ink Reveal Intro */}
      <IntroAnimation onComplete={() => setIntroFinished(true)} />

      {/* Global Analog Paper Grid & Texture Layer */}
      <div className="fixed inset-0 pointer-events-none notebook-grid opacity-60 z-0" />
      <div className="fixed inset-0 pointer-events-none paper-grain opacity-40 z-0" />

      {/* Floating Frosted Glass Navbar */}
      <Navbar />

      {/* Main Narrative Flow */}
      <main className="relative z-10">
        <Hero />
        <ProjectShowcase />
        <Lab />
        <EngineeringMap />
        <AboutNotebook />
        <GitHubTelemetry />
        <ContactSection />
      </main>

      {/* Minimalist Colophon Footer */}
      <Footer />
    </div>
  );
};

export default App;
