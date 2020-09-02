import React from 'react'
import NavBar from '../components/navBar'
import Card from '../components/card'
import Box from '@material-ui/core/Box';

const books = [{id: 1, name: 'Helena', author: 'Machado de Assis', year: '1890', eval: 7, comment: 'Cansativo'},
  {id: 2, name: 'A Moreninha', author: 'Joaquim Manuel de Macedo', year: '1895', eval: 8, comment: 'É doce'},
  {id: 3, name: 'Iracema', author: 'José de Alencar', year: '1897', eval: 8, comment: 'Bom'},
  {id: 4, name: 'O Cortiço', author: 'Aluisio Azevedo', year: '1890', eval: 7, comment: 'Entediante'},]

const authors = [{ id: 1, name: 'Machado de Assis' },
  { id: 2, name: 'Joaquim Manuel de Macedo' },
  { id: 3, name: 'José de Alencar' },
  { id: 4, name: 'Aluisio Azevedo' }]

export default function Main(){

  const lastBooks = []
  const lastAuthors = []

  for(let i = books.length - 1; i > books.length - 4; i--){
    lastBooks.push(books[i])
  }

  for(let i = authors.length - 1; i > authors.length - 4; i--){
    lastAuthors.push(authors[i])
  }

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
          elementSubtitle='Últimos livros'
          information={lastBooks.map(book => `${book.name} ... `)}
        />
      </Box>
      <Box display="flex" justifyContent="center" m={1} >
        <Card 
          link="/autores"
          cardTitle="Quantidade de autores cadastrados"
          elementTitle={`${authors.length} autores`}
          elementSubtitle='Últimos autores'
          information={lastAuthors.map(author => `${author.name} ... `)}
        />
      </Box>
    </>
  )
}