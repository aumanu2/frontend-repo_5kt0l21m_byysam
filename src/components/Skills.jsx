import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'User Research',
  'Wireframing & Prototyping',
  'Interaction Design',
  'Visual Design & UI Systems',
  'Product Thinking',
  'UX Writing',
  'Problem-Solving & Strategy',
  'Accessibility Design',
  'Design Systems',
];

const tools = ['Figma', 'Notion', 'Miro', 'FigJam', 'Illustrator', 'Webflow', 'Framer'];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Skills</h2>
          <p className="mt-2 text-slate-300">Core skills and tools I use to craft impactful experiences.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:col-span-2">
            <h3 className="mb-4 text-xl font-semibold">Core Skills</h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {skills.map((s) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-3"
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-4 text-xl font-semibold">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
