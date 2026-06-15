import React from 'react';
import { Coffee, MapPin, LayoutDashboard, Globe, Settings, Menu } from 'lucide-react';

const locations = [
  { id: 'all', name: 'Vue Globale', icon: Globe },
  { id: 'Brazil', name: 'Brésil', icon: MapPin },
  { id: 'Ecuador', name: 'Équateur', icon: MapPin },
  { id: 'Colombia', name: 'Colombie', icon: MapPin },
];

export default function Sidebar({ isOpen, setIsOpen, selectedLocation, setSelectedLocation }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 border-r border-slate-800 transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        
        {/* Branding */}
        <div className="flex items-center gap-3 px-6 h-16 border-b border-slate-800">
          <div className="bg-emerald-500/20 p-2 rounded-lg border border-emerald-500/30">
            <Coffee className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="text-xl font-bold text-slate-100">
            FutureKawa
          </span>
        </div>

        {/* Menu */}
        <div className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="mb-4 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Menu Principal
          </div>
          <nav className="space-y-1 mb-8">
            <button
              onClick={() => setSelectedLocation('all')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                selectedLocation === 'all'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-medium text-sm">Dashboard</span>
            </button>
          </nav>

          <div className="mb-4 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Entrepôts & Origines
          </div>
          <nav className="space-y-1">
            {locations.filter(l => l.id !== 'all').map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  selectedLocation === loc.id
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <loc.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{loc.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer Sidebar */}
        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium text-sm">Configuration</span>
          </button>
        </div>
      </aside>
    </>
  );
}