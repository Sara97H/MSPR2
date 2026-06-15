import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function DashboardLayout({ children, selectedLocation, setSelectedLocation }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      
      <div className="lg:ml-64 flex flex-col min-h-screen">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />
        
        <main className="flex-1 p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}