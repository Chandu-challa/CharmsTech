"use client";
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: '/' })}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-red-400 transition-colors text-slate-300"
    >
      <LogOut className="w-5 h-5" /> Logout
    </button>
  );
}
