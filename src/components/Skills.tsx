import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { Skill } from "../types";

interface SkillsProps {
  skills: Skill[];
  darkMode: boolean;
}

// Map color keys to Tailwind CSS color classes for the bottom borders & text glow
const colorMaps: Record<string, { border: string; bg: string; text: string; lightBg: string }> = {
  blue: {
    border: "bg-blue-500",
    bg: "dark:bg-blue-500/10",
    lightBg: "bg-blue-50",
    text: "text-blue-500 dark:text-blue-400"
  },
  cyan: {
    border: "bg-cyan-500",
    bg: "dark:bg-cyan-500/10",
    lightBg: "bg-cyan-50",
    text: "text-cyan-500 dark:text-cyan-400"
  },
  amber: {
    border: "bg-amber-500",
    bg: "dark:bg-amber-500/10",
    lightBg: "bg-amber-50",
    text: "text-amber-500 dark:text-amber-400"
  },
  indigo: {
    border: "bg-indigo-500",
    bg: "dark:bg-indigo-500/10",
    lightBg: "bg-indigo-50",
    text: "text-indigo-500 dark:text-indigo-400"
  },
  green: {
    border: "bg-green-500",
    bg: "dark:bg-green-500/10",
    lightBg: "bg-green-50",
    text: "text-green-500 dark:text-green-400"
  },
  emerald: {
    border: "bg-emerald-500",
    bg: "dark:bg-emerald-500/10",
    lightBg: "bg-emerald-50",
    text: "text-emerald-500 dark:text-emerald-400"
  },
  orange: {
    border: "bg-orange-500",
    bg: "dark:bg-orange-500/10",
    lightBg: "bg-orange-50",
    text: "text-orange-500 dark:text-orange-400"
  },
  red: {
    border: "bg-red-500",
    bg: "dark:bg-red-500/10",
    lightBg: "bg-red-50",
    text: "text-red-500 dark:text-red-400"
  },
  sky: {
    border: "bg-sky-500",
    bg: "dark:bg-sky-500/10",
    lightBg: "bg-sky-50",
    text: "text-sky-500 dark:text-sky-400"
  },
  yellow: {
    border: "bg-yellow-500",
    bg: "dark:bg-yellow-500/10",
    lightBg: "bg-yellow-50",
    text: "text-yellow-500 dark:text-yellow-400"
  },
  purple: {
    border: "bg-brand-purple",
    bg: "dark:bg-brand-purple/10",
    lightBg: "bg-purple-50",
    text: "text-brand-purple dark:text-purple-400"
  }
};

export default function Skills({ skills, darkMode }: SkillsProps) {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase font-mono mb-2 block animate-pulse">
            My Skills
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Technologies I Work With
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            // Dynamically lookup the icon component from Lucide
            const IconComponent = (Icons as any)[skill.icon] || Icons.Code2;
            const colorScheme = colorMaps[skill.color] || colorMaps.purple;

            return (
              <motion.div
                id={`skill-card-${skill.id}`}
                key={skill.id}
                className={`relative group rounded-2xl border p-5 transition-all duration-300 flex flex-col items-center text-center overflow-hidden h-40 justify-center ${
                  darkMode
                    ? "border-slate-900 bg-slate-950/40 hover:bg-slate-900/40 hover:border-slate-800"
                    : "border-slate-100 bg-white hover:bg-slate-50/50 hover:border-slate-200 hover:shadow-md"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                {/* Colored glowing blur spot inside card (dark mode only) */}
                <div className={`absolute top-0 right-0 w-12 h-12 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10 ${colorScheme.border}`} />

                {/* Skill Icon */}
                <div className={`p-3 rounded-xl mb-3 transition-transform duration-300 group-hover:scale-110 ${
                  darkMode ? colorScheme.bg : colorScheme.lightBg
                } ${colorScheme.text}`}>
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Skill Name */}
                <h3 className={`text-base font-bold tracking-tight ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}>
                  {skill.name}
                </h3>

                {/* Skill Subtitle/Category */}
                <p className={`text-xs font-mono tracking-wider mt-1 font-medium uppercase ${
                  darkMode ? "text-slate-500" : "text-slate-400"
                }`}>
                  {skill.category}
                </p>

                {/* Colored Bottom Accent Underline */}
                <div className={`absolute bottom-0 inset-x-5 h-1 rounded-t-full transition-all duration-300 group-hover:inset-x-0 group-hover:h-1.5 ${
                  colorScheme.border
                }`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
