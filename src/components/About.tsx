import React from "react";
import { motion } from "motion/react";
import { Download, User, Mail, MapPin, Briefcase } from "lucide-react";
import { Profile } from "../types";

interface AboutProps {
  profile: Profile;
  darkMode: boolean;
}

export default function About({ profile, darkMode }: AboutProps) {
  const handleDownloadCV = () => {
    // Generate an automatic print dialog which styles as a clean resume,
    // or provide an elegant alert explaining how to save the page.
    window.print();
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Narrative */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase font-mono mb-2 block">
              About Me
            </span>
            <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              About Me
            </h2>
            <p className={`text-base sm:text-lg mb-6 leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              {profile.about}
            </p>
            <p className={`text-sm mb-8 ${
              darkMode ? "text-slate-500" : "text-slate-500"
            }`}>
              I excel in translating complex requirements into simple, elegant digital systems. Whether optimizing database queries, training predictive models, or refining frontend styling for mobile compliance, I focus on delivering impact at every stage.
            </p>

            <button
              id="download-cv-btn"
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-brand-purple dark:hover:bg-brand-purple/90 text-white font-medium px-5 py-3 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-sm"
            >
              <Download className="h-4.5 w-4.5" />
              Download CV / Resume
            </button>
          </motion.div>

          {/* Right Block: Details Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-sm shadow-xl ${
              darkMode
                ? "border-slate-900 bg-slate-950/40 text-slate-300 shadow-slate-950/50"
                : "border-slate-100 bg-white/70 text-slate-700 shadow-slate-200/50"
            }`}>
              <div className="space-y-6">
                {/* Detail Row 1 */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${
                    darkMode ? "bg-slate-900 text-brand-purple" : "bg-slate-100 text-brand-purple"
                  }`}>
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-wider text-slate-400 uppercase">Name</div>
                    <div className={`text-base font-semibold mt-0.5 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}>
                      {profile.name}
                    </div>
                  </div>
                </div>

                {/* Detail Row 2 */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${
                    darkMode ? "bg-slate-900 text-brand-purple" : "bg-slate-100 text-brand-purple"
                  }`}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono tracking-wider text-slate-400 uppercase">Email</div>
                    <a
                      id="about-email-link"
                      href={`mailto:${profile.email}`}
                      className={`text-base font-semibold mt-0.5 block truncate hover:text-brand-purple transition-colors ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Detail Row 3 */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${
                    darkMode ? "bg-slate-900 text-brand-purple" : "bg-slate-100 text-brand-purple"
                  }`}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-wider text-slate-400 uppercase">Location</div>
                    <div className={`text-base font-semibold mt-0.5 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}>
                      {profile.location}
                    </div>
                  </div>
                </div>

                {/* Detail Row 4 */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${
                    darkMode ? "bg-slate-900 text-brand-purple" : "bg-slate-100 text-brand-purple"
                  }`}>
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-wider text-slate-400 uppercase">Availability</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className={`text-sm font-semibold ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}>
                        Available for work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
