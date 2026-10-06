import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 group-hover:opacity-90 transition-opacity">
                CHARMS <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Tech Labs</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link href="/" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all">Home</Link>
              <Link href="/training" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all">Training</Link>
              
              <div className="relative group">
                <Link href="/projects" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all flex items-center gap-1">
                  Projects
                </Link>
              </div>
              
              <Link href="/internships" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all">Internships</Link>
              <Link href="/about" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all">About</Link>
              <Link href="/contact" className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all">Contact</Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/projects" className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5">
              Explore Projects
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-700 hover:text-blue-600 focus:outline-none p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
