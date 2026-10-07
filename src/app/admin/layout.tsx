import Link from 'next/link';
import { LayoutDashboard, Users, FileText, Settings, BookOpen, GraduationCap } from 'lucide-react';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950">
          <span className="text-xl font-bold text-white tracking-tight">CHARMS <span className="text-blue-500">Admin</span></span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white bg-blue-600 font-medium">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <div className="pt-4 pb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Leads</div>
          <Link href="/admin/requests" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <FileText className="w-5 h-5" /> Project Requests
          </Link>
          <Link href="/admin/registrations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <Users className="w-5 h-5" /> Registrations
          </Link>

          <div className="pt-4 pb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Management</div>
          <Link href="/admin/projects" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <BookOpen className="w-5 h-5" /> Projects
          </Link>
          <Link href="/admin/courses" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <GraduationCap className="w-5 h-5" /> Courses
          </Link>
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <h2 className="text-xl font-bold text-slate-800">Admin Portal</h2>
          <div className="flex items-center gap-4">
            <div className="flex flex-col text-right">
              <span className="text-sm font-bold text-slate-800">{session.user?.name}</span>
              <span className="text-xs text-slate-500">{session.user?.email}</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-violet-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm shadow-sm border border-blue-200">
              {session.user?.name?.substring(0, 2).toUpperCase() || 'AD'}
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-auto p-8 bg-slate-50/50">
          {children}
        </div>
      </main>
    </div>
  );
}
