import React from "react";
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();

	return (
	  <footer className="bg-white dark:bg-gray-900 p-4 text-center text-sm text-gray-700 dark:text-gray-300">
		<p>© 2025 Yassine Benmendour. {t('footer.rights')}</p>
	  </footer>
	);
  }  