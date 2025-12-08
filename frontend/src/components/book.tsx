import type { OpenLibraryDoc } from '@/api.ts'
import { Card } from '@/components/ui/card.tsx'


export const Book = ({ title, first_publish_year, author_name, cover_i, isbn }: OpenLibraryDoc) => {
  return (
    <Card>
      {title} by {author_name?.join(', ')}
    </Card>
  )
}