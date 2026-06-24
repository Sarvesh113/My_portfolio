import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Landmark, Award } from "lucide-react";
import { Education } from "../types";

interface EducationProps {
  educations: Education[];
  darkMode: boolean;
}

export default function EducationComponent({ educations, darkMode }: EducationProps) {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase font-mono mb-2 block">
            Academic Background
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Education History
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              id={`edu-card-${edu.id}`}
              key={edu.id}
              className={`p-6 sm:p-8 rounded-3xl border shadow-md flex flex-col justify-between transition-all duration-300 group ${
                darkMode
                  ? "border-slate-900 bg-slate-950/40 text-slate-300 hover:border-slate-800 hover:shadow-slate-950/80"
                  : "border-slate-100 bg-white text-slate-700 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className={`p-3.5 rounded-2xl transition-colors duration-300 ${
                    darkMode ? "bg-slate-900 text-brand-purple group-hover:bg-brand-purple group-hover:text-white" : "bg-slate-50 text-brand-purple group-hover:bg-brand-purple group-hover:text-white"
                  }`}>
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  {/* Year Tag */}
                  <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
                    darkMode
                      ? "border-slate-800 bg-slate-900 text-slate-400"
                      : "border-slate-200 bg-slate-50 text-slate-600"
                  }`}>
                    {edu.year}
                  </span>
                </div>

                {/* Degree / Certificate Title */}
                <h3 className={`text-xl font-bold tracking-tight font-display mb-2 group-hover:text-brand-purple transition-colors ${
                  darkMode ? "text-white" : "text-slate-800"
                }`}>
                  {edu.degree}
                </h3>

                {/* School / Institution */}
                <div className="flex items-center gap-1.5 text-sm font-medium mb-4 text-slate-400 dark:text-slate-500">
                  <Landmark className="h-4 w-4 text-brand-blue" />
                  <span>{edu.institution}</span>
                </div>

                {/* Details */}
                {edu.details && (
                  <p className={`text-sm leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {edu.details}
                  </p>
                )}
              </div>

              {/* Decorative bottom glow mark */}
              <div className="flex items-center gap-1 mt-6 pt-4 border-t border-slate-200/20 dark:border-slate-800/40 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                <Award className="h-4 w-4 text-brand-purple" />
                <span>Verified Academic Credentials</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
