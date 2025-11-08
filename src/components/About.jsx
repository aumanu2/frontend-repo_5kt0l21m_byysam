import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative z-10 bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div variants={item}>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">About Me</h2>
            <p className="text-slate-300">
              I’m Rahul, a UI/UX Designer transitioning from digital marketing into building thoughtful, intuitive product experiences. I combine skills in user psychology, problem-solving, and visual storytelling to turn complex challenges into elegant solutions.
            </p>

            <h3 className="mt-8 mb-3 text-xl font-semibold">My Long-Term Vision</h3>
            <p className="text-slate-300">
              To become a Lead Product Designer driving design strategy for global products, building accessible, innovative, user-centered systems that impact millions.
            </p>
          </motion.div>

          <motion.div variants={item} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-4 text-xl font-semibold">My Core Values</h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ['Inclusivity', 'Design that welcomes everyone'],
                ['Growth', 'Continuous learning & iteration'],
                ['Innovation', 'Push boundaries with purpose'],
                ['Empathy', 'Understand people deeply'],
                ['Craft', 'Precision, clarity, and intentionality'],
              ].map(([title, desc]) => (
                <li key={title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <p className="font-semibold text-teal-300">{title}</p>
                  <p className="text-sm text-slate-300">{desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
