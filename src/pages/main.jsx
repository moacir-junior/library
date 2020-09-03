import React from 'react'
import NavBar from '../components/navBar'
import Card from '../components/card'
import Box from '@material-ui/core/Box';

const books = [{id: 1, name: 'Helena', author: 'Machado de Assis', storage: 'Blumenau', year: '1890', eval: 7, comment: 'Cansativo'},
  {id: 2, name: 'A Moreninha', author: 'Joaquim Manuel de Macedo', storage: 'Blumenau', year: '1895', eval: 8, comment: 'É doce'},
  {id: 3, name: 'Iracema', author: 'José de Alencar', storage: 'Sítio', year: '1897', eval: 8, comment: 'Bom'},
  {id: 4, name: 'O Cortiço', author: 'Aluisio Azevedo', storage: 'Blumenau', year: '1890', eval: 7, comment: 'Entediante'},]

const authors = [{ id: 1, name: 'Machado de Assis' },
  { id: 2, name: 'Joaquim Manuel de Macedo' },
  { id: 3, name: 'José de Alencar' },
  { id: 4, name: 'Aluisio Azevedo' }]

const storages = [{ id: 1, name: 'Blumenau' },
  { id: 2, name: 'Sítio' }]

export default function Main(){
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
          elementTitle={`${storages.length} autores`}
        />
      </Box>
    </>
  )
}