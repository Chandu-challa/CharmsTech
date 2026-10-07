"use client";

import {
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  GraduationCap,
  Flame,
  CheckCircle2,
} from "lucide-react";

const tickerItems = [
  { text: "292+ Industry Verified Projects", icon: Flame, color: "text-amber-500 bg-amber-50 border-amber-200" },
  { text: "Generative AI & LLM Systems", icon: Sparkles, color: "text-purple-600 bg-purple-50 border-purple-200" },
  { text: "Next.js 16 & React 19 Full Stack", icon: Layers, color: "text-blue-600 bg-blue-50 border-blue-200" },
  { text: "Python, Django & FastAPI Backends", icon: Terminal, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  { text: "Deep Learning & Computer Vision YOLO", icon: Cpu, color: "text-rose-600 bg-rose-50 border-rose-200" },
  { text: "IEEE Standard Project Reports & PPT", icon: CheckCircle2, color: "text-cyan-600 bg-cyan-50 border-cyan-200" },
  { text: "1-on-1 Viva Voce Mentoring in Tirupati", icon: GraduationCap, color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
  { text: "100% Local Laptop Execution Guarantee", icon: ShieldCheck, color: "text-teal-600 bg-teal-50 border-teal-200" },
];

export function LiveTicker() {
  return (
    <div className="w-full overflow-hidden py-3 bg-gradient-to-r from-blue-50/90 via-indigo-50/70 to-purple-50/90 border-y border-indigo-100/80 backdrop-blur-md">
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
        {/* First Loop */}
        {tickerItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`a-${idx}`}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-100 shadow-2xs text-xs font-bold text-slate-800"
            >
              <span className={`p-1 rounded-full ${item.color}`}>
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span>{item.text}</span>
            </div>
          );
        })}

        {/* Duplicate Loop for seamless infinite loop */}
        {tickerItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`b-${idx}`}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-100 shadow-2xs text-xs font-bold text-slate-800"
            >
              <span className={`p-1 rounded-full ${item.color}`}>
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
