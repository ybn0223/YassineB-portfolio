import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ThemeButton from './ThemeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-3xl font-bold text-sky-500 dark:text-indigo-300 cursor-pointer"
        >
          Yassine
        </Link>

        {/* Desktop nav */}
        <div className="hidden min-[481px]:flex space-x-6 text-lg items-center">
          <Link to="about" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Contact</Link>
          <ThemeButton />
        </div>

        {/* Mobile nav */}
        <div className="flex items-center min-[481px]:hidden" ref={dropdownRef}>
          <ThemeButton />
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-10 h-10 ml-4 px-2 py-1 bg-sky-500 text-white rounded hover:bg-sky-600 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            <FontAwesomeIcon className='fa-xl' icon={!dropdownOpen ? faBars : faX} />
          </button>

          {dropdownOpen && (
            <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 shadow-md rounded text-gray-800 dark:text-white w-44 z-50">
              <ul className="py-1">
                <li><Link to="about" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Contact</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
