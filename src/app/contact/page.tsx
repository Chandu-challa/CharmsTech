"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  User,
  ExternalLink,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "General Inquiry",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [enquiryCode, setEnquiryCode] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please check your information.");
      }

      setEnquiryCode(data.enquiryCode || "CHARMS-ENQ-SUCCESS");
      setStatus("success");
      setFormData(initialFormData);
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again later.");
      }
    }
  };

  const handleResetForm = () => {
    setStatus("idle");
    setEnquiryCode(null);
    setErrorMessage(null);
  };

  return (
    <div className="flex flex-col font-sans bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-28 md:pt-28 md:pb-36 text-center">
        {/* Glow accent */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 bg-gradient-to-br from-blue-500 via-violet-600 to-transparent opacity-20 blur-3xl" />
        
        {/* Grid overlay pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-300 backdrop-blur">
            <MessageSquare className="h-4 w-4" />
            <span>Connect With Our Academic Experts</span>
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-white via-blue-100 to-violet-300 bg-clip-text text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent">
            Get in <span className="text-white">Touch</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
            Have questions about our technology courses, final-year IEEE projects, or internships? Reach out to our mentors in Tirupati — we are here to support your engineering career.
          </p>
        </div>
      </section>

      {/* 2. Main Content: Two-column layout */}
      <section className="relative z-20 -mt-16 md:-mt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* LEFT COLUMN: Contact Information Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl shadow-slate-200/50">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-sm font-medium text-slate-600 mb-6">
                  Reach out to us directly through any of the channels below or visit our training lab in Tirupati.
                </p>

                <div className="space-y-5">
                  {/* Address */}
                  <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 flex items-start gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Our Address
                      </span>
                      <p className="text-base font-extrabold text-slate-900 mt-0.5">
                        Charms Tech Labs, Tech Park, Tirupati, Andhra Pradesh
                      </p>
                      <p className="text-xs font-medium text-slate-500 mt-1">
                        Near SV University, Tirupati - 517501
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-xl hover:shadow-violet-500/10 flex items-start gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center transition-colors group-hover:bg-violet-600 group-hover:text-white">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Phone & WhatsApp
                      </span>
                      <a
                        href="tel:+919876543210"
                        className="block text-base font-extrabold text-slate-900 hover:text-blue-600 transition-colors mt-0.5"
                      >
                        +91 98765 43210
                      </a>
                      <p className="text-xs font-medium text-slate-500 mt-1">
                        Direct support for admissions and project queries
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 flex items-start gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Email Us
                      </span>
                      <a
                        href="mailto:hello@charmstechlabs.com"
                        className="block text-base font-extrabold text-slate-900 hover:text-blue-600 transition-colors mt-0.5 break-all"
                      >
                        hello@charmstechlabs.com
                      </a>
                      <p className="text-xs font-medium text-slate-500 mt-1">
                        Expect a reply within 24 business hours
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/10 flex items-start gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Business Hours
                      </span>
                      <p className="text-base font-extrabold text-slate-900 mt-0.5">
                        Mon-Sat, 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-xs font-medium text-slate-500 mt-1">
                        Sunday: Closed (Available for pre-booked sessions)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Support Callout Card */}
              <div className="rounded-3xl border border-blue-200/60 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/80 p-6 sm:p-8 shadow-xl shadow-blue-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center shadow-md">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900">
                      Student Counseling Desk
                    </h3>
                    <p className="text-xs font-semibold text-blue-600">
                      Free IEEE & Academic Guidance
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-600 leading-relaxed mb-4">
                  Need personalized advice on selecting your B.Tech or M.Tech final year project domain? Our senior technical leads provide free 1-on-1 counseling.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>IEEE Base Papers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-violet-600 shrink-0" />
                    <span>Hands-on Code</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50">
                {status === "success" ? (
                  /* Success View */
                  <div className="py-8 text-center flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
                      Enquiry Submitted Successfully
                    </span>

                    <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
                      Thank You for Reaching Out!
                    </h2>

                    <p className="text-slate-600 font-medium max-w-lg mb-8 leading-relaxed">
                      We have received your enquiry. Our academic counselors and technical mentors will review your details and contact you shortly.
                    </p>

                    {/* Enquiry Code Card */}
                    <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200/80 p-6 mb-8 text-left">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Your Enquiry Reference Code
                        </span>
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <div className="font-mono text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-wide select-all">
                        {enquiryCode}
                      </div>
                      <p className="text-xs font-medium text-slate-500 mt-2">
                        Please save this reference code for follow-ups and campus visits.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-md"
                      >
                        <span>Send Another Message</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Form View */
                  <div>
                    <div className="mb-8">
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
                        <Sparkles className="h-3.5 w-3.5" />
                        Quick Response Guaranteed
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-slate-600 font-medium text-sm sm:text-base">
                        Fill in your details below and our team will get in touch with personalized course and project information.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                          !
                        </div>
                        <div className="flex-1">{errorMessage}</div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-bold text-slate-800 mb-2"
                          >
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                              <User className="h-5 w-5" />
                            </div>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="e.g. Rahul Sharma"
                              className="w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 py-3 text-slate-900 font-medium placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-sm"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-bold text-slate-800 mb-2"
                          >
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                              <Mail className="h-5 w-5" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="e.g. rahul@example.com"
                              className="w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 py-3 text-slate-900 font-medium placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-bold text-slate-800 mb-2"
                          >
                            Phone Number <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                              <Phone className="h-5 w-5" />
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="e.g. +91 98765 43210"
                              className="w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 py-3 text-slate-900 font-medium placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-sm"
                            />
                          </div>
                        </div>

                        {/* Subject */}
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-bold text-slate-800 mb-2"
                          >
                            Subject / Purpose <span className="text-rose-500">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 font-medium focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-sm"
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Training Enquiry">Training Enquiry</option>
                            <option value="Project Development">Project Development</option>
                            <option value="Internship">Internship</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-bold text-slate-800 mb-2"
                        >
                          Message / Project Requirements <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements, project domain (AI/ML, Web, Python, Cloud), or training query..."
                          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 font-medium placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-sm resize-y"
                        />
                      </div>

                      {/* Submit Button */}
                      <div>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-extrabold text-base shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-violet-700 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                        >
                          {status === "loading" ? (
                            <>
                              <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Submitting Enquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Message</span>
                              <Send className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-center text-xs font-medium text-slate-500">
                        We respect your privacy. Your contact details are strictly used for academic communication.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Map Placeholder Section */}
      <section className="pb-24 pt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl min-h-[380px] flex flex-col justify-between p-8 sm:p-12">
            {/* Background Grid Pattern & Radial Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415525_1px,transparent_1px),linear-gradient(to_bottom,#33415525_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -top-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />

            {/* Top Bar inside Map Card */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 bg-slate-900/90 backdrop-blur border border-slate-700/60 px-4 py-2 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Campus Location Map
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-slate-800">
                  Tirupati Tech Hub
                </span>
              </div>
            </div>

            {/* Center Pin & Address Highlight */}
            <div className="relative z-10 my-10 flex flex-col items-center justify-center text-center">
              <div className="relative mb-5 flex items-center justify-center">
                <div className="absolute h-20 w-20 animate-ping rounded-full bg-blue-500/20" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 shadow-xl shadow-blue-500/30 text-white">
                  <MapPin className="h-8 w-8" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                CHARMS Tech Labs, Tirupati, Andhra Pradesh
              </h3>

              <p className="text-slate-400 max-w-lg font-medium text-sm sm:text-base">
                Tech Park, Near SV University, Tirupati, Andhra Pradesh - 517501
              </p>
            </div>

            {/* Bottom Bar inside Map Card */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-6">
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
                <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                  <GraduationCap className="h-4 w-4 text-blue-400" /> B.Tech & M.Tech Project Center
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span>In-Person Consultations Available</span>
              </div>

              <a
                href="https://maps.google.com/?q=Tirupati,Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold border border-slate-700/80 hover:border-slate-600 transition-all shadow-md group"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
