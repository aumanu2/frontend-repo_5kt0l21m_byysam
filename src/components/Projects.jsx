import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SmartMed – Medicine Expiry Tracker App',
    tag: 'Primary Case Study',
    color: '#D6452E',
    points: [
      'One-tap medicine entry',
      'Color-coded expiry dashboard',
      'Smart notifications',
    ],
  },
  {
    title: 'EduFlow – AI-Enhanced Study Companion Web App',
    tag: 'Web App',
    color: '#0EA5E9',
    points: ['AI-assisted organization', 'Flashcards from content', 'Dark/Light UI'],
  },
  {
    title: 'TaskSphere – Productivity & Task Management Dashboard',
    tag: 'Dashboard',
    color: '#22C55E',
    points: ['Drag-and-drop management', 'Weekly performance charts', 'Priority tags'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-slate-300">Browse highlighted work and dive into full case studies below.</p>
          </div>
          <a href="#case-studies" className="text-teal-300 hover:text-teal-200">View Case Studies →</a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full px-2 py-0.5 text-xs" style={{ backgroundColor: p.color + '22', color: p.color }}>
                  {p.tag}
                </span>
                <span className="text-slate-400">Case Study</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">{p.title}</h3>
              <ul className="space-y-2 text-slate-300">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
