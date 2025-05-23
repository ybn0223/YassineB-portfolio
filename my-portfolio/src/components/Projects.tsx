import React from "react";

/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

const projects = [
  { title: "Portfolio Website", description: "Personal portfolio built with React and TailwindCSS.", source:"View on Github", link: "https://github.com/ybn0223/YassineB-portfolio" },
  { title: "Country Quiz App", description: "Simple mobile game where you guess countries and capitals based on the flag.", source:"View App",  link: "https://groups.google.com/g/country-quiz-closed-testing-phase" },
  { title: "Exam Platform", description: "This was a school project that I made in a group of 5 people divided over front and back end and testing. It is an in-house exam training platform for the employees of the company B.Ignited", source:"View website",  link: "https://teach-me-ui.vercel.app/#/login" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-sky-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-xl transition"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sky-500 dark:text-sky-400 hover:underline">
                {project.source} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}