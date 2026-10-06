import prisma from '@/lib/db';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const degreeParam = params.degree as string;
  const categoryParam = params.category as string;
  const searchParam = params.search as string;

  // Build where clause
  const where: any = { isPublished: true };
  
  if (degreeParam) {
    where.degree = degreeParam;
  }
  
  if (categoryParam) {
    where.category = { slug: categoryParam };
  }

  if (searchParam) {
    where.OR = [
      { title: { contains: searchParam } },
      { shortDescription: { contains: searchParam } },
      { projectCode: { contains: searchParam } },
    ];
  }

  const projects = await prisma.project.findMany({
    where,
    include: {
      category: true,
      technologies: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const categories = await prisma.projectCategory.findMany({
    where: { isActive: true },
    orderBy: { name: 'asc' }
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Find Your Project
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            Browse our catalog of premium B.Tech and M.Tech projects. Complete with source code, documentation, and architecture diagrams.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sticky top-28 shadow-xl shadow-slate-200/20">
              <div className="flex items-center gap-2 font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                <SlidersHorizontal className="w-5 h-5 text-blue-600" />
                Filters
              </div>

              {/* Search (Basic Form for URL update) */}
              <div className="mb-8">
                <form action="/projects" method="GET">
                  {degreeParam && <input type="hidden" name="degree" value={degreeParam} />}
                  {categoryParam && <input type="hidden" name="category" value={categoryParam} />}
                  <label className="text-sm font-bold text-slate-900 mb-3 block">Search</label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input 
                      type="text" 
                      name="search"
                      defaultValue={searchParam}
                      placeholder="Search projects..." 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all font-medium text-slate-900"
                    />
                  </div>
                </form>
              </div>

              {/* Degree Filter */}
              <div className="mb-8">
                <label className="text-sm font-bold text-slate-900 mb-3 block">Degree</label>
                <div className="flex flex-col gap-1.5">
                  <Link href={`/projects?${new URLSearchParams({...params, degree: ''}).toString()}`} className={`text-sm py-2 px-3 rounded-xl transition-all font-semibold ${!degreeParam ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
                    All Degrees
                  </Link>
                  <Link href={`/projects?${new URLSearchParams({...params, degree: 'B.Tech'}).toString()}`} className={`text-sm py-2 px-3 rounded-xl transition-all font-semibold ${degreeParam === 'B.Tech' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
                    B.Tech
                  </Link>
                  <Link href={`/projects?${new URLSearchParams({...params, degree: 'M.Tech'}).toString()}`} className={`text-sm py-2 px-3 rounded-xl transition-all font-semibold ${degreeParam === 'M.Tech' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
                    M.Tech
                  </Link>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-2">
                <label className="text-sm font-bold text-slate-900 mb-3 block">Category</label>
                <div className="flex flex-col gap-1.5">
                  <Link href={`/projects?${new URLSearchParams({...params, category: ''}).toString()}`} className={`text-sm py-2 px-3 rounded-xl transition-all font-semibold ${!categoryParam ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
                    All Categories
                  </Link>
                  {categories.map(cat => (
                    <Link key={cat.id} href={`/projects?${new URLSearchParams({...params, category: cat.slug}).toString()}`} className={`text-sm py-2 px-3 rounded-xl transition-all font-semibold ${categoryParam === cat.slug ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Grid */}
          <main className="flex-1">
            {/* Active Filters Display */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="text-sm text-slate-500">Showing {projects.length} results</span>
              {(degreeParam || categoryParam || searchParam) && (
                <Link href="/projects" className="ml-auto text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Clear All Filters
                </Link>
              )}
            </div>

            {projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {projects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No projects found</h3>
                <p className="text-slate-500 max-w-md">
                  We couldn't find any projects matching your current filters. Try adjusting your search or clearing filters.
                </p>
                <Link href="/projects" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Clear Filters
                </Link>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
