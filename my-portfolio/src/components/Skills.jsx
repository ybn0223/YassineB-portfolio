/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express", ".NET", "C#", "MongoDB", "SQL", "AWS", "Azure"
];

export default function Skills() {
  return (
    <section id="skills" className="bg-sky-100 dark:bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-sky-500 text-center mb-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium shadow hover:bg-sky-200"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}