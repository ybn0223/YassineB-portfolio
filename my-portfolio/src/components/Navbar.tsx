import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
        {isHomePage ? (
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-3xl font-bold text-sky-500 dark:text-indigo-300 cursor-pointer"
          >
            Yassine
          </Link>
        ) : (
          <RouterLink
            to="/"
            className="text-3xl font-bold text-sky-500 dark:text-indigo-300 cursor-pointer hover:text-sky-600 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            Yassine
          </RouterLink>
        )}

        {/* Desktop nav */}
        <div className="hidden min-[481px]:flex space-x-6 text-lg items-center">
          {isHomePage ? (
            <>
              <Link to="about" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">About</Link>
              <Link to="skills" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Skills</Link>
              <Link to="projects" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Projects</Link>
              <Link to="contact" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Contact</Link>
            </>
          ) : (
            <>
              <RouterLink to="/" className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Home</RouterLink>
            </>
          )}
          <RouterLink to="/blog" className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Blog</RouterLink>
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
                {isHomePage ? (
                  <>
                    <li><Link to="about" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>About</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>Skills</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>Contact</Link></li>
                  </>
                ) : (
                  <li><RouterLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>Home</RouterLink></li>
                )}
                <li><RouterLink to="/blog" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>Blog</RouterLink></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
