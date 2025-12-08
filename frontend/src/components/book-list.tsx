import { getReactBooks } from '@/api.ts'
import { useQuery } from '@tanstack/react-query'
import { Book } from '@/components/book.tsx'

export const BookList = () => {
  const query = useQuery({ queryKey: ['books'], queryFn: getReactBooks })

  if (query.isPending) {
    return <div>Loading...</div>
  }

  return <div>{query.data.docs.map(book => (
    <Book
      key={`${book.cover_i}-${book.first_publish_year}`}
      {...book}
    />
  ))}</div>
}