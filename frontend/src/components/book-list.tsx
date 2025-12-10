import { getReactBooks } from '@/api.ts'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Book } from '@/components/book.tsx'
import { getBookKey } from '@/lib/utils.ts'
import { Grid } from '@/components/layout/grid.tsx'

export const BOOKS_PER_PAGE = 9

export const BookList = () => {
  const query = useSuspenseQuery({ queryKey: ['books'], queryFn: () => getReactBooks(BOOKS_PER_PAGE) })

  return (
    <Grid>
      {query.data.docs.map(book => (
        <Book
          key={getBookKey(book)}
          {...book}
        />
      ))}
    </Grid>
  )
}