import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

export default function Topbar({ setIsSidebarOpen }) {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-30">
      
      <div className="flex items-center gap-4">
        <button 
          className="lg:hidden p-2 -ml-2 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="hidden md:flex items-center px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 w-80 focus-within:border-emerald-500/50 focus-within:ring-1 focus-within:ring-emerald-500/50 transition-all">
          <Search className="w-4 h-4 mr-2" />
          <input 
            type="text" 
            placeholder="Rechercher un lot (ex: LT-2401)..." 
            className="bg-transparent border-none outline-none text-sm w-full text-slate-200 placeholder-slate-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-200 rounded-full hover:bg-slate-800 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>
        
        <div className="w-px h-6 bg-slate-800 hidden sm:block"></div>

        <button className="flex items-center gap-3 hover:bg-slate-800 p-1 rounded-lg transition-colors">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Manager&backgroundColor=0f172a" 
            alt="User" 
            className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800"
          />
          <div className="hidden sm:block text-left mr-2">
            <p className="text-sm font-medium text-slate-200">Sara</p>
            <p className="text-xs text-slate-500">Superviseur Logistique</p>
          </div>
        </button>
      </div>
    </header>
  );
}