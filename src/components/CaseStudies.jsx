import React from 'react';
import { motion } from 'framer-motion';

function CaseBlock({ title, snapshot, problem, goal, solution, features, outcome, micro, accent }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <span className="rounded-full px-2 py-0.5 text-xs" style={{ backgroundColor: accent + '22', color: accent }}>
          Full Case Study
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="space-y-4 md:col-span-1">
          <div>
            <h4 className="mb-1 font-semibold text-slate-100">Project Snapshot</h4>
            <p className="text-sm text-slate-300">{snapshot}</p>
          </div>
          <div>
            <h4 className="mb-1 font-semibold text-slate-100">Problem</h4>
            <p className="text-sm text-slate-300">{problem}</p>
          </div>
          <div>
            <h4 className="mb-1 font-semibold text-slate-100">Goal</h4>
            <p className="text-sm text-slate-300">{goal}</p>
          </div>
        </div>

        <div className="space-y-4 md:col-span-2">
          <div>
            <h4 className="mb-1 font-semibold text-slate-100">Solution</h4>
            <p className="text-sm text-slate-300">{solution}</p>
          </div>
          <div>
            <h4 className="mb-1 font-semibold text-slate-100">Key Features</h4>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 text-sm text-slate-300">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-1 font-semibold text-slate-100">Outcome</h4>
            <p className="text-sm text-slate-300">{outcome}</p>
          </div>
          <div>
            <h4 className="mb-1 font-semibold text-slate-100">Micro-Interactions</h4>
            <ul className="list-disc pl-5 text-sm text-slate-300">
              {micro.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Case Studies</h2>
          <p className="mt-2 text-slate-300">Deep dives into end-to-end design process and outcomes.</p>
        </div>

        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <CaseBlock
              title="SmartMed — Medicine Expiry Tracker"
              snapshot="Role: UX Researcher, Interaction Designer, UI Designer • Timeline: 6 Weeks • Project Type: Mobile App"
              problem="Millions of Indians forget to track medicine expiry dates, leading to wastage, health risks, and emergencies. Users need a simple way to track expiry with automated reminders and an intuitive visual system."
              goal="Design a clean, fast app that helps people add medicines easily, track expiry visually, get reminders before expiry, and stay safe & organized."
              solution="A clutter-free tracker with scan & add, color-coded dashboard, smart notification timing, and minimal high-readability UI."
              features={[
                'One-tap medicine entry',
                'AI-suggested expiry estimation',
                'Visual timeline (Red → Amber → Green)',
                'Weekly summary notifications',
              ]}
              outcome="Reduced cognitive load by 40%, clearer expiry awareness, fast 2-step onboarding, and highly positive feedback."
              micro={[
                'Cards rise on hover (y=-4, shadow-lg)',
                'Progress bars animate from 0% → value',
                'Check icons pop with scale animation',
              ]}
              accent="#D6452E"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
            <CaseBlock
              title="EduFlow — AI-Enhanced Study Companion"
              snapshot="Role: Product Designer • Timeline: 5 Weeks • Platform: Web App"
              problem="Students face note overload, unorganized flow, lack of personalized support, and difficulty revising consistently."
              goal="Help students learn smarter with AI-assisted organization, personalized paths, and a clean distraction-free interface."
              solution="Smart hub: AI organizes notes automatically, generates flashcards, and provides weekly personalized summaries with dark/light mode UI."
              features={[
                'AI Summary Generator',
                'Focus Mode with timer',
                'Smart folders',
                'Revision streak system',
              ]}
              outcome="25% improvement in revision efficiency and 3X increase in daily usage driven by gamified UX."
              micro={[
                'Streak flames glow on hover',
                'Flashcards flip with 3D animation',
                'Floating quick-add animates on scroll',
              ]}
              accent="#0EA5E9"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <CaseBlock
              title="TaskSphere — Productivity Dashboard"
              snapshot="Role: Lead UI/UX Designer • Timeline: 4 Weeks • Platform: Web Dashboard"
              problem="Professionals struggle with scattered tasks, lack of unified progress view, and poor prioritization."
              goal="Create a centralized system with clear prioritization and progress visibility."
              solution="Dashboard with drag-and-drop tasks, weekly performance charts, priority-based tagging, and a calendar + Kanban hybrid design."
              features={[
                'Drag-and-drop task management',
                'Weekly performance charts',
                'Priority-based tagging',
                'Calendar + Kanban hybrid',
              ]}
              outcome="35% reduction in planning time, clearer visibility, and smooth task-to-goal linkage."
              micro={[
                'Kanban cards glide smoothly',
                'Priority tags animate with color',
                'Stats widgets animate on load',
              ]}
              accent="#22C55E"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
