import React from 'react';
import {
  LayoutDashboard,
  Globe,
  Boxes,
  TriangleAlert,
  Activity,
  Users,
  ShieldCheck,
  FileSearch,
  Settings,
  Coffee,
} from 'lucide-react';

const mainLinks = [
  { label: 'Tableau de bord', icon: LayoutDashboard, active: true },
  { label: 'Pays', icon: Globe },
  { label: 'Stocks & lots', icon: Boxes },
  { label: 'Alertes', icon: TriangleAlert },
  { label: 'Mesures', icon: Activity },
];

const adminLinks = [
  { label: 'Utilisateurs', icon: Users },
  { label: 'Rôles & permissions', icon: ShieldCheck },
  { label: 'Audit', icon: FileSearch },
  { label: 'Paramètres', icon: Settings },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-slate-200 transition-transform duration-300 flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      {/* Header / brand */}
      <div className="flex items-center gap-3 px-6 h-20 border-b border-slate-200">
        <div className="bg-emerald-500/15 p-2.5 rounded-xl border border-emerald-200">
          <Coffee className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <p className="text-xl font-bold text-slate-900">FutureKawa</p>
          <p className="text-xs text-slate-400">Console d’administration</p>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 overflow-y-auto">
        {/* Principal */}
        <div className="mb-4 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Navigation
        </div>

        <nav className="space-y-1 mb-8">
          {mainLinks.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${
                  item.active
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Administration */}
        <div className="mb-4 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Administration
        </div>

        <nav className="space-y-1">
          {adminLinks.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200">
        <div className="px-3 py-2 text-sm text-slate-400">
          v1.0 · Siège
        </div>
      </div>
    </aside>
  );
}