import React, { useState } from "react";
import { motion } from "motion/react";
import {
  X,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  Download,
  Sliders,
  User,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Check,
} from "lucide-react";
import { PortfolioData, Profile, Skill, Project, Experience, Education } from "../types";

interface CustomizerProps {
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

type ActiveTab = "profile" | "skills" | "projects" | "experience" | "education";

export default function Customizer({
  data,
  onSave,
  onReset,
  isOpen,
  onClose,
  darkMode,
}: CustomizerProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("profile");
  const [editState, setEditState] = useState<PortfolioData>({ ...data });
  const [showSavedToast, setShowSavedToast] = useState(false);

  // Sync state if initial props change
  React.useEffect(() => {
    setEditState({ ...data });
  }, [data]);

  if (!isOpen) return null;

  // Handle Profile Edits
  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditState((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [name]: value,
      },
    }));
  };

  // Handle Skill Edits
  const handleSkillChange = (id: string, name: string, val: string) => {
    setEditState((prev) => ({
      ...prev,
      skills: prev.skills.map((s) => (s.id === id ? { ...s, [name]: val } : s)),
    }));
  };

  const handleAddSkill = () => {
    const newSkill: Skill = {
      id: `s-${Date.now()}`,
      name: "New Skill",
      category: "Programming",
      icon: "Code2",
      color: "purple",
    };
    setEditState((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const handleDeleteSkill = (id: string) => {
    setEditState((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.id !== id),
    }));
  };

  // Handle Project Edits
  const handleProjectChange = (id: string, name: string, val: any) => {
    setEditState((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, [name]: val } : p)),
    }));
  };

  const handleAddProject = () => {
    const newProj: Project = {
      id: `p-${Date.now()}`,
      title: "New Project Showcase",
      description: "Cleaned and analyzed custom data and built interactive visualizations.",
      tags: ["Python", "SQL", "Excel"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
    };
    setEditState((prev) => ({
      ...prev,
      projects: [...prev.projects, newProj],
    }));
  };

  const handleDeleteProject = (id: string) => {
    setEditState((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  };

  // Handle Experience Edits
  const handleExperienceChange = (id: string, name: string, val: any) => {
    setEditState((prev) => ({
      ...prev,
      experiences: prev.experiences.map((e) => (e.id === id ? { ...e, [name]: val } : e)),
    }));
  };

  const handleAddExperience = () => {
    const newExp: Experience = {
      id: `e-${Date.now()}`,
      role: "Graduate Intern",
      company: "Innovations Lab",
      duration: "3 Months",
      description: "Wrote SQL scripts, automated web pipelines, and built beautiful analytics reports.",
      skills: ["Python", "SQL", "HTML"],
    };
    setEditState((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExp],
    }));
  };

  const handleDeleteExperience = (id: string) => {
    setEditState((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((e) => e.id !== id),
    }));
  };

  // Handle Education Edits
  const handleEducationChange = (id: string, name: string, val: string) => {
    setEditState((prev) => ({
      ...prev,
      educations: prev.educations.map((edu) => (edu.id === id ? { ...edu, [name]: val } : edu)),
    }));
  };

  const handleAddEducation = () => {
    const newEdu: Education = {
      id: `edu-${Date.now()}`,
      degree: "Certification in Analytics",
      institution: "Technical Institute",
      year: "2025",
      details: "Comprehensive study of relational databases and data warehouse designs.",
    };
    setEditState((prev) => ({
      ...prev,
      educations: [...prev.educations, newEdu],
    }));
  };

  const handleDeleteEducation = (id: string) => {
    setEditState((prev) => ({
      ...prev,
      educations: prev.educations.filter((edu) => edu.id !== id),
    }));
  };

  // Actions
  const handleSaveAll = () => {
    onSave(editState);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 3000);
  };

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(editState, null, 2);
    navigator.clipboard.writeText(jsonStr);
    alert("Portfolio configuration copied to clipboard! You can paste this JSON into your codebase.");
  };

  return (
    <div
      id="customizer-overlay"
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs"
    >
      <motion.div
        id="customizer-panel"
        className={`w-full max-w-lg h-full flex flex-col shadow-2xl relative border-l ${
          darkMode ? "bg-slate-950 border-slate-900 text-white" : "bg-white border-slate-200 text-slate-800"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Customizer Header */}
        <div className={`p-4 border-b flex items-center justify-between ${
          darkMode ? "border-slate-900 bg-slate-950" : "border-slate-200 bg-slate-50"
        }`}>
          <div className="flex items-center gap-2">
            <Sliders className="h-5 w-5 text-brand-purple" />
            <h2 className="font-display font-bold text-lg">Customize Portfolio</h2>
          </div>
          <button
            id="close-customizer-btn"
            onClick={onClose}
            className={`p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-900 transition-colors cursor-pointer`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200/50 dark:border-slate-800/50 overflow-x-auto scrollbar-none shrink-0 bg-slate-100/40 dark:bg-slate-950/40">
          {[
            { id: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
            { id: "skills", label: "Skills", icon: <Sliders className="h-4 w-4" /> },
            { id: "projects", label: "Projects", icon: <FolderOpen className="h-4 w-4" /> },
            { id: "experience", label: "Experience", icon: <Briefcase className="h-4 w-4" /> },
            { id: "education", label: "Education", icon: <GraduationCap className="h-4 w-4" /> },
          ].map((tab) => (
            <button
              id={`tab-btn-${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ActiveTab)}
              className={`flex items-center gap-1.5 px-4 py-3 border-b-2 text-xs font-semibold tracking-wider uppercase transition-all shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? "border-brand-purple text-brand-purple bg-brand-purple/5"
                  : darkMode
                  ? "border-transparent text-slate-400 hover:text-white"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Customizer Body (Scrollable Content) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={editState.profile.name}
                  onChange={handleProfileChange}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">Professional Role</label>
                <input
                  type="text"
                  name="role"
                  value={editState.profile.role}
                  onChange={handleProfileChange}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  value={editState.profile.tagline}
                  onChange={handleProfileChange}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">About Summary</label>
                <textarea
                  rows={4}
                  name="about"
                  value={editState.profile.about}
                  onChange={handleProfileChange}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">Avatar Image URL</label>
                <input
                  type="text"
                  name="avatar"
                  value={editState.profile.avatar}
                  onChange={handleProfileChange}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={editState.profile.location}
                    onChange={handleProfileChange}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">Experience (Years)</label>
                  <input
                    type="text"
                    name="experienceYears"
                    value={editState.profile.experienceYears}
                    onChange={handleProfileChange}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={editState.profile.email}
                  onChange={handleProfileChange}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">Contact Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={editState.profile.phone}
                  onChange={handleProfileChange}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">LinkedIn Profile URL</label>
                <input
                  type="text"
                  name="linkedin"
                  value={editState.profile.linkedin}
                  onChange={handleProfileChange}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider uppercase text-slate-400 mb-1.5">GitHub Profile URL</label>
                <input
                  type="text"
                  name="github"
                  value={editState.profile.github}
                  onChange={handleProfileChange}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border outline-none bg-transparent border-slate-200 dark:border-slate-850 focus:border-brand-purple"
                />
              </div>
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === "skills" && (
            <div className="space-y-4">
              <button
                onClick={handleAddSkill}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 border border-dashed rounded-xl border-brand-purple text-brand-purple bg-brand-purple/5 hover:bg-brand-purple/10 text-xs font-semibold uppercase cursor-pointer"
              >
                <Plus className="h-4 w-4" /> Add Skill Tag
              </button>

              <div className="space-y-4">
                {editState.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-900 bg-slate-500/5 space-y-3 relative"
                  >
                    <button
                      onClick={() => handleDeleteSkill(skill.id)}
                      className="absolute top-2.5 right-2.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer p-1.5 rounded-md"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="grid grid-cols-2 gap-3 pr-8">
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Skill Name</label>
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => handleSkillChange(skill.id, "name", e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Category</label>
                        <select
                          value={skill.category}
                          onChange={(e) => handleSkillChange(skill.id, "category", e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-slate-950 text-white dark:bg-slate-950 border-slate-200 dark:border-slate-800"
                        >
                          {["Programming", "Database", "Frontend", "Backend", "Runtime", "Tools", "Data Analytics", "Data Visualization"].map(
                            (cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Lucide Icon Name</label>
                        <input
                          type="text"
                          value={skill.icon}
                          onChange={(e) => handleSkillChange(skill.id, "icon", e.target.value)}
                          placeholder="Code2, Database..."
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Accent Theme Color</label>
                        <select
                          value={skill.color}
                          onChange={(e) => handleSkillChange(skill.id, "color", e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-slate-950 text-white dark:bg-slate-950 border-slate-200 dark:border-slate-800"
                        >
                          {["blue", "cyan", "amber", "indigo", "green", "emerald", "orange", "red", "sky", "yellow", "purple"].map((col) => (
                            <option key={col} value={col}>
                              {col}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === "projects" && (
            <div className="space-y-4">
              <button
                onClick={handleAddProject}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 border border-dashed rounded-xl border-brand-purple text-brand-purple bg-brand-purple/5 hover:bg-brand-purple/10 text-xs font-semibold uppercase cursor-pointer"
              >
                <Plus className="h-4 w-4" /> Add Project Card
              </button>

              <div className="space-y-4">
                {editState.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-900 bg-slate-500/5 space-y-3 relative"
                  >
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="absolute top-2.5 right-2.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer p-1.5 rounded-md"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="space-y-3 pr-8">
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Project Title</label>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => handleProjectChange(proj.id, "title", e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Mockup / Banner Image URL</label>
                        <input
                          type="text"
                          value={proj.image}
                          onChange={(e) => handleProjectChange(proj.id, "image", e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Description Narrative</label>
                        <textarea
                          rows={3}
                          value={proj.description}
                          onChange={(e) => handleProjectChange(proj.id, "description", e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800 resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Tech Stack Tags (Comma separated)</label>
                        <input
                          type="text"
                          value={proj.tags.join(", ")}
                          onChange={(e) =>
                            handleProjectChange(
                              proj.id,
                              "tags",
                              e.target.value.split(",").map((s) => s.trim())
                            )
                          }
                          placeholder="React, Excel, SQL..."
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === "experience" && (
            <div className="space-y-4">
              <button
                onClick={handleAddExperience}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 border border-dashed rounded-xl border-brand-purple text-brand-purple bg-brand-purple/5 hover:bg-brand-purple/10 text-xs font-semibold uppercase cursor-pointer"
              >
                <Plus className="h-4 w-4" /> Add Experience Record
              </button>

              <div className="space-y-4">
                {editState.experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-900 bg-slate-500/5 space-y-3 relative"
                  >
                    <button
                      onClick={() => handleDeleteExperience(exp.id)}
                      className="absolute top-2.5 right-2.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer p-1.5 rounded-md"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="space-y-3 pr-8">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Role Title</label>
                          <input
                            type="text"
                            value={exp.role}
                            onChange={(e) => handleExperienceChange(exp.id, "role", e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Duration / Dates</label>
                          <input
                            type="text"
                            value={exp.duration}
                            onChange={(e) => handleExperienceChange(exp.id, "duration", e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Skills (Comma separated)</label>
                          <input
                            type="text"
                            value={exp.skills.join(", ")}
                            onChange={(e) =>
                              handleExperienceChange(
                                exp.id,
                                "skills",
                                e.target.value.split(",").map((s) => s.trim())
                              )
                            }
                            className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Responsibilities / Bullet details (Separated by periods)</label>
                        <textarea
                          rows={3}
                          value={exp.description}
                          onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800 resize-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === "education" && (
            <div className="space-y-4">
              <button
                onClick={handleAddEducation}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 border border-dashed rounded-xl border-brand-purple text-brand-purple bg-brand-purple/5 hover:bg-brand-purple/10 text-xs font-semibold uppercase cursor-pointer"
              >
                <Plus className="h-4 w-4" /> Add Education Card
              </button>

              <div className="space-y-4">
                {editState.educations.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-900 bg-slate-500/5 space-y-3 relative"
                  >
                    <button
                      onClick={() => handleDeleteEducation(edu.id)}
                      className="absolute top-2.5 right-2.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer p-1.5 rounded-md"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="space-y-3 pr-8">
                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Degree / Certification Name</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">School / Institution</label>
                          <input
                            type="text"
                            value={edu.institution}
                            onChange={(e) => handleEducationChange(edu.id, "institution", e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Graduation Year / Status</label>
                          <input
                            type="text"
                            value={edu.year}
                            onChange={(e) => handleEducationChange(edu.id, "year", e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono tracking-wider uppercase text-slate-400 mb-1">Narrative Details</label>
                        <textarea
                          rows={2}
                          value={edu.details || ""}
                          onChange={(e) => handleEducationChange(edu.id, "details", e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded border bg-transparent border-slate-200 dark:border-slate-800 resize-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Customizer Sticky Footer Action Rails */}
        <div className={`p-4 border-t flex flex-col gap-3 shrink-0 ${
          darkMode ? "border-slate-900 bg-slate-950" : "border-slate-200 bg-slate-50"
        }`}>
          <div className="grid grid-cols-2 gap-3">
            <button
              id="reset-portfolio-btn"
              onClick={onReset}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-900 text-xs font-semibold uppercase transition-colors cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" /> Reset Default
            </button>
            <button
              id="export-portfolio-btn"
              onClick={handleExportJSON}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-900 text-xs font-semibold uppercase transition-colors cursor-pointer"
            >
              <Download className="h-4 w-4" /> Export JSON
            </button>
          </div>

          <button
            id="save-all-portfolio-btn"
            onClick={handleSaveAll}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-brand-purple to-brand-blue hover:brightness-110 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-brand-purple/25"
          >
            <Save className="h-4 w-4" /> Save Portfolio Changes
          </button>
        </div>

        {/* Saved Success HUD Alert */}
        {showSavedToast && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-500 text-white rounded-lg text-xs font-semibold tracking-wider uppercase shadow-lg flex items-center gap-1.5 z-30">
            <Check className="h-4 w-4" /> Changes Applied & Persistent!
          </div>
        )}
      </motion.div>
    </div>
  );
}
