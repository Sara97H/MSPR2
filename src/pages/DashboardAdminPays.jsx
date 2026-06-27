import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import {
  MapPin,
  Warehouse,
  AlertTriangle,
  Thermometer,
  Activity,
  CheckCircle2,
} from 'lucide-react';

export default function DashboardAdminPays() {
  const selectedLocation = 'Ecuador';

  const kpis = [
    {
      title: 'Lots en stock',
      value: '94',
      sub: '3 fincas actives',
      variant: 'accent',
      icon: Warehouse,
    },
    {
      title: 'Alertes actives',
      value: '0',
      sub: 'Aucune anomalie',
      variant: 'success',
      icon: AlertTriangle,
    },
    {
      title: 'Capteurs actifs',
      value: '6/6',
      sub: 'Tous en ligne',
      variant: 'default',
      icon: Activity,
    },
    {
      title: 'Condition moyenne',
      value: '31.1°C',
      sub: 'cible 31°C / 60%',
      variant: 'accent',
      icon: Thermometer,
    },
  ];

  const warehouses = [
    { name: 'Finca El Oro — A', lots: 38, status: 'Conforme' },
    { name: 'Finca El Oro — B', lots: 21, status: 'Conforme' },
    { name: 'Finca Manabí', lots: 35, status: 'Conforme' },
  ];

  const recentActivity = [
    {
      title: 'Lot LOT-EC-2026-031 enregistré',
      meta: 'Finca Manabí · il y a 2 h',
      type: 'success',
    },
    {
      title: 'Alerte conditions résolue automatiquement (durée 4 min)',
      meta: 'Finca El Oro — A · hier 15:38',
      type: 'success',
    },
  ];

  const getKpiClasses = (variant) => {
    switch (variant) {
      case 'accent':
        return 'border-emerald-200 bg-emerald-50/60';
      case 'success':
        return 'border-green-200 bg-green-50/60';
      default:
        return 'border-slate-200 bg-white';
    }
  };

  return (
    <DashboardLayout selectedLocation={selectedLocation} setSelectedLocation={() => {}}>
      <div className="space-y-8">
        {/* Header */}
        <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Équateur — supervision
            </h1>
            <p className="mt-2 text-slate-500">
              Vos exploitations, entrepôts et conditions de stockage en temps réel.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-700 shadow-sm">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-semibold">Équateur</span>
          </div>
        </section>

        {/* KPI */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`rounded-2xl border p-5 shadow-sm ${getKpiClasses(item.variant)}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{item.title}</p>
                    <p className="mt-3 text-3xl font-bold text-slate-900">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-500">{item.sub}</p>
                  </div>
                  <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-200">
                    <Icon className="h-5 w-5 text-emerald-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Bloc principal */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {/* Conditions */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Conditions — Finca El Oro
              </h2>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 border border-green-200">
                <CheckCircle2 className="h-4 w-4" />
                Conforme
              </span>
            </div>

            <div className="p-6">
              <div className="mb-6 flex flex-wrap gap-6">
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4">
                  <p className="text-sm text-slate-500">Température</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">31.0°C</p>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4">
                  <p className="text-sm text-slate-500">Humidité</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">59.8%</p>
                </div>
              </div>

              {/* Faux graphe visuel */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="h-56 w-full overflow-hidden rounded-xl bg-gradient-to-b from-emerald-50 to-white p-4">
                  <svg viewBox="0 0 640 200" className="h-full w-full">
                    <rect x="0" y="74" width="640" height="56" fill="#E7F0DF" />
                    <line x1="0" y1="74" x2="640" y2="74" stroke="#BBD0A8" strokeDasharray="4 4" />
                    <line x1="0" y1="130" x2="640" y2="130" stroke="#BBD0A8" strokeDasharray="4 4" />
                    <path
                      d="M0,108 L90,100 L180,112 L270,98 L360,106 L450,102 L540,110 L640,100"
                      fill="none"
                      stroke="#166534"
                      strokeWidth="3"
                    />
                  </svg>
                </div>

                <div className="mt-3 flex justify-between text-xs text-slate-400">
                  <span>16 juin</span>
                  <span>18 juin</span>
                  <span>20 juin</span>
                  <span>Aujourd’hui</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stock par entrepôt */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Stock par entrepôt
              </h2>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-slate-100">
                    {warehouses.map((item) => (
                      <tr key={item.name}>
                        <td className="py-4 font-medium text-slate-800">{item.name}</td>
                        <td className="py-4 text-slate-600">{item.lots}</td>
                        <td className="py-4 text-right">
                          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Activité récente */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Activité récente
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            {recentActivity.map((item, index) => (
              <div key={index} className="flex items-start gap-4 px-6 py-5">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700 border border-green-200">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}