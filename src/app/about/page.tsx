import Link from "next/link";
import {
  Target,
  Heart,
  Shield,
  Zap,
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  BookOpen,
  Star,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Us | CHARMS Tech Labs",
  description: "Learn about CHARMS Tech Labs — empowering engineering students with hands-on project development and modern full-stack training in Tirupati.",
};

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "1,200+", label: "Engineers Trained" },
  { value: "292+", label: "Live Code Repositories" },
  { value: "99.4%", label: "Viva Success Rate" },
];

const values = [
  {
    icon: Zap,
    title: "Real Architecture First",
    text: "We reject copy-pasted tutorial code. Every student builds on clean architectures, relational schema designs, and production standards.",
  },
  {
    icon: Shield,
    title: "100% Viva Defense Guarantee",
    text: "We ensure you understand every line of code, UML diagram, and algorithm so you defend your project with absolute confidence.",
  },
  {
    icon: Users,
    title: "Direct Mentor Accessibility",
    text: "Our mentors are seasoned developers who sit with you, resolve bugs on your local machine, and provide real-time guidance.",
  },
  {
    icon: Target,
    title: "Academic Integrity & Innovation",
    text: "Transparent pricing, verified IEEE standards, and genuine commitment to preparing you for enterprise technology careers.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col font-sans bg-[#f8fafc] text-slate-900 min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-[#f8fafc] border-b border-slate-200/60 text-center">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-violet-200 text-xs font-bold text-violet-700 shadow-2xs mb-6">
            <Star className="w-3.5 h-3.5 text-violet-600" />
            <span>Center of Engineering Excellence • Tirupati</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              CHARMS Tech Labs
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
            We are a premier technology training and engineering project development lab based in Tirupati, Andhra Pradesh. We bridge the critical gap between academic theory and high-growth software industry careers.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            {stats.map((s) => (
              <div key={s.label} className="p-2">
                <div className="text-2xl sm:text-4xl font-extrabold text-blue-600 mb-1 font-mono">
                  {s.value}
                </div>
                <div className="text-xs text-slate-500 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-5">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower B.Tech and M.Tech students with hands-on, industry-standard software skills through real project development, architecture mentoring, and technical interview training. We turn academic projects into proud career portfolio pieces.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center mb-5">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be South India&apos;s most trusted academic innovation laboratory, known for technological rigor, verified original codebases, and student success across leading software companies and postgraduate research universities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 border-t border-slate-200/60 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-2 block">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              What Defines Our Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1.5">{v.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus CTA */}
      <section className="py-16 border-t border-slate-200/60 bg-[#f8fafc] text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Visit Us in Tirupati</h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
              Charms Tech Labs HQ, Tech Park, Sector 4, Tirupati, Andhra Pradesh. Walk in for a face-to-face project counseling session and live system demo.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all"
            >
              <span>Get Directions & Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
