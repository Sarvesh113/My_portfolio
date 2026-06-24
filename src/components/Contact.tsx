import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Profile } from "../types";

interface ContactProps {
  profile: Profile;
  darkMode: boolean;
}

export default function Contact({ profile, darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success notification after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-brand-purple uppercase font-mono mb-2 block">
            Contact Me
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Get In Touch
          </h2>
          <p className={`text-base max-w-2xl leading-relaxed ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Have a project in mind or want to work together? Feel free to send me a message and I will respond within 24 hours.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email card */}
            <div className={`p-6 rounded-3xl border flex items-center gap-5 transition-transform duration-300 hover:scale-[1.02] ${
              darkMode ? "border-slate-900 bg-slate-950/40 text-slate-300" : "border-slate-100 bg-white text-slate-700 shadow-md"
            }`}>
              <div className="p-3.5 rounded-2xl bg-brand-purple/10 text-brand-purple">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase">Email Me</div>
                <a
                  id="contact-email-link"
                  href={`mailto:${profile.email}`}
                  className={`text-base font-bold mt-0.5 hover:text-brand-purple transition-colors block ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Phone card */}
            <div className={`p-6 rounded-3xl border flex items-center gap-5 transition-transform duration-300 hover:scale-[1.02] ${
              darkMode ? "border-slate-900 bg-slate-950/40 text-slate-300" : "border-slate-100 bg-white text-slate-700 shadow-md"
            }`}>
              <div className="p-3.5 rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase">Call Me</div>
                <a
                  id="contact-phone-link"
                  href={`tel:${profile.phone}`}
                  className={`text-base font-bold mt-0.5 hover:text-brand-blue transition-colors block ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  +91 {profile.phone}
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className={`p-6 rounded-3xl border flex items-center gap-5 transition-transform duration-300 hover:scale-[1.02] ${
              darkMode ? "border-slate-900 bg-slate-950/40 text-slate-300" : "border-slate-100 bg-white text-slate-700 shadow-md"
            }`}>
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-500">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase">My Location</div>
                <div className={`text-base font-bold mt-0.5 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}>
                  {profile.location}
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Message Form */}
          <div className="lg:col-span-7">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl border shadow-xl relative overflow-hidden ${
                darkMode
                  ? "border-slate-900 bg-slate-950/45 text-slate-300 shadow-slate-950/60"
                  : "border-slate-100 bg-white text-slate-700 shadow-slate-200/50"
              }`}
            >
              {/* Form Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Sarvesh Gotmare"
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all duration-200 ${
                      darkMode
                        ? "border-slate-900 bg-slate-900/40 text-white focus:border-brand-purple focus:bg-slate-900/80"
                        : "border-slate-200 bg-slate-50 text-slate-900 focus:border-brand-purple focus:bg-white focus:shadow-sm"
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="gotmaresarvesh9@gmail.com"
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all duration-200 ${
                      darkMode
                        ? "border-slate-900 bg-slate-900/40 text-white focus:border-brand-purple focus:bg-slate-900/80"
                        : "border-slate-200 bg-slate-50 text-slate-900 focus:border-brand-purple focus:bg-white focus:shadow-sm"
                    }`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Collaboration opportunity / Project inquiries"
                  className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all duration-200 ${
                    darkMode
                      ? "border-slate-900 bg-slate-900/40 text-white focus:border-brand-purple focus:bg-slate-900/80"
                      : "border-slate-200 bg-slate-50 text-slate-900 focus:border-brand-purple focus:bg-white focus:shadow-sm"
                  }`}
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message details here..."
                  className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all duration-200 resize-none ${
                    darkMode
                      ? "border-slate-900 bg-slate-900/40 text-white focus:border-brand-purple focus:bg-slate-900/80"
                      : "border-slate-200 bg-slate-50 text-slate-900 focus:border-brand-purple focus:bg-white focus:shadow-sm"
                  }`}
                />
              </div>

              {/* Form Submission Button */}
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-brand-purple/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-75 disabled:pointer-events-none text-sm`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* Floating Success Alert inside form */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center text-center p-8 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 150 }}
                      className="p-3.5 bg-emerald-500/15 rounded-full text-emerald-400 mb-4"
                    >
                      <CheckCircle className="h-10 w-10" />
                    </motion.div>
                    <h3 className="text-xl font-bold font-display text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-sm text-slate-400 max-w-sm mb-6">
                      Thank you for reaching out! Your message has been received, and I'll get back to you as soon as possible.
                    </p>
                    <button
                      id="reset-form-success-btn"
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="text-xs font-mono text-brand-purple hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
