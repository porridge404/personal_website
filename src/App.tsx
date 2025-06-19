import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import LinkedInWidget from './components/LinkedInWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FirebaseStatus from './components/FirebaseStatus';
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
        <LinkedInWidget />
        <Contact />
      </main>
      <Footer />
      <FirebaseStatus />
    </div>
  );
}

export default App;