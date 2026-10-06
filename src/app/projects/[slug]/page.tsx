import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight, Code2, GraduationCap, Clock, FileText } from 'lucide-react';
import { ProjectRequestForm } from '@/components/forms/ProjectRequestForm';

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = await prisma.project.findUnique({
    where: { slug: resolvedParams.slug },
    include: {
      category: true,
      technologies: true,
      modules: { orderBy: { displayOrder: 'asc' } },
      features: { orderBy: { displayOrder: 'asc' } },
    }
  });

  if (!project || !project.isPublished) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm font-medium text-slate-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 truncate">{project.title}</span>
        </div>
      </div>

      {/* Project Header Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Link href="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Catalog
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                ${project.degree === 'B.Tech' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-violet-500/20 text-violet-300 border border-violet-500/30'}`}>
                {project.degree}
              </span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300">
                {project.category.name}
              </span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300">
                {project.projectCode}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#request-form" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30">
                Request This Project
              </Link>
              <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview & Description</h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p className="whitespace-pre-line leading-relaxed">{project.description}</p>
              </div>
            </div>

            {project.problemStatement && (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Problem Statement</h2>
                <p className="text-slate-600 whitespace-pre-line leading-relaxed">{project.problemStatement}</p>
              </div>
            )}

            {project.modules.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">System Modules</h2>
                <div className="space-y-6">
                  {project.modules.map(mod => (
                    <div key={mod.id} className="border-l-4 border-blue-600 pl-4 py-1 bg-slate-50/50 p-4 rounded-r-lg">
                      <h3 className="font-bold text-slate-900 mb-1">{mod.moduleName}</h3>
                      {mod.description && <p className="text-slate-600 text-sm leading-relaxed">{mod.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.features.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map(feat => (
                    <li key={feat.id} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feat.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Meta & Tech Stack */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Project Details</h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 flex items-center gap-2"><GraduationCap className="w-4 h-4"/> Degree</span>
                  <span className="font-semibold text-slate-900">{project.degree}</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 flex items-center gap-2"><Code2 className="w-4 h-4"/> Category</span>
                  <span className="font-semibold text-slate-900">{project.category.name}</span>
                </li>
                {project.duration && (
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 flex items-center gap-2"><Clock className="w-4 h-4"/> Duration</span>
                    <span className="font-semibold text-slate-900">{project.duration}</span>
                  </li>
                )}
                <li className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 flex items-center gap-2">Difficulty</span>
                  <span className={`font-semibold ${
                    project.difficulty === 'Beginner' ? 'text-green-600' :
                    project.difficulty === 'Advanced' ? 'text-red-600' : 'text-orange-600'
                  }`}>{project.difficulty}</span>
                </li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">Technology Stack</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map(tech => (
                  <span key={tech.id} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md border border-slate-200">
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Need this project?</h4>
                <p className="text-sm text-slate-500 mb-4">Get complete source code, setup guide, and documentation.</p>
                <Link href="#request-form" className="block w-full text-center py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Request Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Request Form Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ProjectRequestForm projectId={project.id} projectTitle={project.title} />
      </div>

    </div>
  );
}
