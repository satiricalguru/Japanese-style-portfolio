import React from 'react';
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

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-parchment-base text-ink-deep selection:bg-paint-orange/20 selection:text-ink-black overflow-x-hidden">
      {/* Restrained Project-Gallery Cursor for Desktop */}
      <CustomCursor />

      {/* Global Analog Paper Grid & Texture Layer */}
      <div className="fixed inset-0 pointer-events-none notebook-grid opacity-50 z-0" />
      <div className="fixed inset-0 pointer-events-none paper-grain opacity-30 z-0" />

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
