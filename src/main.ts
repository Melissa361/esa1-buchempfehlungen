import './style.css';
import {
  books,
  type Book,
  type ReadingStatus,
  type Series,
} from './books';

type SeriesFilter = Series | 'alle';
type StatusFilter = ReadingStatus | 'alle';

interface AppElements {
  form: HTMLFormElement;
  searchInput: HTMLInputElement;
  seriesSelect: HTMLSelectElement;
  statusSelect: HTMLSelectElement;
  bookList: HTMLElement;
  resultCount: HTMLParagraphElement;
  emptyState: HTMLParagraphElement;
  randomButton: HTMLButtonElement;
  randomResult: HTMLParagraphElement;
}

function normalizeText(value: string): string {
  return value.trim().toLocaleLowerCase('de');
}

function filterBooks(
  collection: Book[],
  query: string,
  series: SeriesFilter,
  status: StatusFilter,
): Book[] {
  const normalizedQuery = normalizeText(query);

  return collection.filter((book: Book): boolean => {
    const searchableText = normalizeText(
      `${book.title} ${book.author} ${book.series} ${book.tags.join(' ')}`,
    );
    const matchesSearch = searchableText.includes(normalizedQuery);
    const matchesSeries = series === 'alle' || book.series === series;
    const matchesStatus = status === 'alle' || book.status === status;

    return matchesSearch && matchesSeries && matchesStatus;
  });
}

function getStatusClass(status: ReadingStatus): string {
  const statusClasses: Record<ReadingStatus, string> = {
    Gelesen: 'status-read',
    'Lese ich gerade': 'status-current',
    'Will ich lesen': 'status-next',
    'Warte auf Erscheinung': 'status-waiting',
  };

  return statusClasses[status];
}

function createBookCard(book: Book): HTMLElement {
  const article = document.createElement('article');
  const headingId = `book-${book.id}`;
  article.className = 'book-card';
  article.setAttribute('aria-labelledby', headingId);

  const cover = document.createElement('figure');
  cover.className = 'book-cover';
  cover.style.setProperty('--cover-start', book.coverStart);
  cover.style.setProperty('--cover-end', book.coverEnd);
  cover.style.setProperty('--cover-accent', book.coverAccent);

  const coverMark = document.createElement('span');
  coverMark.className = 'cover-mark';
  coverMark.setAttribute('aria-hidden', 'true');
  coverMark.textContent = book.marker;

  const coverLabel = document.createElement('p');
  coverLabel.className = 'cover-label';
  coverLabel.setAttribute('aria-hidden', 'true');
  coverLabel.textContent = book.title;

  const caption = document.createElement('figcaption');
  caption.className = 'visually-hidden';
  caption.textContent = `Typografische Coverdarstellung von ${book.title}`;
  cover.append(coverMark, coverLabel, caption);

  const details = document.createElement('section');
  details.className = 'book-details';
  details.setAttribute('aria-label', 'Buchdetails');

  const meta = document.createElement('p');
  meta.className = 'book-meta';
  meta.textContent = `${book.series} · ${book.volume}`;

  const title = document.createElement('h3');
  title.id = headingId;
  title.textContent = book.title;

  const author = document.createElement('p');
  author.className = 'book-author';
  author.textContent = `von ${book.author}`;

  const status = document.createElement('p');
  status.className = `status-badge ${getStatusClass(book.status)}`;
  status.textContent = book.status;

  const description = document.createElement('p');
  description.className = 'book-description';
  description.textContent = book.description;

  const tagList = document.createElement('ul');
  tagList.className = 'book-tags';
  tagList.setAttribute('aria-label', 'Schlagwörter');
  const tags = book.tags.map((tag: string): HTMLLIElement => {
    const listItem = document.createElement('li');
    listItem.textContent = tag;
    return listItem;
  });
  tagList.append(...tags);

  details.append(meta, title, author, status, description, tagList);
  article.append(cover, details);

  return article;
}

