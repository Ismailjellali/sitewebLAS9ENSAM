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

export const modules: Module[] = [
  // GEIN Semester 1
  {
    id: 'gein-s1-m111',
    name: 'Systèmes automatisés',
    code: 'M111',
    filiereId: 'gein',
    semester: 1,
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL8K5Y6-aFNbFMafWwNUF9vE0Q1lSUYax1',
    driveUrl: 'https://drive.google.com/drive/folders/1J3zRlaKEnc5GqfdDsLjp6NUE_yGiRvwW?usp=drive_link'
  },
  {
    id: 'gein-s1-m112',
    name: 'Electronique analogique',
    code: 'M112',
    filiereId: 'gein',
    semester: 1,
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL8K5Y6-aFNbGBf5t63FieACDdsCzeRFiC',
    driveUrl: 'https://drive.google.com/drive/folders/1hQ5RIt1EeNrMx95Ve0uRY0K97vWU06xi?usp=drive_link'
  },
  {
    id: 'gein-s1-m113',
    name: 'Technologies des systèmes mécaniques',
    code: 'M113',
    filiereId: 'gein',
    semester: 1,
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL8K5Y6-aFNbFLPsJl_K0BT5ArP8ir4Z1c',
    driveUrl: 'https://drive.google.com/drive/folders/12o8WobY8uY2m8Fm6gga3VsiQlgs35opp?usp=drive_link'
  },
  {
    id: 'gein-s1-m114',
    name: 'Bases de l\'électrotechnique et de l\'électronique de puissance',
    code: 'M114',
    filiereId: 'gein',
    semester: 1,
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL8K5Y6-aFNbHTvvN8Fu1WW0zA9yXnq0HD',
    driveUrl: 'https://drive.google.com/drive/folders/1FRA1Y_Hpz0-ec5TMhbDlriPQSUp_n8RE?usp=drive_link'
  },
  {
    id: 'gein-s1-m115',
    name: 'Mathématiques pour l\'ingénieur',
    code: 'M115',
    filiereId: 'gein',
    semester: 1,
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL8K5Y6-aFNbGG7ezNaoVOrnXH6GyWhXON',
    driveUrl: 'https://drive.google.com/drive/folders/1t0T7Io3XPV5CCnrIjQw-xMXDdFYjG2XN?usp=drive_link'
  },
  {
    id: 'gein-s1-m117',
    name: 'Compétences digitales et informatiques',
    code: 'M117',
    filiereId: 'gein',
    semester: 1,
    youtubeUrl: 'https://www.youtube.com/playlist?list=PL8K5Y6-aFNbG9Yz-b833jWgVn44uLjoyw',
    driveUrl: 'https://drive.google.com/drive/folders/1vR2TRlO35j_DM-CiU7kdF--jQJSJE5dj?usp=drive_link'
  }
];
