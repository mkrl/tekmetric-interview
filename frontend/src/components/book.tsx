import type { OpenLibraryDoc } from '@/api.ts'
import {
  Card
} from '@/components/ui/card.tsx'
import { BookImage } from '@/components/book-image.tsx'


export const Book =
  ({
     title, first_publish_year, author_name, isbn, ia
   }: OpenLibraryDoc) => {
    return (
      <Card>
        <div
          className="text-center flex flex-row items-start h-full">
          <BookImage isbn={isbn} ia={ia}/>
          <div
            className="flex flex-col py-6 w-full h-full overflow-x-auto">
            <h1
              className="scroll-m-20 px-2 border-b pb-4 mb-2 text-2xl font-semibold tracking-tight">
              {title}
            </h1>
            <div className="flex flex-col justify-between h-full">
              <div>
                {author_name && author_name.length > 0 ? (
                  <>
                    {author_name.slice(0, 2).map((author, i) => (
                      <p key={i} className="truncate p-1">
                        {author}
                      </p>
                    ))}
                    {author_name.length > 2 && (
                      <p
                        className="truncate p-1">+ {author_name.length - 2} more
                        author{author_name.length - 2 > 1 ? 's' : ''}</p>
                    )}
                  </>
                ) : (
                  <p className="truncate p-1">Unknown Author</p>
                )}
              </div>
              {first_publish_year}
            </div>
          </div>
        </div>
      </Card>
    )
  }