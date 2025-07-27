import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        
        <footer className="mt-20 pb-8 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/devang115" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/devangmiskin" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="mailto:info@logibyte.tech" className="text-gray-600 hover:text-gray-900">
              <Mail size={24} />
            </a>
            <a href="tel:+918140322233" className="text-gray-600 hover:text-gray-900">
              <Phone size={24} />
            </a>
          </div>
          <p className="text-gray-600">© 2025 Devang Miskin. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;