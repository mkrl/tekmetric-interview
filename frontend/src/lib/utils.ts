import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { OpenLibraryDoc } from '@/api.ts'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

// Because OpenLibrary docs do not have unique IDs, we create a key
// based on available fields
export const getBookKey = (book: OpenLibraryDoc) => {
  if (book.isbn) {
    return `${book.title}-${book.isbn[0]}-${book.first_publish_year}`
  }
  if (book.ia) {
    return `${book.title}-${book.ia[0]}-${book.first_publish_year}`
  }
  return `${book.title}-${book.first_publish_year}`
}
