import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import {
  AlertTriangle,
  Package,
  Warehouse,
  Clock3,
  CheckCircle2,
  Bell,
} from 'lucide-react';

export default function DashboardEmploye() {
  const selectedLocation = 'Brazil';

  const kpis = [
    {
      title: 'Alertes à traiter',
      value: '2',
      sub: 'Entrepôt 1 & Sud',
      variant: 'danger',
      icon: Bell,
    },
    {
      title: 'Lots enregistrés (7 j)',
      value: '14',
      sub: '2 aujourd’hui',
      variant: 'default',
      icon: Package,
    },
    {
      title: 'Mes entrepôts',
      value: '3',
      sub: 'Sud · 1 · 3',
      variant: 'accent',
      icon: Warehouse,
    },
    {
      title: 'Proches péremption',
      value: '1',
      sub: 'LOT-BR-2025-014',
      variant: 'warning',
      icon: Clock3,
    },
  ];

  const alerts = [
    {
      title: 'LOT-BR-2025-014 périmé — 399 jours',
      meta: 'Entrepôt Sud · depuis le 18 juin',
      type: 'danger',
    },
    {
      title: 'Conditions hors plage — 36,0 °C / 42,6 %',
      meta: 'Entrepôt 1 · déclenchée à 11:30',
      type: 'warning',
    },
  ];

  const recentLots = [
    {
      ref: 'LOT-BR-FRONT-01',
      warehouse: 'Entrepôt Sud',
      date: '22 juin',
      days: '0',
      status: 'Conforme',
      statusType: 'ok',
    },
    {
      ref: 'LOT-BR-2026-088',
      warehouse: 'Entrepôt 1',
      date: '21 juin',
      days: '1',
      status: 'Conforme',
      statusType: 'ok',
    },
    {
      ref: 'LOT-BR-2025-014',
      warehouse: 'Entrepôt Sud',
      date: '18 mai 2025',
      days: '399',
      status: 'Périmé',
      statusType: 'danger',
    },
  ];

  const getKpiClasses = (variant) => {
    switch (variant) {
      case 'danger':
        return 'border-rose-200 bg-rose-50/70';
      case 'warning':
        return 'border-amber-200 bg-amber-50/70';
      case 'accent':
        return 'border-emerald-200 bg-emerald-50/60';
      default:
        return 'border-slate-200 bg-white';
    }
  };

  const getBadgeClasses = (type) => {
    switch (type) {
      case 'danger':
        return 'border-rose-200 bg-rose-50 text-rose-700';
      default:
        return 'border-green-200 bg-green-50 text-green-700';
    }
  };

  return (
    <DashboardLayout selectedLocation={selectedLocation} setSelectedLocation={() => {}}>
      <div className="space-y-8">
        {/* Header */}
        <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Bonjour João</h1>
            <p className="mt-2 text-slate-500">
              Voici ce qui demande votre attention aujourd’hui.
            </p>
          </div>

          <button className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
            + Enregistrer un lot
          </button>
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

        {/* Alertes */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-900">Alertes à traiter</h2>
          </div>

          <div className="divide-y divide-slate-100">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full border ${
                      alert.type === 'danger'
                        ? 'border-rose-200 bg-rose-50 text-rose-700'
                        : 'border-amber-200 bg-amber-50 text-amber-700'
                    }`}
                  >
                    <AlertTriangle className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-medium text-slate-900">{alert.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{alert.meta}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    Acquitter
                  </button>
                  <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
                    Résoudre
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Derniers lots */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-slate-900">Mes derniers lots</h2>
            <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Voir tous
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Référence</th>
                  <th className="px-6 py-4 font-medium">Entrepôt</th>
                  <th className="px-6 py-4 font-medium">Stocké le</th>
                  <th className="px-6 py-4 font-medium">Jours</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentLots.map((lot) => (
                  <tr key={lot.ref} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-800">{lot.ref}</td>
                    <td className="px-6 py-4 text-slate-600">{lot.warehouse}</td>
                    <td className="px-6 py-4 text-slate-600">{lot.date}</td>
                    <td className="px-6 py-4 text-slate-600">{lot.days}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getBadgeClasses(
                          lot.statusType
                        )}`}
                      >
                        {lot.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}