import { useEffect, useState } from "react";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";

const ThemeButton = () => {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		if (darkMode) {
		  document.documentElement.classList.add('dark');
		} else {
		  document.documentElement.classList.remove('dark');
		}
	  }, [darkMode]);

	return ( <>
	<button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 ml-4 px-2 py-1 bg-sky-500 text-white rounded hover:bg-sky-600 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            {darkMode ?
			<FontAwesomeIcon className="fa-xl" icon={faMoon} />
				:
			<FontAwesomeIcon className="fa-xl" icon={faSun} />
			}
          </button>
	</> );
}
 
export default ThemeButton;