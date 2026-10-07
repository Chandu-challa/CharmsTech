"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Terminal,
  Layers,
  FileCheck2,
  Play,
  CheckCircle2,
  Sparkles,
  Cpu,
  GraduationCap,
  Copy,
  Check,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<"code" | "architecture" | "deliverables">("code");
  const [isRunning, setIsRunning] = useState(false);
  const [runSuccess, setRunSuccess] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleSimulateRun = () => {
    setIsRunning(true);
    setRunSuccess(false);
    setTimeout(() => {
      setIsRunning(false);
      setRunSuccess(true);
      setTimeout(() => setRunSuccess(false), 4000);
    }, 900);
  };

  const copyCodeSnippet = () => {
    const code = `// CHARMS Project Engine - Live Run
const project = await charmsLabs.loadProject({
  code: "AI-104",
  degree: "B.Tech / M.Tech",
  topic: "Multi-Agent RAG with DeepSeek & FastAPI"
});
await project.executeLocally(); // 100% Viva Ready`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative mx-auto mt-12 w-full max-w-5xl">
      {/* Dynamic Animated Ambient Glows */}
      <div className="pointer-events-none absolute -top-12 left-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-400/25 via-indigo-500/20 to-purple-500/25 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-10 right-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-blue-500/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Floating Animated Badges (Surrounding the Card) */}
      <div className="hidden lg:block absolute -left-8 top-12 z-20 animate-float">
        <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-2.5 shadow-xl shadow-indigo-500/10 border border-indigo-100 backdrop-blur-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-xs">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-900">IEEE 2025/2026 Ready</div>
            <div className="text-[10px] text-slate-500">Peer-reviewed base papers</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -right-8 top-8 z-20 animate-float-reverse">
        <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-2.5 shadow-xl shadow-emerald-500/10 border border-emerald-100 backdrop-blur-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-xs">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-900">100% Live Execution</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <div className="text-[10px] text-slate-500">Verified locally on student laptops</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -left-6 bottom-8 z-20 animate-float-reverse">
        <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-2.5 shadow-xl shadow-blue-500/10 border border-blue-100 backdrop-blur-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-600 text-white shadow-xs">
            <GraduationCap className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-900">1-on-1 Viva Coaching</div>
            <div className="text-[10px] text-slate-500">Mock drills with senior engineers</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -right-6 bottom-12 z-20 animate-float">
        <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-2.5 shadow-xl shadow-violet-500/10 border border-violet-100 backdrop-blur-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-500 to-pink-500 text-white shadow-xs">
            <FileCheck2 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-900">Full Deliverables</div>
            <div className="text-[10px] text-slate-500">Report + PPT + Code + Diagrams</div>
          </div>
        </div>
      </div>

      {/* Main Glass Project Engine Container */}
      <div className="relative overflow-hidden rounded-3xl border border-indigo-100/90 bg-white/90 p-4 sm:p-7 shadow-[0_20px_50px_-15px_rgba(79,70,229,0.15)] backdrop-blur-xl">
        
        {/* Top Iridescent Accent Strip */}
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        {/* Header Bar */}
        <div className="mb-6 flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-rose-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-slate-800">CHARMS::ENGINE_V2</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Project Terminal
              </span>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex rounded-2xl bg-slate-100/80 p-1 text-xs font-bold border border-slate-200/80">
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 transition-all ${
                activeTab === "code"
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>Execution Engine</span>
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 transition-all ${
                activeTab === "architecture"
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>System Blueprint</span>
            </button>
            <button
              onClick={() => setActiveTab("deliverables")}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 transition-all ${
                activeTab === "deliverables"
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileCheck2 className="h-3.5 w-3.5" />
              <span>Full Package</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Live Code & Execution Engine */}
        {activeTab === "code" && (
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0b101b] p-4 text-left font-mono text-xs text-slate-200 shadow-inner">
              {/* Terminal Title Bar */}
              <div className="mb-3 flex items-center justify-between border-b border-slate-800/80 pb-2.5 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-indigo-400 font-bold">workspace/ai-rag-pipeline</span>
                  <span className="text-slate-500">•</span>
                  <span>python main.py --local-debug</span>
                </div>
                <button
                  onClick={copyCodeSnippet}
                  className="flex items-center gap-1 rounded px-2 py-0.5 text-[10px] text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  {copiedCode ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedCode ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Code Editor View */}
              <div className="space-y-1.5 text-[11px] sm:text-xs">
                <p className="text-slate-500">// CHARMS Tech Labs - Verified Production Architecture</p>
                <p>
                  <span className="text-purple-400">import</span> <span className="text-blue-300">torch</span>, <span className="text-blue-300">fastapi</span>, <span className="text-blue-300">langchain_community</span>
                </p>
                <p>
                  <span className="text-purple-400">from</span> <span className="text-yellow-300">charms_pipeline</span> <span className="text-purple-400">import</span> <span className="text-blue-300">IEEEProjectEngine</span>
                </p>
                <p className="pt-1">
                  <span className="text-blue-400">engine</span> = <span className="text-emerald-300">IEEEProjectEngine</span>(
                  <span className="text-amber-300">&quot;AI-104&quot;</span>, degree=<span className="text-amber-300">&quot;B.Tech / M.Tech&quot;</span>)
                </p>
                <p>
                  <span className="text-blue-400">engine</span>.<span className="text-yellow-300">verify_local_environment</span>()
                  <span className="text-emerald-400 ml-2">// ✔ CUDA, Python 3.11, PostgreSQL Connected</span>
                </p>
                <p>
                  <span className="text-purple-400">output</span> = <span className="text-blue-400">engine</span>.<span className="text-yellow-300">generate_viva_defense_bundle</span>()
                </p>
              </div>

              {/* Console Output when Simulated */}
              <div className="mt-4 rounded-xl border border-slate-800 bg-[#050811] p-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 font-bold text-slate-300">
                    <Terminal className="h-3.5 w-3.5 text-blue-400" /> Live Terminal Log:
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Port 8000 (Active)</span>
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <p className="text-emerald-400">✔ [2026-03] Neural Architecture verified (F1-Score: 0.982)</p>
                  <p className="text-cyan-300">✔ [2026-03] Database seeded with 50,000 synthetic records</p>
                  <p className="text-amber-300">✔ [2026-03] IEEE Documentation & UML Diagrams synchronized</p>
                  {isRunning ? (
                    <p className="text-indigo-400 animate-pulse font-bold">⚙ Compiling live execution check...</p>
                  ) : runSuccess ? (
                    <p className="text-emerald-400 font-bold bg-emerald-950/60 p-1.5 rounded border border-emerald-800">
                      🎉 SUCCESS: Project executed with 0 errors! Student laptop verified & Viva ready.
                    </p>
                  ) : (
                    <p className="text-slate-400">
                      ➜ Ready for viva voce presentation. <span className="animate-pulse">_</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                <span>292+ ready projects available in catalog</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleSimulateRun}
                  disabled={isRunning}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all"
                >
                  <Play className={`h-3.5 w-3.5 ${isRunning ? "animate-spin" : ""}`} />
                  <span>{isRunning ? "Simulating Run..." : "Test Local Run"}</span>
                </button>
                <Link
                  href="/projects"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all"
                >
                  <span>Browse Projects</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: System Architecture Blueprint */}
        {activeTab === "architecture" && (
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Layers className="h-4 w-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 mb-1">1. Frontend Layer</div>
                <p className="text-[11px] text-slate-600">
                  Interactive dashboards built with React 19, Next.js, Streamlit, or Tailwind CSS with responsive student views.
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-200 bg-indigo-50/50 p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  <Cpu className="h-4 w-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 mb-1">2. Core Processing Engine</div>
                <p className="text-[11px] text-slate-600">
                  FastAPI / Django REST API routing, PyTorch/TensorFlow models, LangChain agents, or automated ML classifiers.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 text-white">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 mb-1">3. Storage & Verification</div>
                <p className="text-[11px] text-slate-600">
                  PostgreSQL, SQLite, ChromaDB vector stores, with full SQL migration scripts and sample test datasets.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
              <div className="text-xs font-bold text-slate-800 mb-1">
                Included in every project: UML Diagrams (Class, Sequence, ER, DFD, Use Case)
              </div>
              <div className="text-[11px] text-slate-500">
                Created directly according to JNTU, SVU, and autonomous college thesis formats.
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Complete Deliverables Package */}
        {activeTab === "deliverables" && (
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-xs">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Code2 className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-slate-900">Complete Source Code</div>
                <div className="text-[10px] text-slate-500 mt-1">Clean, modular, thoroughly commented</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-xs">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-slate-900">IEEE Documentation</div>
                <div className="text-[10px] text-slate-500 mt-1">Word & PDF format with base paper</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-xs">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-slate-900">Professional PPT</div>
                <div className="text-[10px] text-slate-500 mt-1">30+ animated defense slides</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-xs">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-slate-900">Viva Voce Q&A Bank</div>
                <div className="text-[10px] text-slate-500 mt-1">50+ examiner questions & answers</div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-indigo-50 border border-indigo-200/80 p-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-indigo-950">
                  Ready to start your project or schedule a live demo in Tirupati?
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors"
              >
                <span>Contact Lab</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
