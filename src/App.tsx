import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GoogleProjects from './components/GoogleProjects';
import LinkedInWidget from './components/LinkedInWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GoogleProjects />
        <LinkedInWidget />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;