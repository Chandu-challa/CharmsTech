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
  title: "Internships | CHARMS Tech Labs",
  description:
    "Launch your tech career with real software development internships at CHARMS Tech Labs. Gain hands-on industry experience in Python, Next.js, and Data Science.",
};

interface InternshipTrack {
  id: string;
  title: string;
  duration: string;
  mode: string;
  badge: string;
  badgeColor: string;
  description: string;
  icon: typeof Server;
  iconBg: string;
  iconColor: string;
  skills: string[];
  learningOutcomes: string[];
}

const internshipTracks: InternshipTrack[] = [
  {
    id: "python-django",
    title: "Python & Django Development",
    duration: "3 months",
    mode: "Remote",
    badge: "Backend & Systems",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description:
      "Design robust server architectures, build production REST APIs, and manage relational databases using enterprise Python patterns.",
    icon: Server,
    iconBg: "bg-emerald-50 border-emerald-200/60",
    iconColor: "text-emerald-600",
    skills: ["Python 3", "Django", "Django REST Framework", "PostgreSQL", "Celery", "Docker"],
    learningOutcomes: [
      "Architect and secure production-grade RESTful APIs with Django REST Framework",
      "Model complex relational databases and optimize SQL queries with PostgreSQL",
      "Implement JWT authentication, role-based access control, and API security",
      "Handle asynchronous jobs and background processing with Celery & Redis",
      "Containerize backend services with Docker and set up automated deployments",
    ],
  },
  {
    id: "react-nextjs",
    title: "React & Next.js Development",
    duration: "3 months",
    mode: "Remote",
    badge: "Frontend & Full Stack",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description:
      "Create high-performance, modern web applications leveraging Next.js App Router, React Server Components, TypeScript, and responsive styling.",
    icon: Layers,
    iconBg: "bg-blue-50 border-blue-200/60",
    iconColor: "text-blue-600",
    skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Server Actions", "REST/GraphQL"],
    learningOutcomes: [
      "Master Next.js App Router, Server Components, and streaming architectures",
      "Build modular and accessible user interfaces with TypeScript and Tailwind CSS",
      "Integrate full-stack workflows using Server Actions and data validation",
      "Manage client and server state seamlessly with optimistic UI updates",
      "Optimize performance, Core Web Vitals, and deploy to modern edge networks",
    ],
  },
  {
    id: "data-science-ml",
    title: "Data Science & Machine Learning",
    duration: "2 months",
    mode: "Remote",
    badge: "AI & Data Engineering",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
    description:
      "Transform real-world data into actionable intelligence by engineering predictive algorithms and building interactive machine learning web applications.",
    icon: Database,
    iconBg: "bg-violet-50 border-violet-200/60",
    iconColor: "text-violet-600",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "FastAPI", "Matplotlib"],
    learningOutcomes: [
      "Perform data wrangling, feature engineering, and EDA on messy real-world datasets",
      "Train, evaluate, and tune supervised and unsupervised ML models with Scikit-Learn",
      "Build interactive visual dashboards and communicative statistical reports",
      "Serve predictive machine learning models as production REST APIs with FastAPI",
      "Understand model metrics, bias mitigation, and end-to-end ML lifecycle tracking",
    ],
  },
];

const benefits = [
  {
    icon: Award,
    title: "Certificate of Completion",
    description:
      "Earn an official, verifiable internship certificate and letter of recommendation upon project delivery to boost your resume.",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    icon: Briefcase,
    title: "Real Project Experience",
    description:
      "Contribute directly to live, production-grade applications with git workflows rather than simple toy tutorial clones.",
    accent: "from-indigo-500 to-violet-600",
  },
  {
    icon: Users,
    title: "Mentorship from Experts",
    description:
      "Receive 1-on-1 code reviews, architectural advice, and weekly guidance directly from seasoned software industry professionals.",
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Enjoy structured remote milestones tailored around college timetables, exam seasons, and academic obligations.",
    accent: "from-purple-500 to-pink-600",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Apply Online",
    description: "Fill in the internship application form with your college details and chosen track.",
  },
  {
    number: "02",
    title: "Mentor Onboarding",
    description: "Join an orientation session, get added to code repositories, and meet your technical mentor.",
  },
  {
    number: "03",
    title: "Build Sprints",
    description: "Work on structured weekly milestones, write testable code, and participate in code reviews.",
  },
  {
    number: "04",
    title: "Graduate & Certify",
    description: "Deploy your finished project live, demonstrate your solution, and receive your credentials.",
  },
];

