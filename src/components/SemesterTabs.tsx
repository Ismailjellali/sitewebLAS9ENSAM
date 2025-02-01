import React from 'react';

interface SemesterTabsProps {
  totalSemesters: number;
  selectedSemester: number;
  onSemesterChange: (semester: number) => void;
}

export function SemesterTabs({
  totalSemesters,
  selectedSemester,
  onSemesterChange,
}: SemesterTabsProps) {
  return (
    <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
      {Array.from({ length: totalSemesters }, (_, i) => i + 1).map((semester) => (
        <button
          key={semester}
          onClick={() => onSemesterChange(semester)}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors
            ${
              selectedSemester === semester
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          S{semester}
        </button>
      ))}
    </div>
  );
}