/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-20 px-6">
      <motion.h2 
        className="text-4xl font-bold text-indigo-600 mb-8 text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="text-lg leading-8"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
      >
        I'm a Computer Programming student at Artesis Plantijn University. 
        I love combining creativity and logic to build impactful applications. 
        Outside coding, you’ll find me playing football, traveling, or exploring the world on my motorcycle.
      </motion.p>
    </section>
  );
}
