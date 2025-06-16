import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Presentations from './components/Presentations';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Presentations />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;