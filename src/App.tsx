import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import LinkedInWidget from './components/LinkedInWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FirebaseStatus from './components/FirebaseStatus';
import GoogleIntegrations from './components/GoogleIntegrations';
import { trackPageView } from './services/analyticsService';

function App() {
  useEffect(() => {
    // Track initial page view
    trackPageView('Portfolio Home');
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <LinkedInWidget />
        <Contact />
      </main>
      <Footer />
      <FirebaseStatus />
      
      {/* Google Integrations Panel - Fixed position */}
      <div className="fixed bottom-4 right-4 z-40 max-w-sm">
        <GoogleIntegrations />
      </div>
    </div>
  );
}

export default App;