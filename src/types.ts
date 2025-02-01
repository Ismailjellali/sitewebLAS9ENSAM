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