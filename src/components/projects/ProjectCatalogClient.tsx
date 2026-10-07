"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  GraduationCap,
  Sparkles,
  Layers,
  Code2,
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ProjectCard, ProjectData } from "./ProjectCard";

interface CategoryData {
  id: string;
  name: string;
  slug: string;
}

interface ProjectCatalogClientProps {
  initialProjects: ProjectData[];
  categories: CategoryData[];
  initialDegree?: string;
  initialCategory?: string;
  initialSearch?: string;
}

export function ProjectCatalogClient({
  initialProjects,
  categories,
  initialDegree = "",
  initialCategory = "",
  initialSearch = "",
}: ProjectCatalogClientProps) {
  const [search, setSearch] = useState(initialSearch);
  const [selectedDegree, setSelectedDegree] = useState(initialDegree);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "title" | "code">("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  // Real-time reactive filtering
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Search filter
      if (search.trim()) {
        const query = search.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesCode = project.projectCode.toLowerCase().includes(query);
        const matchesDesc = project.shortDescription.toLowerCase().includes(query);
        const matchesCat = project.category.name.toLowerCase().includes(query);
        const matchesTech = project.technologies.some((t) =>
          t.name.toLowerCase().includes(query)
        );
        if (!matchesTitle && !matchesCode && !matchesDesc && !matchesCat && !matchesTech) {
          return false;
        }
      }

      // Degree filter
      if (selectedDegree && project.degree !== selectedDegree) {
        return false;
      }

      // Category filter
      if (
        selectedCategory &&
        project.category.slug !== selectedCategory &&
        project.category.name.toLowerCase() !== selectedCategory.toLowerCase()
      ) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty && project.difficulty !== selectedDifficulty) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "code") return a.projectCode.localeCompare(b.projectCode);
      return 0;
    });
  }, [
    initialProjects,
    search,
    selectedDegree,
    selectedCategory,
    selectedDifficulty,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedDegree("");
    setSelectedCategory("");
    setSelectedDifficulty("");
    setCurrentPage(1);
  };

  const btechCount = useMemo(
    () => initialProjects.filter((p) => p.degree === "B.Tech").length,
    [initialProjects]
  );
  const mtechCount = useMemo(
    () => initialProjects.filter((p) => p.degree === "M.Tech").length,
    [initialProjects]
  );

  return (
    <div className="relative">
      
      {/* Search & Filter Control Bar */}
      <div className="relative overflow-hidden mb-8 p-5 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-xl border border-indigo-100/90 shadow-md shadow-indigo-500/5">
        {/* Top Radiant Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
        
        {/* Top Search Input & Degree Switcher */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          
          {/* Live Search Input */}
          <div className="relative w-full md:max-w-xl">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by title, code (e.g. CTL-B-0012), technology..."
              className="w-full pl-11 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all shadow-inner"
            />
            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setCurrentPage(1);
                }}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Degree Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 w-full md:w-auto">
            <button
              onClick={() => {
                setSelectedDegree("");
                setCurrentPage(1);
              }}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                !selectedDegree
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>All Degrees</span>
              <span className="px-1.5 py-0.2 rounded-md bg-slate-200 text-slate-700 text-[10px]">
                {initialProjects.length}
              </span>
            </button>

            <button
              onClick={() => {
                setSelectedDegree("B.Tech");
                setCurrentPage(1);
              }}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                selectedDegree === "B.Tech"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>B.Tech</span>
              <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
                selectedDegree === "B.Tech" ? "bg-white/20 text-white" : "bg-blue-100 text-blue-700"
              }`}>
                {btechCount}
              </span>
            </button>

            <button
              onClick={() => {
                setSelectedDegree("M.Tech");
                setCurrentPage(1);
              }}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                selectedDegree === "M.Tech"
                  ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>M.Tech</span>
              <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
                selectedDegree === "M.Tech" ? "bg-white/20 text-white" : "bg-purple-100 text-purple-700"
              }`}>
                {mtechCount}
              </span>
            </button>
          </div>

        </div>

        {/* Secondary Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
          
          {/* Domain Category Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5 text-blue-600" /> Domain:
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="py-1.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="">All Categories ({categories.length})</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Level:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value);
                setCurrentPage(1);
              }}
              className="py-1.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 sm:ml-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-1.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              <option value="newest">Latest Added</option>
              <option value="title">Project Title (A - Z)</option>
              <option value="code">Project Code</option>
            </select>
          </div>

          {/* Reset Filters */}
          {(search || selectedDegree || selectedCategory || selectedDifficulty) && (
            <button
              onClick={clearFilters}
              className="px-3 py-1.5 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}

        </div>

      </div>

      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 px-1">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-extrabold text-slate-900">
            Showing {filteredProjects.length} of {initialProjects.length} verified projects
          </span>
          {selectedDegree && (
            <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              {selectedDegree}
            </span>
          )}
        </div>

        <p className="text-xs text-slate-500 font-medium">
          Page {currentPage} of {totalPages || 1} • Instant full-text search active
        </p>
      </div>

      {/* Projects Grid */}
      {paginatedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 sm:p-16 rounded-3xl bg-white border border-slate-200 text-center max-w-xl mx-auto my-12 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            No projects found
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            We couldn&apos;t find any projects matching your current filters. Try adjusting your search query or reset your filters.
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-all"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6 pb-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => {
              if (totalPages <= 7) return true;
              return (
                p === 1 ||
                p === totalPages ||
                (p >= currentPage - 2 && p <= currentPage + 2)
              );
            })
            .map((page, idx, arr) => {
              const prev = arr[idx - 1];
              return (
                <div key={page} className="flex items-center">
                  {prev && page - prev > 1 && (
                    <span className="px-2 text-slate-400 text-xs">...</span>
                  )}
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${
                      currentPage === page
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-2xs"
                    }`}
                  >
                    {page}
                  </button>
                </div>
              );
            })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
}
