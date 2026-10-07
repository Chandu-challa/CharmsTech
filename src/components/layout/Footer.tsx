import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Code2,
  Cpu,
  Layers,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800 overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Top Operational Status Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                CHARMS Tech Labs • Academic & Industrial Engineering Center
              </p>
              <p className="text-[11px] text-slate-400">
                292+ Verified Projects with source code, diagrams, IEEE reports, and viva coaching.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Architecture
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              Batch 2026 Admissions
            </span>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                CHARMS <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Tech Labs</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Specialized technology training and IEEE project engineering centre for B.Tech & M.Tech students. Master modern architectures, deploy scalable applications, and excel in final year vivas.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Original Code & Execution Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Viva Q&A Coaching Included</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Project Catalog
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/projects?degree=B.Tech" className="hover:text-blue-400 transition-colors flex items-center justify-between group">
                  <span>B.Tech Projects</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 group-hover:text-blue-300">Popular</span>
                </Link>
              </li>
              <li>
                <Link href="/projects?degree=M.Tech" className="hover:text-blue-400 transition-colors flex items-center justify-between group">
                  <span>M.Tech Advanced Projects</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 group-hover:text-blue-300">Research</span>
                </Link>
              </li>
              <li>
                <Link href="/projects?category=ai-ml" className="hover:text-blue-400 transition-colors">
                  AI & Machine Learning (AI/ML)
                </Link>
              </li>
              <li>
                <Link href="/projects?category=full-stack" className="hover:text-blue-400 transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="/projects?category=generative-ai" className="hover:text-blue-400 transition-colors">
                  Generative AI & LLMs
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs & Tracks */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              Training & Internships
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/training/python-full-stack" className="hover:text-blue-400 transition-colors">
                  Python Full Stack (Django + React)
                </Link>
              </li>
              <li>
                <Link href="/training/nextjs-full-stack" className="hover:text-blue-400 transition-colors">
                  Next.js Full Stack (React 19 + TypeScript)
                </Link>
              </li>
              <li>
                <Link href="/internships" className="hover:text-blue-400 transition-colors flex items-center justify-between group">
                  <span>Industry Internship Tracks</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">Hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Our Mentors & Facility
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Book a Free Project Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Campus & Support
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  CHARMS Tech Labs HQ<br />
                  Tech Park, Sector 4<br />
                  Tirupati, Andhra Pradesh — 517501
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors text-slate-300">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:hello@charmstechlabs.com" className="hover:text-white transition-colors text-slate-300">
                  hello@charmstechlabs.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CHARMS Tech Labs. Designed for Engineering Students in India.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/admin/dashboard" className="hover:text-slate-300 transition-colors">Admin Portal</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
