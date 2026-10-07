import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Layers,
  Server,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Internships | CHARMS Tech Labs",
  description:
    "Launch your engineering career with real software development internships at CHARMS Tech Labs. Gain hands-on industry experience in Python, Next.js, and Data Science.",
};

interface InternshipTrack {
  id: string;
  title: string;
  duration: string;
  mode: string;
  badge: string;
  description: string;
  icon: typeof Server;
  skills: string[];
  learningOutcomes: string[];
}

const internshipTracks: InternshipTrack[] = [
  {
    id: "python-django",
    title: "Python & Django Full Stack",
    duration: "3 months",
    mode: "Hybrid / Remote",
    badge: "Backend & Systems",
    description:
      "Design robust server architectures, build production REST APIs, and manage relational databases using enterprise Python patterns.",
    icon: Server,
    skills: ["Python 3", "Django", "Django REST Framework", "PostgreSQL", "Celery", "Docker"],
    learningOutcomes: [
      "Architect and secure production-grade RESTful APIs with Django REST Framework",
      "Model complex relational databases and optimize SQL queries with PostgreSQL",
      "Implement JWT authentication, role-based access control, and API security",
      "Handle asynchronous jobs and background task processing with Celery & Redis",
    ],
  },
  {
    id: "react-nextjs",
    title: "React 19 & Next.js Modern Web",
    duration: "3 months",
    mode: "Hybrid / Remote",
    badge: "Frontend & Full Stack",
    description:
      "Create high-performance, modern web applications leveraging Next.js App Router, React Server Components, TypeScript, and responsive styling.",
    icon: Layers,
    skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Server Actions", "Prisma"],
    learningOutcomes: [
      "Master Next.js App Router, Server Components, and streaming architectures",
      "Build modular and accessible user interfaces with TypeScript and Tailwind CSS",
      "Integrate full-stack workflows using Server Actions and database ORMs",
      "Optimize performance, Core Web Vitals, and deploy to modern edge networks",
    ],
  },
  {
    id: "data-science-ml",
    title: "Data Science & Machine Learning",
    duration: "2.5 months",
    mode: "Hybrid / Remote",
    badge: "AI & Data Engineering",
    description:
      "Transform real-world data into actionable intelligence by engineering predictive algorithms and building interactive machine learning web applications.",
    icon: Database,
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "FastAPI", "Matplotlib"],
    learningOutcomes: [
      "Perform data wrangling, feature engineering, and EDA on real-world datasets",
      "Train, evaluate, and tune supervised and unsupervised ML models",
      "Build interactive visual dashboards and communicative statistical reports",
      "Serve predictive machine learning models as production REST APIs with FastAPI",
    ],
  },
];

const benefits = [
  {
    icon: Award,
    title: "Verifiable Certificate",
    description:
      "Earn an official, verifiable internship certificate and letter of recommendation upon project delivery to boost your job applications.",
  },
  {
    icon: Briefcase,
    title: "Production Codebase",
    description:
      "Contribute directly to live, production-grade applications with Git pull request workflows rather than simple toy tutorial clones.",
  },
  {
    icon: Users,
    title: "1-on-1 Senior Mentorship",
    description:
      "Receive weekly code reviews, architectural advice, and debugging assistance directly from senior software engineers.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description:
      "Enjoy structured milestones tailored around college timetables, exam seasons, and academic commitments.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Submit Application",
    description: "Fill in the internship application form with your college details and chosen track.",
  },
  {
    number: "02",
    title: "Technical Orientation",
    description: "Join an orientation session, get added to code repositories, and meet your technical mentor.",
  },
  {
    number: "03",
    title: "Build Sprints",
    description: "Work on structured weekly milestones, write testable code, and participate in code reviews.",
  },
  {
    number: "04",
    title: "Deploy & Certify",
    description: "Deploy your finished project live on cloud servers, showcase your work, and receive your credentials.",
  },
];

export default function InternshipsPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#f8fafc] text-slate-900 pb-24">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-[#f8fafc] border-b border-slate-200/60 text-center">
        <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white px-4 py-1.5 text-xs font-bold text-blue-700 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Applications Open • Hands-On Industry Internships</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          </div>

          <h1 className="mb-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Launch Your Tech Career with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Real Internships
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            Gain verified industry experience by building production-grade software applications under the mentorship of senior engineers. Designed for ambitious B.Tech & M.Tech students in Andhra Pradesh.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tracks"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              <span>Explore Internship Tracks</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-xs sm:text-sm font-bold text-slate-800 shadow-2xs transition hover:bg-slate-50"
            >
              Apply Directly via Contact Form
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80 pt-8">
            <div className="p-3">
              <span className="text-2xl font-extrabold text-slate-900">100%</span>
              <span className="text-xs text-slate-500 block mt-1">Practical Coding</span>
            </div>
            <div className="p-3">
              <span className="text-2xl font-extrabold text-blue-600">1-on-1</span>
              <span className="text-xs text-slate-500 block mt-1">Senior Mentorship</span>
            </div>
            <div className="p-3">
              <span className="text-2xl font-extrabold text-emerald-600">ISO / Govt</span>
              <span className="text-xs text-slate-500 block mt-1">Verifiable Certificate</span>
            </div>
            <div className="p-3">
              <span className="text-2xl font-extrabold text-violet-600">Flexible</span>
              <span className="text-xs text-slate-500 block mt-1">Academic Timetable</span>
            </div>
          </div>

        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2 block">
              Available Engineering Tracks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Industry Bootcamps
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {internshipTracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.id}
                  className="group relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-10px_rgba(79,70,229,0.18)] hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
                >
                  {/* Top Radiant Gradient Line */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200/70 shadow-2xs">
                        {track.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {track.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {track.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Core Tech Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {track.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2.5 mb-8">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Learning Milestones:
                      </span>
                      {track.learningOutcomes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="text-xs text-slate-500">
                      <div>Duration: <strong className="text-slate-900">{track.duration}</strong></div>
                      <div>Mode: <strong className="text-slate-900">{track.mode}</strong></div>
                    </div>

                    <Link
                      href="/contact"
                      className="py-2.5 px-5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center shadow-xs transition-all"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 border-t border-slate-200/60 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-violet-600 mb-2 block">
              Internship Advantages
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Why Intern at CHARMS Tech Labs?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80"
                >
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 Step Process */}
      <section className="py-16 border-t border-slate-200/60 bg-[#f8fafc]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
              Internship Onboarding Process
            </h2>
            <p className="text-sm text-slate-600">From application to certified engineer in 4 structured stages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-3xl font-extrabold text-blue-600 font-mono block mb-3">
                  {step.number}
                </span>
                <h4 className="text-base font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
