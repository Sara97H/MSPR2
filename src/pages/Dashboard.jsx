import React, { useState } from 'react';
import { ThermometerSun, Droplets, PackageSearch } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import LotsTable from '../components/LotsTable';
import LotDetails from '../components/LotDetails';

// Fake Data pour l'historique sur 7 jours
const generateHistory = (baseTemp, baseHum) => {
  return Array.from({ length: 7 }).map((_, i) => ({
    date: `J-${6 - i}`,
    temp: baseTemp + (Math.random() * 4 - 2),
    hum: baseHum + (Math.random() * 6 - 3),
  }));
};

const MOCK_LOTS = [
  { 
    id: 'LT-2401', country: 'Brazil', 
    storageDate: '2025-05-10', // Récent (dans le contexte 2026)
    currentTemp: 20.5, currentHum: 55, 
    history: generateHistory(20.5, 55) 
  },
  { 
    id: 'LT-2309', country: 'Colombia', 
    storageDate: '2024-03-12', // > 1 an (Péremption)
    currentTemp: 18.2, currentHum: 62, 
    history: generateHistory(18.2, 62) 
  },
  { 
    id: 'LT-2412', country: 'Ecuador', 
    storageDate: '2026-02-01', 
    currentTemp: 26.0, currentHum: 65, // > 21°C (Alerte qualité pour l'Equateur)
    history: generateHistory(26.0, 65) 
  },
  { 
    id: 'LT-2420', country: 'Brazil', 
    storageDate: '2025-11-20', 
    currentTemp: 15.0, currentHum: 80, // < 18°C et > 60% (Double alerte Qualité)
    history: generateHistory(15.0, 80) 
  },
  { 
    id: 'LT-2201', country: 'Colombia', 
    storageDate: '2023-10-05', // Très vieux (Péremption) + Problème qualité
    currentTemp: 24.0, currentHum: 50, 
    history: generateHistory(24.0, 50) 
  },
];

export default function Dashboard() {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedLot, setSelectedLot] = useState(null);

  // Filtrage
  const filteredLots = selectedLocation === 'all' 
    ? MOCK_LOTS 
    : MOCK_LOTS.filter(l => l.country === selectedLocation);

  const handleSelectLot = (lot) => {
    setSelectedLot(lot);
    // Auto-scroll vers les détails (simulé par un petit scroll visuel)
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  // Calcul des statistiques actuelles
  const avgTemp = filteredLots.length > 0 
    ? (filteredLots.reduce((acc, lot) => acc + lot.currentTemp, 0) / filteredLots.length).toFixed(1)
    : '--';
    
  const avgHum = filteredLots.length > 0
    ? (filteredLots.reduce((acc, lot) => acc + lot.currentHum, 0) / filteredLots.length).toFixed(1)
    : '--';

  return (
    <DashboardLayout selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}>
      
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
          Vue d'ensemble des Stocks
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Supervision des lots de café vert de FutureKawa. Application du principe FIFO (First In, First Out).
        </p>
      </div>

      {/* Cartes de statistiques actuelles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20">
            <ThermometerSun className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-400">Température Moyenne Actuelle</p>
            <p className="text-2xl font-bold text-slate-100">{avgTemp}°C</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
            <Droplets className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-400">Humidité Moyenne Actuelle</p>
            <p className="text-2xl font-bold text-slate-100">{avgHum}%</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
            <PackageSearch className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-400">Total Lots Affichés</p>
            <p className="text-2xl font-bold text-slate-100">{filteredLots.length}</p>
          </div>
        </div>
      </div>

      <LotsTable lots={filteredLots} onSelectLot={handleSelectLot} />
      
      {selectedLot && (
        <LotDetails lot={selectedLot} onClose={() => setSelectedLot(null)} />
      )}

    </DashboardLayout>
  );
}