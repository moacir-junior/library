import React, { useState, useEffect } from 'react'
import NavBar from '../components/navBar'
import Options from '../components/options'
import BooksTable from '../components/tables/booksTable'
import PageWrapper from '../pages/pageWrapper'
import BookService from '../services/books'
import AuthorService from '../services/authors'
import StorageService from '../services/storages'
import DetailsBook from '../components/details/book'
import AddBook from '../components/forms/book/add'
import UpdateBook from '../components/forms/book/update'
import FilterBook from '../components/forms/book/filter'
import PaginationControl from '../components/paginationControl'

export default function Books() {
  const [filter, setFilter] = useState({
    authorId: '',
    storageId: '',
  })
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [storages, setStorages] = useState([])
  const [selectBook, setSelectBook] = useState(null)
  const [filterOpen, setFilterOpen] = useState(false)
  const [addOpen, setAddOpen] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState(false)
  const [pageBooks, setPageBooks] = useState(0)
  const [pagesizeBooks, setPagesizeBooks] = useState(10)

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
    BookService.readBooks(filter.authorId, filter.storageId, pageBooks, pagesizeBooks)
      .then(books => setBooks(books))
      .catch(console.log)
  }

  const addBook = book => {
    BookService.createBook(book)
      .then(res => {
        const currentBook = {
          ...res,
          author: book.author,
          storage: book.storage,
        }
        setBooks([...books, currentBook])
      })
      .catch(console.log)
  }

  const updateBook = book => {
    BookService.updateBook(book.id, book)
    .then(() => readBooks())
    .catch(console.log)
  }

  const removeBook = bookId => {
    BookService.deleteBook(bookId)
      .then(() => setBooks(books.filter(book => book.id !== bookId)))
      .then(console.log)
  }

  useEffect(() => {
    readAuthors()
    readStorages()
  }, [])

  useEffect(() => {
    readBooks()
  }, [filter, pageBooks, pagesizeBooks])

  return (
    <PageWrapper >
      <NavBar />
      <Options 
        title={'Livros'} 
        handleClickAdd={() => setAddOpen(true)} 
        handleClickFilter={() => setFilterOpen(true)} 
      />
      <AddBook 
        authors={authors} 
        storages={storages} 
        open={addOpen} 
        setOpen={setAddOpen} 
        handleAddBook={addBook} 
      />
      <FilterBook 
        authors={authors} 
        storages={storages} 
        open={filterOpen} 
        setOpen={setFilterOpen} 
        setFilter={setFilter}
      />
      <BooksTable 
        books={books} 
        handleRemoveBook={removeBook} 
        setSelectBook={setSelectBook} 
        setDetailsOpen={setDetailsOpen} 
      />
      <DetailsBook 
        book={selectBook} 
        open={detailsOpen} 
        setOpen={setDetailsOpen} 
        setUpdateOpen={setUpdateOpen} 
      />
      <UpdateBook 
        book={selectBook} 
        authors={authors} 
        storages={storages} 
        handleUpdateBook={updateBook} 
        open={updateOpen} 
        setOpen={setUpdateOpen}
      />
      <PaginationControl 
        count={books.length}
        page={pageBooks}
        setPage={setPageBooks}
        pagesize={pagesizeBooks}
        setPagesize={setPagesizeBooks}
      />      
    </PageWrapper>
  )
}