import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, FolderOpen, ArrowRight } from "lucide-react";
import { Project } from "../types";

interface ProjectsProps {
  projects: Project[];
  darkMode: boolean;
}

export default function Projects({ projects, darkMode }: ProjectsProps) {
  const [filterTag, setFilterTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filteredProjects = filterTag
    ? projects.filter((p) => p.tags.includes(filterTag))
    : projects;

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with Flex Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase font-mono mb-2 block">
              My Projects
            </span>
            <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              Featured Projects
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="view-all-projects-btn"
              onClick={() => setFilterTag(null)}
              className={`text-sm font-medium px-4 py-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                !filterTag
                  ? "bg-brand-purple text-white border-brand-purple"
                  : darkMode
                  ? "border-slate-800 text-slate-300 hover:bg-slate-900"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              All Projects
            </button>
            {allTags.slice(0, 3).map((tag) => (
              <button
                id={`filter-tag-${tag}`}
                key={tag}
                onClick={() => setFilterTag(tag === filterTag ? null : tag)}
                className={`text-sm font-medium px-4 py-2 rounded-xl border transition-all duration-200 hidden md:block cursor-pointer ${
                  tag === filterTag
                    ? "bg-brand-purple text-white border-brand-purple"
                    : darkMode
                    ? "border-slate-800 text-slate-300 hover:bg-slate-900"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                className={`flex flex-col rounded-3xl overflow-hidden border shadow-xl transition-all duration-300 group h-full ${
                  darkMode
                    ? "border-slate-900 bg-slate-950/40 hover:border-slate-800 shadow-slate-950/40"
                    : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50"
                }`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
              >
                {/* Project Image & Mockup Mask */}
                <div className="relative overflow-hidden aspect-video w-full bg-slate-900">
                  <img
                    id={`project-img-${project.id}`}
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Floating Action Button inside image */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.github && (
                      <a
                        id={`project-github-btn-${project.id}`}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-slate-900 text-white border border-slate-800 hover:bg-brand-purple hover:border-brand-purple transition-all duration-200 shadow-lg hover:scale-110"
                        title="GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        id={`project-live-btn-${project.id}`}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-slate-900 text-white border border-slate-800 hover:bg-brand-blue hover:border-brand-blue transition-all duration-200 shadow-lg hover:scale-110"
                        title="Live Preview"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Folder Icon / Tag */}
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-brand-purple uppercase mb-3">
                      <FolderOpen className="h-3.5 w-3.5" />
                      Project Showcase
                    </div>

                    {/* Title */}
                    <h3 className={`font-display text-xl font-bold tracking-tight mb-2 group-hover:text-brand-purple transition-colors ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-6 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        onClick={() => setFilterTag(tag === filterTag ? null : tag)}
                        className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer ${
                          tag === filterTag
                            ? "bg-brand-purple text-white"
                            : darkMode
                            ? "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-300"
                            : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
