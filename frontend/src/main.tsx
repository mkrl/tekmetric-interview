/// <reference types="react/canary" />
// ^ I really wanted to play with View Transitions
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BookList } from '@/components/book-list.tsx'
import { LayoutPrimary } from '@/components/layout/layout-primary.tsx'
import { BookLoader } from '@/components/book-loader.tsx'
import { ViewTransition } from 'react';

const queryClient = new QueryClient()

// @TODOL: Add error boundary
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LayoutPrimary title="React Books">
        <ViewTransition>
          <Suspense fallback={<BookLoader/>}>
            <BookList />
          </Suspense>
        </ViewTransition>
      </LayoutPrimary>
    </QueryClientProvider>
  </StrictMode>,
)
