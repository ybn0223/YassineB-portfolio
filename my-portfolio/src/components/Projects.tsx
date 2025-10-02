import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const projects = [
  { key: "portfolio", link: "https://github.com/ybn0223/YassineB-portfolio" },
  { key: "countryQuiz", link: "https://groups.google.com/g/country-quiz-closed-testing-phase" },
  { key: "examPlatform", link: "https://teach-me-ui.vercel.app/#/login" },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-sky-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
        >
          {t('projects.title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-xl transition"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t(`projects.items.${project.key}.title`)}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t(`projects.items.${project.key}.description`)}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sky-500 dark:text-sky-400 hover:underline">
                {t(`projects.items.${project.key}.source`)} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}