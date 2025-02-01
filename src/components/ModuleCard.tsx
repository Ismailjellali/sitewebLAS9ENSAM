import { BookOpen, Video } from 'lucide-react';
import React from 'react';
import type { Module } from '../types';

interface ModuleCardProps {
  module: Module;
}

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{module.name}</h3>
        <span className="text-sm text-gray-500">{module.code}</span>
      </div>
      
      <div className="space-y-3">
        <a
          href={module.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
        >
          <Video className="w-4 h-4 mr-2" />
          Watch Course Videos
        </a>
        
        <a
          href={module.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Download Documentation
        </a>
      </div>
    </div>
  );
}