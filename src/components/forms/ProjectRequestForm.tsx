"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface ProjectRequestFormProps {
  projectId?: string;
  projectTitle?: string;
}

export function ProjectRequestForm({ projectId, projectTitle }: ProjectRequestFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ requestCode: string; message: string } | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    college: "",
    degree: "B.Tech",
    branch: "",
    year: "Final Year",
    preferredContact: "WhatsApp",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/requests/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, projectId }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccessData({ requestCode: data.requestCode, message: data.message });
        setStep(3);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  if (step === 3 && successData) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-200 shadow-md text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Request Confirmed!</h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">{successData.message}</p>
        
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6">
          <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
            Official Request Tracking ID
          </span>
          <span className="text-2xl font-mono font-extrabold text-blue-600 tracking-wider">
            {successData.requestCode}
          </span>
        </div>
        
        <p className="text-xs text-slate-500">
          Our technical coordinator will connect with you via {formData.preferredContact} with the project abstract, system flow diagrams, and scheduling details.
        </p>
      </div>
    );
  }

  return (
    <div id="request-form" className="relative">
      
      {/* Header */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Instant Project Consultation
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Request Project Deliverables & Guidance
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Get complete source code, IEEE standard report, and 1-on-1 viva coaching for{" "}
          <strong className="text-slate-900 font-bold">{projectTitle || "this project"}</strong>.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-3 mb-8 text-xs font-bold">
        <div
          className={`flex-1 py-2 px-3 rounded-xl border text-center transition-all ${
            step === 1
              ? "bg-blue-50 border-blue-300 text-blue-700 shadow-2xs font-extrabold"
              : "bg-slate-50 border-slate-200 text-slate-500"
          }`}
        >
          1. Student Contact
        </div>
        <div
          className={`flex-1 py-2 px-3 rounded-xl border text-center transition-all ${
            step === 2
              ? "bg-blue-50 border-blue-300 text-blue-700 shadow-2xs font-extrabold"
              : "bg-slate-50 border-slate-200 text-slate-500"
          }`}
        >
          2. Academic Details
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Full Name *</label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                  placeholder="Rahul Kumar"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Mobile / WhatsApp Number *</label>
                <input
                  required
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                  placeholder="9876543210"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Email Address *</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                placeholder="rahul@example.com"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                if (!formData.fullName || !formData.mobile || !formData.email) {
                  alert("Please enter your name, mobile, and email.");
                  return;
                }
                setStep(2);
              }}
              className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/25"
            >
              <span>Continue to Academic Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">College Name *</label>
              <input
                required
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                placeholder="SV University College of Engineering"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Degree</label>
                <select
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-slate-900 font-semibold"
                >
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="MCA">MCA</option>
                  <option value="BCA">BCA</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Branch / Major *</label>
                <input
                  required
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                  placeholder="CSE / AI & ML / ECE"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Academic Year</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-slate-900 font-semibold"
                >
                  <option value="Final Year">Final Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="2nd Year">2nd Year</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Preferred Mode of Contact</label>
                <select
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-slate-900 font-semibold"
                >
                  <option value="WhatsApp">WhatsApp Message</option>
                  <option value="Phone Call">Direct Phone Call</option>
                  <option value="Email">Email Communication</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Any Customization Requests? (Optional)</label>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400"
                  placeholder="e.g. Need additional cloud deployment module"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 rounded-full font-bold text-xs transition-colors"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-full font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all disabled:opacity-50"
              >
                {loading ? "Submitting Request..." : "Confirm & Submit Project Request"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
