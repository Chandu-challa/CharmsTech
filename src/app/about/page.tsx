import Link from "next/link";
import { Target, Heart, Shield, Zap, Code2, GraduationCap, Briefcase, Award, Users, BookOpen, Star, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "1000+", label: "Students Trained" },
  { value: "50+", label: "Technologies" },
  { value: "95%", label: "Satisfaction Rate" },
];

const values = [
  { icon: Zap, title: "Innovation", text: "We stay ahead of the curve, teaching the latest frameworks and tools used by top tech companies." },
  { icon: Shield, title: "Quality", text: "Every project and course is built with production-grade standards. No shortcuts, no half-measures." },
  { icon: Heart, title: "Student-First", text: "Your success is our mission. We provide mentorship, support, and guidance at every step." },
  { icon: Target, title: "Integrity", text: "Transparent pricing, honest timelines, and genuine commitment to delivering what we promise." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500 via-blue-600 to-transparent blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-semibold text-sm mb-8">
            <Star className="w-4 h-4" /> Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">CHARMS Tech Labs</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We are a technology training and project development company based in Tirupati, Andhra Pradesh — empowering students to build real software and launch real careers.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-10 border border-blue-200/50">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                To empower B.Tech and M.Tech students with practical, industry-relevant technology skills through hands-on training, real-world project development, and professional mentorship — bridging the gap between academics and the software industry.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-3xl p-10 border border-violet-200/50">
              <div className="w-14 h-14 bg-violet-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                To become the most trusted platform for academic project development and technology training in India — known for quality, innovation, and an unwavering commitment to student success in the global tech ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">What We Do</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Three divisions, one goal — making you job-ready.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Professional Training</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Industry-aligned courses in Python Full Stack and Next.js Full Stack development with real-world projects and expert mentorship.</p>
              <Link href="/training" className="mt-6 inline-flex items-center gap-1 text-blue-600 font-bold text-sm hover:gap-2 transition-all">Explore Courses →</Link>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-violet-100 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <Code2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Project Development</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Complete B.Tech and M.Tech projects with full source code, documentation, architecture support, and deployment guidance.</p>
              <Link href="/projects" className="mt-6 inline-flex items-center gap-1 text-violet-600 font-bold text-sm hover:gap-2 transition-all">Browse Projects →</Link>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-100 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Briefcase className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Internships</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Hands-on software development internships where you build real applications, learn professional workflows, and earn certifications.</p>
              <Link href="/internships" className="mt-6 inline-flex items-center gap-1 text-green-600 font-bold text-sm hover:gap-2 transition-all">View Programs →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-blue-100 mb-10 font-medium">Whether you need a project, want to learn a new stack, or are looking for an internship — we are here to help you succeed.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Contact Us
            </Link>
            <Link href="/projects" className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-colors backdrop-blur">
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
