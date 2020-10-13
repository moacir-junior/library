import React, { useState, useEffect } from 'react'
import NavBar from '../components/navBar'
import BooksTable from '../components/tables/booksTable'
import PageWrapper from '../pages/pageWrapper'
import BookService from '../services/books'
import AuthorService from '../services/authors'
import StorageService from '../services/storages'
import DetailsBook from '../components/details/book'
import AddBook from '../components/forms/book/add'
import UpdateBook from '../components/forms/book/update'

export default function Books() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [storages, setStorages] = useState([])
  const [selectBook, setSelectBook] = useState(null)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState(false)

  const readAuthors = () => {
    AuthorService.readAuthors()
      .then(authors => setAuthors(authors))
      .catch(console.log)
  }

  const readStorages = () => {
    StorageService.readStorages()
      .then(storages => setStorages(storages))
      .catch(console.log)
  }

  const readBooks = () => {
    BookService.readBooks()
      .then(books => setBooks(books))
      .catch(console.log)
  }

  useEffect(() => {
    readAuthors()
    readStorages()
    readBooks()
  }, [])

  const handleAddBook = book => {
    BookService.createBook(book)
      .then(() => setBooks([...books, book]))
      .catch(console.log)
  }

  const handleUpdateBook = book => {
    BookService.updateBook(book.id, book)
    .then(() => readBooks())
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
      <AddBook authors={authors} storages={storages} handleAddBook={handleAddBook} />
      <BooksTable books={books} handleRemoveBook={handleRemoveBook} setSelectBook={setSelectBook} setDetailsOpen={setDetailsOpen} />
      <DetailsBook book={selectBook} open={detailsOpen} setOpen={setDetailsOpen} setUpdateOpen={setUpdateOpen} />
      <UpdateBook book={selectBook} authors={authors} storages={storages} handleUpdateBook={handleUpdateBook} open={updateOpen} setOpen={setUpdateOpen}/>
    </PageWrapper>
  )
}