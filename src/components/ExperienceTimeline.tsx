import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { Experience } from "../types";

interface ExperienceTimelineProps {
  experiences: Experience[];
  darkMode: boolean;
}

export default function ExperienceTimeline({ experiences, darkMode }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="py-20 relative">
      {/* Decorative ambient spot */}
      <div className="absolute right-1/4 top-1/3 w-64 h-64 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase font-mono mb-2 block">
            Work Experience
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Professional Experience
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8">
          {/* Vertical central tracking bar */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-purple via-brand-blue to-transparent" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                id={`exp-node-${exp.id}`}
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Node Bullet Dot */}
                <span className="absolute -left-6 sm:-left-8 top-1.5 flex h-4 w-4 items-center justify-center -translate-x-1/2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple/40 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-purple"></span>
                </span>

                {/* Timeline Card Content */}
                <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg transition-shadow duration-300 hover:shadow-xl ${
                  darkMode
                    ? "border-slate-900 bg-slate-950/40 text-slate-300 hover:border-slate-800"
                    : "border-slate-100 bg-white text-slate-700 hover:border-slate-200"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      {/* Job Title */}
                      <h3 className={`text-xl font-bold tracking-tight font-display ${
                        darkMode ? "text-white" : "text-slate-800"
                      }`}>
                        {exp.role}
                      </h3>
                      {/* Company Info */}
                      <p className="text-sm font-semibold text-brand-purple mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    {/* Duration Label */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border ${
                      darkMode
                        ? "bg-slate-900 border-slate-800 text-slate-400"
                        : "bg-slate-50 border-slate-100 text-slate-600"
                    }`}>
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Job Description (Editable paragraphs / list items) */}
                  <div className="space-y-3 mb-6">
                    {exp.description.split(". ").map((sentence, idx) => {
                      if (!sentence.trim()) return null;
                      return (
                        <div key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-brand-blue flex-shrink-0 mt-0.5" />
                          <p>{sentence.trim()}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Skills tags deployed in the internship */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/20 dark:border-slate-800/40">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                          darkMode
                            ? "bg-slate-900 text-slate-400"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
