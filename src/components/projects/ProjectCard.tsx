"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Code2,
  Copy,
  Check,
  Layers,
  Sparkles,
  FileText,
  Presentation,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Terminal,
  ExternalLink,
} from "lucide-react";

export interface ProjectData {
  id: string;
  projectCode: string;
  title: string;
  slug: string;
  degree: string;
  subcategory?: string | null;
  difficulty: string;
  shortDescription: string;
  category: { name: string; slug?: string };
  technologies: { name: string }[];
}

interface ProjectCardProps {
  project: ProjectData;
  onQuickView?: (project: ProjectData) => void;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(project.projectCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isBTech = project.degree === "B.Tech";

  const difficultyConfig = {
    Beginner: {
      label: "Beginner",
      badge: "text-emerald-700 bg-emerald-50/90 border-emerald-200/90",
      dot: "bg-emerald-500",
    },
    Intermediate: {
      label: "Intermediate",
      badge: "text-amber-700 bg-amber-50/90 border-amber-200/90",
      dot: "bg-amber-500",
    },
    Advanced: {
      label: "Advanced",
      badge: "text-rose-700 bg-rose-50/90 border-rose-200/90",
      dot: "bg-rose-500",
    },
  }[project.difficulty] || {
    label: project.difficulty || "Standard",
    badge: "text-indigo-700 bg-indigo-50/90 border-indigo-200/90",
    dot: "bg-indigo-500",
  };

  return (
    <div className="group relative flex flex-col rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-10px_rgba(79,70,229,0.18)] hover:border-indigo-300/90 transition-all duration-300 overflow-hidden transform hover:-translate-y-1.5">
      
      {/* Radiant Shifting Top Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:from-cyan-400 group-hover:via-indigo-500 group-hover:to-pink-500 transition-all duration-500" />

      {/* Ambient Radial Hover Lighting (Subtle & High-Tech) */}
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 rounded-3xl" />

      {/* Header Container */}
      <div className="p-6 pb-4 border-b border-slate-100/90 bg-gradient-to-b from-slate-50/80 via-slate-50/40 to-white">
        
        {/* Top Badges Row */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          
          {/* Copyable Project Code Pill */}
          <button
            onClick={copyCode}
            title="Click to copy unique project code"
            className="group/code inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wider bg-white text-slate-700 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/60 hover:text-indigo-700 shadow-2xs transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-sans font-bold">Copied!</span>
              </>
            ) : (
              <>
                <span className="text-indigo-600 font-extrabold">#</span>
                <span>{project.projectCode}</span>
                <Copy className="w-3 h-3 text-slate-400 group-hover/code:text-indigo-600 transition-colors" />
              </>
            )}
          </button>

          {/* Degree & Difficulty Indicators */}
          <div className="flex items-center gap-1.5">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide border shadow-2xs ${
                isBTech
                  ? "bg-blue-50/90 text-blue-700 border-blue-200/80"
                  : "bg-purple-50/90 text-purple-700 border-purple-200/80"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              {project.degree}
            </span>

            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold border ${difficultyConfig.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${difficultyConfig.dot}`} />
              {difficultyConfig.label}
            </span>
          </div>

        </div>

        {/* Project Title */}
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-[17px] font-extrabold text-slate-900 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
        </Link>

        {/* Category & Subcategory Pill Row */}
        <div className="mt-3.5 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-200 shadow-2xs">
              <Code2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>{project.category.name}</span>
            </span>

            {project.subcategory && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/60">
                {project.subcategory}
              </span>
            )}
          </div>

          {/* Live Verified Pulse Badge */}
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50/90 px-2.5 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>100% Viva Ready</span>
          </span>
        </div>

      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col bg-white">
        
        {/* Short Synopsis / Problem Statement */}
        <p className="text-xs sm:text-[13px] text-slate-600 mb-5 line-clamp-3 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Accurate Deliverables Checklist Strip (Key Value for Engineering Students) */}
        <div className="mb-5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/70">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> Complete Deliverables Bundle:
            </span>
            <span className="text-[9px] font-mono font-bold text-indigo-600">IEEE 2025/2026</span>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px] font-medium text-slate-700">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">Source Code</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">IEEE Project Report</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">PPT Presentation Deck</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">Viva Voce Q&A Bank</span>
            </div>
          </div>
        </div>

        {/* Integrated Technologies Container */}
        <div className="mt-auto mb-6">
          <div className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 mb-2 flex items-center gap-1">
            <Layers className="w-3 h-3 text-indigo-600" />
            <span>Tech Stack Architecture:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech.name}
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100/90 text-slate-700 border border-slate-200/80 group-hover:bg-indigo-50/70 group-hover:text-indigo-700 group-hover:border-indigo-200 transition-colors"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-50 text-slate-500 border border-slate-200 border-dashed">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="grid grid-cols-2 gap-2.5 pt-3.5 border-t border-slate-100">
          <Link
            href={`/projects/${project.slug}`}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:shadow-indigo-500/20 transition-all transform hover:-translate-y-0.5 text-center"
          >
            <span>View Blueprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={`/projects/${project.slug}?request=true`}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 hover:border-indigo-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-all text-center"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>Request Project</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
