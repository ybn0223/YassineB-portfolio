import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900">
      <motion.h1 
        className="bg-sky dark:bg-gray-900 text-5xl font-bold text-sky-500 mb-4"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {t('hero.greeting')}
      </motion.h1>
      <motion.p 
        className="text-lg text-gray-700 dark:text-gray-300 max-w-md"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {t('hero.description')}
      </motion.p>
      <motion.a 
        href="#projects"
        className="mt-8 px-6 py-3 bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {t('hero.cta')}
      </motion.a>
    </section>
  );
};

export default Hero;