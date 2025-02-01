import React from 'react';
import { filieres } from '../types';

interface NavigationProps {
  selectedFiliere: string;
  onFiliereChange: (filiereId: string) => void;
}

export function Navigation({ selectedFiliere, onFiliereChange }: NavigationProps) {
  return (
    <nav className="bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {filieres.map((filiere) => (
            <button
              key={filiere.id}
              onClick={() => onFiliereChange(filiere.id)}
              className={`py-4 px-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
                ${
                  selectedFiliere === filiere.id
                    ? `border-${filiere.color}-600 text-${filiere.color}-600`
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              {filiere.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}