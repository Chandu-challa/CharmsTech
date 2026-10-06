import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { Clock, IndianRupee, BookOpen, CheckCircle2, ChevronRight, Download, Laptop } from "lucide-react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function CourseDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = await prisma.course.findUnique({
    where: { slug: resolvedParams.slug, status: 'Available' },
  });

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col font-sans">

      {/* Hero Section */}
      <section className="bg-slate-950 pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8">
            <Link href="/training" className="hover:text-blue-400 transition-colors">Training</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-200">{course.title}</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              {course.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              {course.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 text-white font-medium shadow-inner">
                <Clock className="w-5 h-5 text-blue-400" />
                {course.duration} Duration
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 text-white font-medium shadow-inner">
                <IndianRupee className="w-5 h-5 text-green-400" />
                ₹15,000 Course Fee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-600" /> Course Overview
                </h3>
                <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
                  <p>
                    This comprehensive program is designed to take you through the complete lifecycle of software development. 
                    From setting up your development environment to deploying full-stack applications on modern cloud infrastructure.
                  </p>
                  <p className="mt-4">
                    You will learn through a heavily practical, project-based curriculum where theory is immediately applied to real-world scenarios.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Laptop className="w-6 h-6 text-violet-600" /> What You'll Learn
                </h3>
                <ul className="space-y-4">
                  {[
                    "Deep dive into programming fundamentals and advanced concepts",
                    "Building robust backend APIs with modern frameworks",
                    "Designing responsive, interactive frontend user interfaces",
                    "Database design, modeling, and ORM integration",
                    "State management and application architecture",
                    "Deployment, cloud hosting, and continuous integration"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-violet-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Ready to start?</h3>
                <p className="text-sm text-slate-500 mb-6">Join our next batch and accelerate your software engineering career.</p>
                
                <Link href="/contact" className="w-full py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30 mb-4">
                  Enroll Now
                </Link>
                <button className="w-full py-4 bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                  <Download className="w-4 h-4" /> Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
