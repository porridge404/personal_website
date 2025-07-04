import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import InteractiveResume from './components/InteractiveResume';
import MyProjects from './components/MyProjects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectLanding from './components/ProjectLanding';

function App() {
  const [isInteractiveResumeActive, setIsInteractiveResumeActive] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        <Routes>
          <Route path="/project/:projectId" element={<ProjectLanding />} />
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <InteractiveResume 
                  setIsInteractiveResumeActive={setIsInteractiveResumeActive}
                />
                <MyProjects />
                <Publications />
                <Contact />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;