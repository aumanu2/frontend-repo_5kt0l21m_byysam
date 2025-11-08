import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Let’s Build Something Meaningful Together</h2>
          <p className="mt-3 text-slate-300">
            Email: <a className="text-teal-300 hover:text-teal-200" href="mailto:rahul.designs@example.com">rahul.designs@example.com</a>
          </p>
          <p className="text-slate-300">
            LinkedIn: <a className="text-teal-300 hover:text-teal-200" href="#" target="_blank" rel="noreferrer">Add your profile here</a>
          </p>
        </div>

        <a
          href="mailto:rahul.designs@example.com"
          className="inline-flex items-center justify-center rounded-xl bg-teal-400 px-6 py-3 font-semibold text-slate-900 transition-transform duration-200 hover:scale-[1.05]"
        >
          Get in Touch →
        </a>
      </div>
    </section>
  );
}
