import React, {useState, useEffect} from 'react'
import NavBar from '../components/navBar'
import BooksTable from '../components/tables/booksTable'
import FormNewBook from '../components/forms/formNewBook'
import PageWrapper from '../pages/pageWrapper'
import BookService from '../services/books'
import AuthorService from '../services/authors'
import StorageService from '../services/storages'
import Details from '../components/details/book'

export default function Books() {
    const [books, setBooks] = useState([])
    const [authors, setAuthors] = useState([])
    const [storages, setStorages] = useState([])
    const [selectBook, setSelectBook] = useState(null)
    const [detailsOpen, setDetailsOpen] = useState(false)

    useEffect(() => {
        AuthorService.readAuthors()
        .then(authors => setAuthors(authors))
        .catch(console.log)

        StorageService.readStorages()
        .then(storages => setStorages(storages))
        .catch(console.log)
        
        BookService.readBooks()
        .then(books => setBooks(books))
        .catch(console.log)       
    }, [])

    const handleAddBook = book => {
        BookService.createBook(book)
        .then(() => setBooks([...books, book]))
        .catch(console.log)
    }

    const handleRemoveBook = bookId => {
        BookService.deleteBook(bookId)
        .then(() => setBooks(books.filter(book => book.id !== bookId)))
        .then(console.log)
    }

    return (
        <PageWrapper >
            <NavBar />
            <FormNewBook authors={authors} storages={storages} handleAddBook={handleAddBook} />
            <BooksTable books={books} handleRemoveBook={handleRemoveBook} setSelectBook={setSelectBook} setDetailsOpen={setDetailsOpen} />
            <Details book={selectBook} open={detailsOpen} setOpen={setDetailsOpen} />
        </PageWrapper>
    )
}