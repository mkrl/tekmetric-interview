import { getReactBooks } from '@/api.ts'
import { useQuery } from '@tanstack/react-query'
import { Book } from '@/components/book.tsx'
import { getBookKey } from '@/lib/utils.ts'
import { Grid } from '@/components/layout/grid.tsx'

export const BookList = () => {
  const query = useQuery({ queryKey: ['books'], queryFn: getReactBooks })

  if (query.isPending) {
    return <div>Loading...</div>
  }

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