export default function InternshipsPage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pb-28 pt-24 text-center">
        {/* Ambient Gradient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-130 w-250 -translate-x-1/2 bg-gradient-to-br from-blue-600 via-violet-600 to-transparent opacity-20 blur-3xl" />
        
        {/* Grid Overlay Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:16px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span>Applications Open • Hands-On Industry Internships</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Launch Your Tech Career with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Real Internships
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-slate-300 md:text-xl">
            Gain hands-on industry experience by building production-grade software applications under the mentorship of senior engineers. Designed for aspiring B.Tech & M.Tech students.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#tracks"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-500 hover:to-violet-500 hover:shadow-2xl sm:w-auto"
            >
              Explore Tracks{" "}
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-200 hover:bg-white/10 sm:w-auto"
            >
              Apply Directly
            </Link>
          </div>

          {/* Key Highlights Bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-white md:text-3xl">100%</span>
              <span className="text-xs font-medium text-slate-400 mt-1">Practical Coding</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-white md:text-3xl">1-on-1</span>
              <span className="text-xs font-medium text-slate-400 mt-1">Expert Mentorship</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-white md:text-3xl">Verified</span>
              <span className="text-xs font-medium text-slate-400 mt-1">Certification</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-white md:text-3xl">Remote</span>
              <span className="text-xs font-medium text-slate-400 mt-1">Flexible Schedule</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Internship Programs Grid Section */}
      <section id="tracks" className="relative z-20 -mt-10 bg-slate-50 pb-24 pt-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
              Internship Programs
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Specialized Engineering Tracks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-slate-600 md:text-lg">
              Choose your focus area and spend your internship building demonstrable, production-ready software systems with modern industry tools.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {internshipTracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Subtle Corner Glow Accent */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br from-blue-500/10 to-violet-500/10 blur-2xl transition-all group-hover:scale-150" />

                  <div>
                    {/* Header info */}
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${track.iconBg} ${track.iconColor} shadow-sm`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${track.badgeColor}`}
                      >
                        {track.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mb-3 text-2xl font-extrabold text-slate-900 transition-colors group-hover:text-blue-600">
                      {track.title}
                    </h3>
                    <p className="mb-6 text-sm font-medium leading-relaxed text-slate-600">
                      {track.description}
                    </p>

                    {/* Duration & Mode Badges */}
                    <div className="mb-6 flex flex-wrap items-center gap-3 border-y border-slate-100 py-3.5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span>{track.duration}</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Globe className="h-4 w-4 text-violet-600" />
                        <span>{track.mode}</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <GraduationCap className="h-4 w-4 text-emerald-600" />
                        <span>B.Tech / M.Tech</span>
                      </div>
                    </div>

                    {/* What you'll learn */}
                    <div className="mb-6">
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900">
                        What You&apos;ll Learn &amp; Build
                      </h4>
                      <ul className="space-y-2.5">
                        {track.learningOutcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs font-medium leading-normal text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies tags */}
                    <div className="mb-8">
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {track.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Apply Now Link */}
                  <div className="pt-2">
                    <Link
                      href={`/contact?subject=${encodeURIComponent(`Internship Application - ${track.title}`)}`}
                      className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Benefits Section */}
      <section className="border-t border-slate-200/80 bg-white py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-violet-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-violet-700">
              Why Intern With Us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Program Benefits &amp; Advantages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-slate-600 md:text-lg">
              Designed specifically to bridge academic knowledge into high-value engineering skills demanded by software companies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-7 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div
                    className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.accent} text-white shadow-md`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2.5 text-lg font-extrabold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process / How It Works */}
      <section className="border-t border-slate-200/80 bg-slate-50 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              How the Internship Works
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm font-medium text-slate-600">
              Four straightforward steps from initial application to receiving your completion certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 text-3xl font-extrabold text-blue-600/30">
                  {step.number}
                </div>
                <h3 className="mb-2 text-base font-extrabold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs font-medium leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 shadow-2xl shadow-blue-500/30 md:p-14 text-center text-white">
            {/* Background Decorative Rings */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-white/10 blur-xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <Zap className="h-3.5 w-3.5" /> Limited Seats Per Batch
              </span>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Kickstart Your Software Career?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base font-medium text-blue-100 md:text-lg">
                Internship batches are intentionally kept small to maintain dedicated 1-on-1 mentor guidance. Apply today to secure your spot for the upcoming cohort.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-extrabold text-slate-900 shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
                >
                  Apply for Internship
                  <ArrowRight className="h-5 w-5 text-slate-900 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/training"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-200 hover:bg-white/20 sm:w-auto"
                >
                  View Full Training
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
