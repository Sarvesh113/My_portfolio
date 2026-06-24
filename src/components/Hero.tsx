import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight, Code2, Instagram } from "lucide-react";
import { Profile } from "../types";

interface HeroProps {
  profile: Profile;
  darkMode: boolean;
}

export default function Hero({ profile, darkMode }: HeroProps) {
  const nameParts = profile.name.split(" ");
  const firstName = nameParts[0] || "Sarvesh";
  const lastName = nameParts.slice(1).join(" ") || "Gotmare";

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Neon Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-purple/20 blur-3xl -z-10 pointer-events-none animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl -z-10 pointer-events-none animate-pulse duration-[8000ms]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag/Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping" />
              <span className="text-xs font-semibold tracking-wider font-mono">
                {profile.role.split("/")[0] || "Full Stack Developer"}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
              <span className={darkMode ? "text-white" : "text-slate-900"}>{firstName}</span>{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                {lastName}
              </span>
            </h1>

            {/* Subheading */}
            <h2 className={`font-display text-xl sm:text-2xl font-semibold mb-6 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}>
              {profile.role}
            </h2>

            {/* Tagline / Bio */}
            <p className={`text-base sm:text-lg max-w-xl mb-8 leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              {profile.tagline}. {profile.about.slice(0, 110)}...
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                id="view-work-btn"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-brand-purple/20 hover:shadow-xl hover:shadow-brand-purple/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                id="contact-me-btn"
                onClick={() => handleScrollTo("contact")}
                className={`inline-flex items-center gap-2 border font-medium px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer ${
                  darkMode
                    ? "border-slate-800 text-slate-300 bg-slate-950/45 hover:bg-slate-900/60 hover:text-white hover:border-slate-700"
                    : "border-slate-200 text-slate-700 bg-white/45 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                Contact Me
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-5">
              {[
                {
                  id: "github",
                  href: profile.github.startsWith("http") ? profile.github : `https://${profile.github}`,
                  icon: <Github className="h-5 w-5" />,
                  label: "GitHub",
                },
                {
                  id: "linkedin",
                  href: profile.linkedin.startsWith("http") ? profile.linkedin : `https://${profile.linkedin}`,
                  icon: <Linkedin className="h-5 w-5" />,
                  label: "LinkedIn",
                },
                {
                  id: "instagram",
                  href: "https://instagram.com",
                  icon: <Instagram className="h-5 w-5" />,
                  label: "Instagram",
                },
                {
                  id: "email",
                  href: `mailto:${profile.email}`,
                  icon: <Mail className="h-5 w-5" />,
                  label: "Email",
                },
              ].map((social) => (
                <a
                  id={`social-link-${social.id}`}
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full border transition-all duration-300 ${
                    darkMode
                      ? "border-slate-900 bg-slate-950/60 text-slate-400 hover:text-white hover:border-brand-purple hover:bg-brand-purple/10"
                      : "border-slate-100 bg-white text-slate-500 hover:text-slate-900 hover:border-brand-purple hover:bg-brand-purple/5"
                  }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Hero Right Media Column */}
          <div className="lg:col-span-5 flex justify-end relative mt-8 lg:mt-0">
            {/* Cyber Orbit Decorative Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-dashed border-brand-purple/20 animate-spin duration-[15000ms] -z-10" />
            </div>

            {/* Glowing Backdrop */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-brand-purple/20 to-brand-blue/15 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

            <motion.div
              className="relative w-full max-w-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Sleek Text-based Info Panel */}
              <div className={`p-8 rounded-3xl border backdrop-blur-md shadow-2xl space-y-6 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/35 text-slate-300"
                  : "border-slate-200 bg-white/70 text-slate-700"
              }`}>
                <div>
                  <div className="text-slate-500 text-xs uppercase font-semibold tracking-wider font-mono mb-1">GitHub Profile</div>
                  <a
                    id="hero-github-url"
                    href={profile.github.startsWith("http") ? profile.github : `https://${profile.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-purple font-mono text-sm sm:text-base hover:underline break-all block"
                  >
                    {profile.github}
                  </a>
                </div>

                <div className="border-t border-slate-200/20 dark:border-slate-800/40 pt-4">
                  <div className="text-slate-500 text-xs uppercase font-semibold tracking-wider font-mono mb-1">LinkedIn Profile</div>
                  <a
                    id="hero-linkedin-url"
                    href={profile.linkedin.startsWith("http") ? profile.linkedin : `https://${profile.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-purple font-mono text-sm sm:text-base hover:underline break-all block"
                  >
                    {profile.linkedin}
                  </a>
                </div>

                <div className="border-t border-slate-200/20 dark:border-slate-800/40 pt-4">
                  <div className="text-slate-500 text-xs uppercase font-semibold tracking-wider font-mono mb-1">Email Connection</div>
                  <a
                    id="hero-email-url"
                    href={`mailto:${profile.email}`}
                    className="text-brand-purple font-mono text-sm sm:text-base hover:underline break-all block"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
