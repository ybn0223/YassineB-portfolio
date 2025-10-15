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
            className="w-7"
          >
            {darkMode ?
			<FontAwesomeIcon icon={faMoon} />
				:
			<FontAwesomeIcon icon={faSun} />
			}
          </button>
	</> );
}
 
export default ThemeButton;