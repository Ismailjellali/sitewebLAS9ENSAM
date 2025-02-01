import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ModuleCard } from './components/ModuleCard';
import { SemesterTabs } from './components/SemesterTabs';
import { filieres, modules } from './types';

function App() {
  const [selectedFiliere, setSelectedFiliere] = useState(filieres[0].id);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const currentFiliere = filieres.find((f) => f.id === selectedFiliere)!;

  const filteredModules = modules.filter((module) => {
    const matchesSearch = module.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         module.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFiliere = module.filiereId === selectedFiliere;
    const matchesSemester = module.semester === selectedSemester;
    
    return matchesSearch && matchesFiliere && matchesSemester;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={setSearchQuery} />
      <Navigation
        selectedFiliere={selectedFiliere}
        onFiliereChange={setSelectedFiliere}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {currentFiliere.name} Modules
          </h2>
          <p className="text-gray-600">
            Explore the comprehensive curriculum for {currentFiliere.name} at ENSAM RABAT
          </p>
        </div>

        <SemesterTabs
          totalSemesters={currentFiliere.semesters}
          selectedSemester={selectedSemester}
          onSemesterChange={setSelectedSemester}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
          {filteredModules.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No modules found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
