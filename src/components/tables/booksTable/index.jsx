import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@material-ui/core'
import StarRateIcon from '@material-ui/icons/StarRate'
import { makeStyles } from '@material-ui/core/styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  tableHead: {
    background: '#2d4957',
  },
  tableCell: {
    color: '#fff',
    fontSize: '1.3rem',
  },
  star: {
    color: '#deba07',
  }
})

function StarRate({ rate }) {
  const classes = useStyles()
  return Array(rate).fill(1).map((star, index) => <StarRateIcon className={classes.star} key={index} />)
}

export default function BooksTable({ books, handleRemoveBook, setSelectBook, setDetailsOpen }) {
  const classes = useStyles()
  const fullSize = useMediaQuery('(min-width:1050px)');

  const handleRemoveOption = bookId => {
    console.log(`Livro com Id ${bookId} removido.`)
    handleRemoveBook(bookId)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="tabela de livros">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableCell} align="center">Nome</TableCell>
            {fullSize && <TableCell className={classes.tableCell} align="center">Autor</TableCell>}
            {fullSize && <TableCell className={classes.tableCell} align="center">Prateleira</TableCell>}
            {fullSize && <TableCell className={classes.tableCell} align="center">Ano</TableCell>}
            {fullSize && <TableCell className={classes.tableCell} align="center">Avaliação</TableCell>}
            {fullSize && <TableCell className={classes.tableCell} align="center">Comentário</TableCell>}
            {fullSize && <TableCell className={classes.tableCell} align="center">Opções</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {books?.map(book =>
            <TableRow key={book.id} onClick={() => {
              setSelectBook(book)
              setDetailsOpen(true)
            }}>
              <TableCell align="center">{book.name}</TableCell>
              {fullSize && <TableCell align="center">{book.author.name}</TableCell>}
              {fullSize && <TableCell align="center">{book.storage.name}</TableCell>}
              {fullSize && <TableCell align="center">{book.year}</TableCell>}
              {fullSize && <TableCell align="center"><StarRate rate={book.eval} /></TableCell>}
              {fullSize && <TableCell align="center">{book.comment}</TableCell>}
              {fullSize && <TableCell align="center">
                <Button onClick={() => handleRemoveOption(book.id)} tooltip={"Vai excluir"} >
                  <DeleteForeverIcon />
                </Button>
              </TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}