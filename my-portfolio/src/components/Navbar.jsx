import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold text-sky-500 dark:text-indigo-300 cursor-pointer"
        >
          Yassine
        </Link>
        <div className="space-x-6 text-lg flex items-center">
          <Link to="about" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">About</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">Contact</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-2 py-1 bg-sky-500 text-white rounded hover:bg-sky-600 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            {darkMode ?
			<FontAwesomeIcon icon={faMoon} />
				:
			<FontAwesomeIcon icon={faSun} />
			}
          </button>
        </div>
      </div>
    </nav>
  );
}