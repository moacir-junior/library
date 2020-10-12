import React, {useState, useEffect} from 'react'
import NavBar from '../components/navBar'
import Card from '../components/card'
import Box from '@material-ui/core/Box'
import PageWrapper from '../pages/pageWrapper'
import BookService from '../services/books'
import AuthorService from '../services/authors'
import StorageService from '../services/storages'

export default function Main(){
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [storages, setStorages] = useState([])

  useEffect(() => {
    BookService.readBooks()
    .then(books => setBooks(books))
    .catch(console.log)

    AuthorService.readAuthors()
    .then(authors => setAuthors(authors))
    .catch(console.log)

    StorageService.readStorages()
    .then(storages => setStorages(storages))
    .catch(console.log)
  }, [])

  return (
    <PageWrapper >
      <NavBar />
      <Box display="flex" justifyContent="center" m={1} >
        <Card 
          link="/livros"
          cardTitle="Quantidade de livros cadastrados"
          elementTitle={`${books.length} livros`}
        />
      </Box>
      <Box display="flex" justifyContent="center" m={1} >
        <Card 
          link="/autores"
          cardTitle="Quantidade de autores cadastrados"
          elementTitle={`${authors.length} autores`}
        />
      </Box>
      <Box display="flex" justifyContent="center" m={1} >
        <Card 
          link="/prateleiras"
          cardTitle="Quantidade de prateleiras cadastradas"
          elementTitle={`${storages.length} prateleiras`}
        />
      </Box>
    </PageWrapper> 
  )
}