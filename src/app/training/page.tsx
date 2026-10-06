import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Database, Layout, Server, Cpu, Globe2, BookOpen } from "lucide-react";
import prisma from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function TrainingPage() {
  const courses = await prisma.course.findMany({
    where: { status: 'Available' },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="flex flex-col font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] opacity-30 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-violet-600 to-transparent blur-3xl mix-blend-screen"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-sm mb-8">
            <BookOpen className="w-4 h-4" /> Professional Training Programs
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Master Full Stack <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Industry-aligned curriculum designed to transform you from a beginner into a production-ready software engineer. Real-world projects, expert mentorship, and cutting-edge tech stacks.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 group relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-violet-50 rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative z-10 flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-200/50">
                      {course.title.includes("Python") ? <Server className="w-7 h-7" /> : <Layout className="w-7 h-7" />}
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 font-bold text-xs rounded-full uppercase tracking-wider">
                      Admissions Open
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{course.title}</h3>
                  <p className="text-slate-600 mb-6 font-medium leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">Fee: ₹15,000</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">Real-world Project Implementation</span>
                    </div>
                  </div>
                </div>

                <Link href={`/training/${course.slug}`} className="mt-auto w-full py-4 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                  View Syllabus & Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why Train with CHARMS?</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">We don't just teach syntax; we build software engineers capable of architecting scalable applications.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">100% Practical Approach</h4>
              <p className="text-slate-600 text-sm">Every concept is tied to a real-world application. No boring slides, just pure coding and architectural design.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Modern Tech Stacks</h4>
              <p className="text-slate-600 text-sm">Learn what the industry actually uses right now: React 19, Next.js 15, FastAPI, Django, and PostgreSQL.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Project-Driven</h4>
              <p className="text-slate-600 text-sm">Graduate with a portfolio of live projects deployed on the cloud. Show employers what you can actually build.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
