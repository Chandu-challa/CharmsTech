import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Code2, Tag } from 'lucide-react';

interface Technology {
  name: string;
}

interface ProjectCardProps {
  project: {
    id: string;
    projectCode: string;
    title: string;
    slug: string;
    degree: string;
    subcategory: string | null;
    difficulty: string;
    shortDescription: string;
    category: { name: string };
    technologies: Technology[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300/50 transition-all duration-500 overflow-hidden relative">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      {/* Header Area */}
      <div className="p-6 pb-4 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200/80">
            <Tag className="w-3.5 h-3.5" />
            {project.projectCode}
          </span>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border shadow-sm
            ${project.degree === 'B.Tech' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-violet-50 text-violet-700 border-violet-200'}`}>
            <GraduationCap className="w-3.5 h-3.5" />
            {project.degree}
          </span>
        </div>
        <h3 className="text-xl font-extrabold text-slate-900 leading-snug mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 rounded-md border border-slate-200/60">
            <Code2 className="w-3.5 h-3.5 text-slate-400" />
            {project.category.name}
          </span>
          {project.subcategory && (
            <span className="flex items-center px-2 py-1 bg-slate-50 rounded-md border border-slate-200/60">
              {project.subcategory}
            </span>
          )}
          <span className={`flex items-center px-2 py-1 rounded-md border shadow-sm ${
            project.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 border-green-200/60' :
            project.difficulty === 'Advanced' ? 'bg-red-50 text-red-700 border-red-200/60' : 'bg-orange-50 text-orange-700 border-orange-200/60'
          }`}>{project.difficulty}</span>
        </div>
      </div>

      {/* Body Area */}
      <div className="p-6 flex-grow flex flex-col relative z-10 bg-white">
        <p className="text-sm text-slate-600 mb-8 line-clamp-3 leading-relaxed">
          {project.shortDescription}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech.name} className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 text-slate-600 text-[11px] font-bold rounded-lg border border-slate-200 transition-colors cursor-default">
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 bg-slate-50 text-slate-400 text-[11px] font-bold rounded-lg border border-slate-200 border-dashed">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex gap-3">
            <Link 
              href={`/projects/${project.slug}`} 
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
            >
              View Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href={`/projects/${project.slug}?request=true`} 
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-slate-700 border-2 border-slate-200 text-sm font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
