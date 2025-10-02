import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-sky-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <motion.h2 
        className="text-4xl font-bold text-indigo-600 mb-8 text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
      >
        {t('about.title')}
      </motion.h2>
      <motion.p 
        className="text-lg text-center leading-8 px-20"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
      >
        {t('about.description')}
      </motion.p>
    </section>
  );
}
