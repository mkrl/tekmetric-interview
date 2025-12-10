import {
  Card
} from '@/components/ui/card.tsx'
import { Grid } from '@/components/layout/grid.tsx'
import { BOOKS_PER_PAGE } from '@/components/book-list.tsx'


export const BookLoader =
  () => {
    return (
      <Grid>
        {Array.from({ length: BOOKS_PER_PAGE }).map((_, index) => (
          <Card key={index} className="animate-pulse bg-gray-200 h-full w-full sm:h-[257px] md:h-[257px]"/>
        ))}
      </Grid>
    )
  }