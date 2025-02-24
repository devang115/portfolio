import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Devang Miskin</h1>
          
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="md:flex md:space-x-8 space-y-2 md:space-y-0">
              <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
              <li><a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a></li>
              <li><a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a></li>
              <li><a href="#education" className="text-gray-600 hover:text-gray-900">Education</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}