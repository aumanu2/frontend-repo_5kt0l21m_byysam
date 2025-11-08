import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);

  const magnetize = (e, ref) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px) scale(1.05)`;
  };

  const resetMagnet = (ref) => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0) scale(1)';
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/90" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 pt-28 pb-20">
        <motion.p
          className="mb-3 text-sm font-medium tracking-wide text-teal-300"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
        >
          👋 Hi, I’m Rahul
        </motion.p>
        <motion.h1
          className="mb-6 text-4xl font-semibold leading-tight md:text-6xl"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={1}
        >
          UI/UX & Product Designer shaping meaningful digital experiences
        </motion.h1>
        <motion.p
          className="max-w-3xl text-lg text-slate-200 md:text-xl"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={2}
        >
          I design accessible, user-centered, and impact-driven digital products that help people learn, work, and grow effectively. My mission is to create design systems, smooth interactions, and experiences rooted in clarity, inclusivity, and human behavior.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={3}
        >
          <button
            ref={primaryBtnRef}
            onMouseMove={(e) => magnetize(e, primaryBtnRef)}
            onMouseLeave={() => resetMagnet(primaryBtnRef)}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-teal-400 px-6 py-3 font-semibold text-slate-900 transition-transform duration-200 hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <span>View My Work</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </button>

          <button
            ref={secondaryBtnRef}
            onMouseMove={(e) => magnetize(e, secondaryBtnRef)}
            onMouseLeave={() => resetMagnet(secondaryBtnRef)}
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition-transform duration-200 hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-teal-300/40"
          >
            <span>Let’s Collaborate</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
