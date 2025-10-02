import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeButton from './ThemeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    if (dropdownOpen || langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen, langDropdownOpen]);

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
              <Link to="about" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">{t('nav.about')}</Link>
              <Link to="skills" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">{t('nav.skills')}</Link>
              <Link to="projects" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">{t('nav.projects')}</Link>
              <Link to="contact" smooth={true} duration={500} className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">{t('nav.contact')}</Link>
            </>
          ) : (
            <>
              <RouterLink to="/" className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">{t('nav.home')}</RouterLink>
            </>
          )}
          <RouterLink to="/blog" className="hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer">{t('nav.blog')}</RouterLink>
          
          {/* Language Switcher */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1 hover:text-indigo-500 dark:hover:text-indigo-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faGlobe} />
              <span className="text-sm">{i18n.language === 'nl-BE' ? 'NL' : 'EN'}</span>
            </button>
            
            {langDropdownOpen && (
              <div className="absolute top-8 right-0 bg-white dark:bg-gray-800 shadow-lg rounded text-gray-800 dark:text-white w-32 z-50">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => changeLanguage('en-US')}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {t('language.english')}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => changeLanguage('nl-BE')}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {t('language.dutch')}
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
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
                    <li><Link to="about" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>{t('nav.about')}</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>{t('nav.skills')}</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>{t('nav.projects')}</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>{t('nav.contact')}</Link></li>
                  </>
                ) : (
                  <li><RouterLink to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>{t('nav.home')}</RouterLink></li>
                )}
                <li><RouterLink to="/blog" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => setDropdownOpen(false)}>{t('nav.blog')}</RouterLink></li>
                
                {/* Language options in mobile */}
                <li className="border-t border-gray-200 dark:border-gray-600 mt-2 pt-2">
                  <div className="px-4 py-1 text-xs text-gray-500 dark:text-gray-400 uppercase">{t('language.switch')}</div>
                  <button
                    onClick={() => { changeLanguage('en-US'); setDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {t('language.english')}
                  </button>
                  <button
                    onClick={() => { changeLanguage('nl-BE'); setDropdownOpen(false); }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {t('language.dutch')}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
