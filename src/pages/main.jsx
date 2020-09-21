import React from 'react'
import NavBar from '../components/navBar'
import Card from '../components/card'
import Box from '@material-ui/core/Box'
import { connect } from 'react-redux'

function Main({books, authors, storages}){
  return (
    <>
      <NavBar />
      <Box display="flex" justifyContent="center" m={1} >
        <Card
          link="/livros" 
          cardTitle="Último livro cadastrado"
          elementTitle={books[3].name}
          elementSubtitle={books[3].author}
          information={`"${books[3].comment}"`}
        />
      </Box>
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
    </>
  )
}

const mapStateToProps = state => ({
  books: state.booksReducer,
  authors: state.authorsReducer,
  storages: state.storagesReducer,
})

export default connect(mapStateToProps)(Main)