import React, { useState } from 'react'
import type { OpenLibraryDoc } from '@/api.ts'
import { BookIcon } from '@/components/ui/icons/akar-icons-book.tsx'

export const BookImage = ({ isbn, ia }: Partial<OpenLibraryDoc>) => {
  const [loaded, setLoaded] = useState(false)

  let imageUrl = null
  if (isbn) {
    imageUrl = `https://covers.openlibrary.org/b/isbn/${isbn[0]}-M.jpg`
  }
  if (ia) {
    imageUrl = `https://covers.openlibrary.org/b/ia/${ia[0]}-M.jpg`
  }
  // Even if we have an imageUrl, the image returned might
  // be a 1x1 pixel placeholder,
  // so the BookIcon is still shown underneath as a fallback
  return (
    <div className='h-[257px] w-[180px] bg-gray-200 rounded-l-lg overflow-hidden relative flex-shrink-0'>
      <BookIcon className={`${loaded ? '' : 'animate-pulse'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-gray-400`} size={64} />
      {imageUrl ? (
        <img
          src={imageUrl}
          alt='Book cover'
          loading='lazy'
          onLoad={() => {
            setLoaded(true)
          }}
          onError={() => setLoaded(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out z-20 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : null}
    </div>
  )
}