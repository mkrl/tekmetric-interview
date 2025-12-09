import type { OpenLibraryDoc } from '@/api.ts'
import {
  Card
} from '@/components/ui/card.tsx'
import { BookImage } from '@/components/book-image.tsx'


export const Book =
  ({
     title, first_publish_year, author_name, cover_i, isbn, ia
   }: OpenLibraryDoc) => {
  return (
    <Card>
      <div className="flex flex-row items-start">
        <BookImage isbn={isbn} ia={ia}/>
        <div id={'content'}
             className="flex flex-col py-6 w-full h-full overflow-x-auto">
          <h1
            className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
            {title}
          </h1>
          <h3 className="truncate p-4">
            {author_name?.join(', ') || 'Unknown Author'}
          </h3>
          {first_publish_year}
        </div>
      </div>
    </Card>
  )
}