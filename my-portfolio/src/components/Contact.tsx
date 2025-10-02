import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.h2 
          className="text-4xl font-bold text-sky-500 mb-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
        >
          {t('contact.title')}
        </motion.h2>
        <motion.p 
          className="text-gray-700 dark:text-gray-100 mb-6 text-lg"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t('contact.subtitle')}
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a href="mailto:Yassineben-2004@hotmail.com" className="text-sky-500 hover:underline">Email</a>
          <a href="https://github.com/ybn0223" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/yassine-benmendour" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">LinkedIn</a>
        </motion.div>
      </div>
    </section>
  );
}