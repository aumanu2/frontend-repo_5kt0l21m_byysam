import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CaseStudies />
      <Contact />

      <footer className="border-t border-slate-800 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-center text-slate-400">“Designing with purpose, clarity & compassion.”</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
