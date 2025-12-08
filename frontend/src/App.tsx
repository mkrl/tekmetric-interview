
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BookList } from '@/components/book-list.tsx'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <BookList />
      </main>
    </QueryClientProvider>
  )
}

export default App
