import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sliders } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  showCustomizer: boolean;
  setShowCustomizer: (show: boolean) => void;
  name: string;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  showCustomizer,
  setShowCustomizer,
  name,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Get short name (first name) for logo
  const firstName = name ? name.split(" ")[0] : "Sarvesh";

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg"
            : "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              id="logo"
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="font-display font-bold text-xl tracking-tight flex items-center gap-1"
            >
              <span className={darkMode ? "text-white" : "text-slate-900"}>{firstName}</span>
              <span className="text-brand-purple">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  id={`nav-link-${link.id}`}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 ${
                    activeSection === link.id
                      ? "text-brand-purple"
                      : darkMode
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Customizer & Theme Toggle */}
            <div className="flex items-center space-x-3 border-l border-slate-200 dark:border-slate-800 pl-4">
              <button
                id="customize-btn"
                onClick={() => setShowCustomizer(!showCustomizer)}
                title="Customize Portfolio"
                className={`p-2 rounded-full transition-all duration-200 flex items-center justify-center ${
                  showCustomizer
                    ? "bg-brand-purple text-white shadow-lg"
                    : darkMode
                    ? "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <Sliders className="h-4.5 w-4.5" />
              </button>

              <button
                id="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all duration-200 flex items-center justify-center ${
                  darkMode
                    ? "bg-slate-900 text-yellow-400 hover:bg-slate-800"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {darkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>

          {/* Mobile hamburger menu & settings */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="customize-btn-mobile"
              onClick={() => setShowCustomizer(!showCustomizer)}
              className={`p-2 rounded-full ${
                showCustomizer
                  ? "bg-brand-purple text-white"
                  : darkMode
                  ? "bg-slate-900 text-slate-300"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              <Sliders className="h-4.5 w-4.5" />
            </button>

            <button
              id="theme-toggle-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode ? "bg-slate-900 text-yellow-400" : "bg-slate-100 text-slate-700"
              }`}
            >
              {darkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                darkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`md:hidden fixed inset-x-0 top-16 transition-all duration-300 ease-in-out border-b ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } ${
          darkMode
            ? "bg-slate-950 border-slate-900 shadow-xl"
            : "bg-white border-slate-100 shadow-md"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              id={`mobile-nav-link-${link.id}`}
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                activeSection === link.id
                  ? "bg-brand-purple/10 text-brand-purple"
                  : darkMode
                  ? "text-slate-400 hover:bg-slate-900 hover:text-white"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