function renderBooks(elements: AppElements, visibleBooks: Book[]): void {
  const cards = visibleBooks.map(createBookCard);
  elements.bookList.replaceChildren(...cards);

  const count = visibleBooks.length;
  const readCount = visibleBooks.filter((book: Book): boolean => book.status === 'Gelesen').length;
  elements.resultCount.textContent =
    count === 1
      ? `1 Buch angezeigt · ${readCount} gelesen`
      : `${count} Bücher angezeigt · ${readCount} gelesen`;
  elements.emptyState.hidden = count > 0;
}

function getSelectedSeries(select: HTMLSelectElement): SeriesFilter {
  const value = select.value;
  const validSeries: SeriesFilter[] = [
    'alle',
    'Throne of Glass',
    'ACOTAR',
    'Crescent City',
    'Empyrean',
    'Off-Campus',
    'Fae & Alchemy',
    'Einzelband',
  ];

  return validSeries.includes(value as SeriesFilter) ? (value as SeriesFilter) : 'alle';
}

function getSelectedStatus(select: HTMLSelectElement): StatusFilter {
  const value = select.value;
  const validStatuses: StatusFilter[] = [
    'alle',
    'Gelesen',
    'Lese ich gerade',
    'Will ich lesen',
    'Warte auf Erscheinung',
  ];

  return validStatuses.includes(value as StatusFilter) ? (value as StatusFilter) : 'alle';
}

function getVisibleBooks(elements: AppElements): Book[] {
  return filterBooks(
    books,
    elements.searchInput.value,
    getSelectedSeries(elements.seriesSelect),
    getSelectedStatus(elements.statusSelect),
  );
}

function applyFilters(elements: AppElements): void {
  renderBooks(elements, getVisibleBooks(elements));
}

function selectRandomBook(collection: Book[]): Book {
  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex] ?? books[0];
}

function showRandomRecommendation(elements: AppElements): void {
  const filteredBooks = getVisibleBooks(elements);
  const availableBooks = filteredBooks.length > 0 ? filteredBooks : books;
  const recommendation = selectRandomBook(availableBooks);

  elements.randomResult.textContent = `Dein Tipp: „${recommendation.title}“ von ${recommendation.author} · ${recommendation.status}.`;
  elements.randomResult.tabIndex = -1;
  elements.randomResult.focus();
}

function getAppElements(): AppElements | null {
  const form = document.querySelector<HTMLFormElement>('#filter-form');
  const searchInput = document.querySelector<HTMLInputElement>('#search');
  const seriesSelect = document.querySelector<HTMLSelectElement>('#series');
  const statusSelect = document.querySelector<HTMLSelectElement>('#status');
  const bookList = document.querySelector<HTMLElement>('#book-list');
  const resultCount = document.querySelector<HTMLParagraphElement>('#result-count');
  const emptyState = document.querySelector<HTMLParagraphElement>('#empty-state');
  const randomButton = document.querySelector<HTMLButtonElement>('#random-book');
  const randomResult = document.querySelector<HTMLParagraphElement>('#random-result');

  if (
    !form ||
    !searchInput ||
    !seriesSelect ||
    !statusSelect ||
    !bookList ||
    !resultCount ||
    !emptyState ||
    !randomButton ||
    !randomResult
  ) {
    return null;
  }

  return {
    form,
    searchInput,
    seriesSelect,
    statusSelect,
    bookList,
    resultCount,
    emptyState,
    randomButton,
    randomResult,
  };
}

function initializeApp(): void {
  const elements = getAppElements();

  if (!elements) {
    console.error('Die benötigten Seitenelemente wurden nicht gefunden.');
    return;
  }

  renderBooks(elements, books);

  elements.searchInput.addEventListener('input', (): void => applyFilters(elements));
  elements.seriesSelect.addEventListener('change', (): void => applyFilters(elements));
  elements.statusSelect.addEventListener('change', (): void => applyFilters(elements));
  elements.form.addEventListener('reset', (): void => {
    window.setTimeout((): void => applyFilters(elements), 0);
  });
  elements.randomButton.addEventListener('click', (): void => {
    showRandomRecommendation(elements);
  });
}

document.addEventListener('DOMContentLoaded', initializeApp);
