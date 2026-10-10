export type Genre = 'Roman' | 'Klassiker' | 'Fantasy' | 'Sachbuch';

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: Genre;
  year: number;
  description: string;
  tags: string[];
  coverColor: string;
  marker: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'Der Gesang der Flusskrebse',
    author: 'Delia Owens',
    genre: 'Roman',
    year: 2018,
    description:
      'Eine atmosphärische Geschichte über Einsamkeit, Natur und den Mut, den eigenen Weg zu gehen.',
    tags: ['Natur', 'Coming-of-Age'],
    coverColor: '#6e3d2e',
    marker: 'DO',
  },
  {
    id: 2,
    title: 'Die Mitternachtsbibliothek',
    author: 'Matt Haig',
    genre: 'Roman',
    year: 2020,
    description:
      'Ein gedankliches Abenteuer über verpasste Chancen, alternative Lebenswege und neue Zuversicht.',
    tags: ['Lebenswege', 'Hoffnung'],
    coverColor: '#314b5c',
    marker: 'MH',
  },
  {
    id: 3,
    title: 'Stolz und Vorurteil',
    author: 'Jane Austen',
    genre: 'Klassiker',
    year: 1813,
    description:
      'Eine kluge und humorvolle Beobachtung von Liebe, Erwartungen und gesellschaftlichen Rollen.',
    tags: ['Gesellschaft', 'Liebe'],
    coverColor: '#6a3a45',
    marker: 'JA',
  },
  {
    id: 4,
    title: 'Der kleine Prinz',
    author: 'Antoine de Saint-Exupéry',
    genre: 'Klassiker',
    year: 1943,
    description:
      'Eine poetische Erzählung, die mit wenigen Worten große Fragen über Freundschaft und Menschlichkeit stellt.',
    tags: ['Philosophisch', 'Freundschaft'],
    coverColor: '#345c50',
    marker: 'AS',
  },
  {
    id: 5,
    title: 'Der Hobbit',
    author: 'J. R. R. Tolkien',
    genre: 'Fantasy',
    year: 1937,
    description:
      'Eine klassische Abenteuerreise voller unerwarteter Begegnungen, Mut und der Freude am Erzählen.',
    tags: ['Abenteuer', 'Reise'],
    coverColor: '#72521e',
    marker: 'JT',
  },
  {
    id: 6,
    title: 'Piranesi',
    author: 'Susanna Clarke',
    genre: 'Fantasy',
    year: 2020,
    description:
      'Ein geheimnisvoller Roman über eine endlose Welt aus Hallen, Statuen, Gezeiten und Erinnerungen.',
    tags: ['Rätselhaft', 'Atmosphärisch'],
    coverColor: '#4d476b',
    marker: 'SC',
  },
  {
    id: 7,
    title: 'Eine kurze Geschichte der Menschheit',
    author: 'Yuval Noah Harari',
    genre: 'Sachbuch',
    year: 2011,
    description:
      'Ein weit gespannter Blick darauf, wie Ideen, Zusammenarbeit und Kultur unsere Geschichte geprägt haben.',
    tags: ['Geschichte', 'Gesellschaft'],
    coverColor: '#694230',
    marker: 'YH',
  },
  {
    id: 8,
    title: 'Unsichtbare Frauen',
    author: 'Caroline Criado Perez',
    genre: 'Sachbuch',
    year: 2019,
    description:
      'Eine datenreiche Analyse darüber, wie fehlende Perspektiven unseren Alltag und unsere Entscheidungen beeinflussen.',
    tags: ['Daten', 'Gleichstellung'],
    coverColor: '#2f5660',
    marker: 'CP',
  },
];
