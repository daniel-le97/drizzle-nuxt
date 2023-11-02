import { router } from '../trpc'
import { insertBook, deleteBook, getBooks } from './books'
import { insertAuthor, deleteAuthor, getAuthors } from './authors'

export const appRouter = router({
    insertBook,
    deleteBook,
    getBooks,
    insertAuthor,
    deleteAuthor,
    getAuthors
})

// export type definition of API
export type AppRouter = typeof appRouter