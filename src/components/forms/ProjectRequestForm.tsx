"use client";

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProjectRequestFormProps {
  projectId?: string;
  projectTitle?: string;
}

export function ProjectRequestForm({ projectId, projectTitle }: ProjectRequestFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ requestCode: string; message: string } | null>(null);
  const [formData, setFormData] = useState({
    fullName: '', mobile: '', email: '',
    college: '', degree: 'B.Tech', branch: '', year: 'Final Year',
    preferredContact: 'WhatsApp', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/requests/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, projectId })
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
      alert("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  if (step === 3 && successData) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-green-200 shadow-lg text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
        <p className="text-slate-600 mb-6">{successData.message}</p>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
          <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Your Request ID</span>
          <span className="text-xl font-bold text-blue-600 tracking-wide">{successData.requestCode}</span>
        </div>
        <p className="text-sm text-slate-500">
          Our team will contact you shortly to discuss the complete details of the project.
        </p>
      </div>
    );
  }

  return (
    <div id="request-form" className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 max-w-2xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -mr-20 -mt-20 pointer-events-none"></div>
      
      <div className="mb-10 relative z-10">
        <h3 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Request This Project</h3>
        <p className="text-slate-500 text-lg">Fill out this quick form to get complete documentation, architecture, and pricing for <strong className="text-slate-800 font-semibold">{projectTitle || 'this project'}</strong>.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900" placeholder="Rahul Kumar" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900" placeholder="9876543210" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900" placeholder="rahul@example.com" />
            </div>
            
            <button type="button" onClick={() => setStep(2)} className="w-full mt-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-slate-900/20 transform hover:-translate-y-0.5">
              Continue to Academic Details <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">College Name</label>
              <input required type="text" name="college" value={formData.college} onChange={handleChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900" placeholder="SV University" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Degree</label>
                <select name="degree" value={formData.degree} onChange={handleChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900 appearance-none">
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>BCA</option>
                  <option>MCA</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Branch</label>
                <input required type="text" name="branch" value={formData.branch} onChange={handleChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900" placeholder="CSE" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Year</label>
                <select name="year" value={formData.year} onChange={handleChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900 appearance-none">
                  <option>Final Year</option>
                  <option>3rd Year</option>
                  <option>2nd Year</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Contact</label>
                <select name="preferredContact" value={formData.preferredContact} onChange={handleChange} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900 appearance-none">
                  <option>WhatsApp</option>
                  <option>Phone Call</option>
                  <option>Email</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Any specific questions? (Optional)</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900 resize-none" placeholder="I want to know if this project includes an Android app..."></textarea>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button type="button" onClick={() => setStep(1)} className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all border border-slate-200">
                Back
              </button>
              <button type="submit" disabled={loading} className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:transform-none">
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
