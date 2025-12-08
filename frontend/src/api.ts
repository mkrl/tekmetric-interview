const API_URL = 'https://openlibrary.org/search.json'
const LIMIT = 42

export interface OpenLibraryDoc {
  author_name: string[];
  first_publish_year: number;
  isbn: string[];
  cover_i: number;
  title: string;
}

export interface OpenLibrarySearchResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found?: number;
  offset?: number | null;
  docs: OpenLibraryDoc[];
}


export const getReactBooks = async (): Promise<OpenLibrarySearchResponse> => {
  const response = await fetch(`${API_URL}?limit=${LIMIT}&q=react&fields=title,author_name,first_publish_year,isbn,cover_i`)
  // const response = await fetch(`${API_URL}?limit=${LIMIT}&q=react`)
  if (!response.ok) {
    throw new Error('Failed to fetch books')
  }
  return response.json()
}