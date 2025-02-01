export type Filiere = {
  id: string;
  name: string;
  color: string;
  semesters: number;
};

export type Module = {
  id: string;
  name: string;
  code: string;
  filiereId: string;
  semester: number;
  youtubeUrl: string;
  driveUrl: string;
};

export const filieres: Filiere[] = [
  { id: 'gein', name: 'GEIN', color: 'blue', semesters: 5 },
  { id: 'india', name: 'INDIA', color: 'purple', semesters: 5 },
  { id: 'imq', name: 'IMQ', color: 'green', semesters: 5 },
  { id: 'gbm', name: 'GBM', color: 'red', semesters: 5 },
  { id: 'gm', name: 'GM', color: 'orange', semesters: 5 },
  { id: 'iaa', name: 'IAA', color: 'pink', semesters: 5 },
  { id: 'isee', name: 'ISEE', color: 'yellow', semesters: 5 },
  { id: 'api', name: 'API', color: 'teal', semesters: 4 },
];

// Sample modules for GEIN (Add more for other filières)
export const modules: Module[] = [
  // GEIN Semester 1
  {
    id: 'gein-s1-1',
    name: 'Programmation Orientée Objet Java',
    code: 'GEIN101',
    filiereId: 'gein',
    semester: 1,
    youtubeUrl: 'https://youtube.com/playlist?list=your-playlist-id',
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id'
  },
  {
    id: 'gein-s1-2',
    name: 'Structures de Données Avancées',
    code: 'GEIN102',
    filiereId: 'gein',
    semester: 1,
    youtubeUrl: 'https://youtube.com/playlist?list=your-playlist-id',
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id'
  },
  {
    id: 'gein-s1-3',
    name: 'Architecture des Ordinateurs',
    code: 'GEIN103',
    filiereId: 'gein',
    semester: 1,
    youtubeUrl: 'https://youtube.com/playlist?list=your-playlist-id',
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id'
  },
  
  // GEIN Semester 2
  {
    id: 'gein-s2-1',
    name: 'Bases de Données Avancées',
    code: 'GEIN201',
    filiereId: 'gein',
    semester: 2,
    youtubeUrl: 'https://youtube.com/playlist?list=your-playlist-id',
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id'
  },
  {
    id: 'gein-s2-2',
    name: 'Développement Web',
    code: 'GEIN202',
    filiereId: 'gein',
    semester: 2,
    youtubeUrl: 'https://youtube.com/playlist?list=your-playlist-id',
    driveUrl: 'https://drive.google.com/drive/folders/your-folder-id'
  },
  
  // Add more modules for other semesters and filières...
];
