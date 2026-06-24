/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationComponent from "./components/Education";
import Contact from "./components/Contact";
import Customizer from "./components/Customizer";
import { initialPortfolioData } from "./data";
import { PortfolioData } from "./types";
import { ChevronUp } from "lucide-react";

export default function App() {
  // Theme management: Default to dark theme to mirror reference design
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("portfolio_theme");
    return saved ? saved === "dark" : true;
  });

  // Portfolio data management: Loads from localStorage or falls back to user specified data
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem("portfolio_content_data");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse custom portfolio data", e);
      }
    }
    return initialPortfolioData;
  });

  const [showCustomizer, setShowCustomizer] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync theme to document body and storage
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio_theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Monitor scroll for back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSaveData = (newData: PortfolioData) => {
    setPortfolioData(newData);
    localStorage.setItem("portfolio_content_data", JSON.stringify(newData));
  };

  const handleResetData = () => {
    if (window.confirm("Are you sure you want to reset all portfolio customization to defaults?")) {
      setPortfolioData(initialPortfolioData);
      localStorage.removeItem("portfolio_content_data");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 relative selection:bg-brand-purple/20 ${
        darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Visual background grids & dots (Inspired by futuristic reference) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#8b5cf60a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none -z-20" />

      {/* Header & Sticky Nav */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        showCustomizer={showCustomizer}
        setShowCustomizer={setShowCustomizer}
        name={portfolioData.profile.name}
      />

      {/* Main Body Layout */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Banner Section */}
        <Hero profile={portfolioData.profile} darkMode={darkMode} />

        {/* Narrative Biography Panels */}
        <About profile={portfolioData.profile} darkMode={darkMode} />

        {/* Skills Cards Grid */}
        <Skills skills={portfolioData.skills} darkMode={darkMode} />

        {/* Work Portfolio Showcases */}
        <Projects projects={portfolioData.projects} darkMode={darkMode} />

        {/* Interactive Intern Timeline */}
        <ExperienceTimeline experiences={portfolioData.experiences} darkMode={darkMode} />

        {/* Academic Degree Tracker */}
        <EducationComponent educations={portfolioData.educations} darkMode={darkMode} />

        {/* Feedback Mail Form */}
        <Contact profile={portfolioData.profile} darkMode={darkMode} />
      </main>

      {/* Footer Branding Panel */}
      <footer
        className={`border-t py-12 transition-colors duration-300 ${
          darkMode ? "bg-slate-950 border-slate-900 text-slate-500" : "bg-white border-slate-100 text-slate-400"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Copyright branding */}
          <div>
            <div className={`font-display font-bold text-lg tracking-tight mb-2 ${
              darkMode ? "text-white" : "text-slate-800"
            }`}>
              {portfolioData.profile.name.split(" ")[0]}
              <span className="text-brand-purple">.</span>
            </div>
            <p className="text-xs">
              &copy; {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
            </p>
          </div>

          {/* Prompt to customizer */}
          <div className="text-xs max-w-md">
            <p>
              This is a fully customizable portfolio. Feel free to use the{" "}
              <button
                onClick={() => setShowCustomizer(true)}
                className="text-brand-purple hover:underline font-semibold cursor-pointer"
              >
                Sliders icon
              </button>{" "}
              to edit your info in real-time, reset or export your configuration easily.
            </p>
          </div>
        </div>
      </footer>

      {/* Customizer Drawer Panel */}
      <Customizer
        data={portfolioData}
        onSave={handleSaveData}
        onReset={handleResetData}
        isOpen={showCustomizer}
        onClose={() => setShowCustomizer(false)}
        darkMode={darkMode}
      />

      {/* Sticky Back-To-Top bubble button */}
      {showBackToTop && (
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-brand-purple text-white shadow-lg hover:bg-brand-purple/90 transition-all duration-300 z-30 cursor-pointer hover:-translate-y-1 shadow-brand-purple/30 flex items-center justify-center"
          title="Back to Top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
