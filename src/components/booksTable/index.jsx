import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    tableHead:{
        background: '#2d4957',        
    },
    tableCell:{
        color: '#fff',
        fontSize: '1.3rem',
    }
})

const books = [{id: 1, name: 'Helena', author: 'Machado de Assis', year: '1890', eval: 7, comment: 'Cansativo'},
{id: 2, name: 'A Moreninha', author: 'Joaquim Manuel de Macedo', year: '1895', eval: 8, comment: 'É doce'},
{id: 3, name: 'Iracema', author: 'José de Alencar', year: '1897', eval: 8, comment: 'Bom'},
{id: 4, name: 'O Cortiço', author: 'Aluisio Azevedo', year: '1890', eval: 7, comment: 'Entediante'},]

export default function () {
    const classes = useStyles();

    const handleDelete = () => {
        alert('Excluido')
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="tabela de livros">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell className={classes.tableCell} align="center">Código</TableCell>
                        <TableCell className={classes.tableCell} align="left">Nome</TableCell>
                        <TableCell className={classes.tableCell} align="left">Autor</TableCell>
                        <TableCell className={classes.tableCell} align="center">Ano</TableCell>
                        <TableCell className={classes.tableCell} align="center">Avaliação</TableCell>
                        <TableCell className={classes.tableCell} align="left">Comentário</TableCell>
                        <TableCell className={classes.tableCell} align="center">Excluir</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map(book =>
                        <TableRow key={book.id}>
                            <TableCell align="center">{book.id}</TableCell>
                            <TableCell align="left">{book.name}</TableCell>
                            <TableCell align="left">{book.author}</TableCell>
                            <TableCell align="center">{book.year}</TableCell>
                            <TableCell align="center">{book.eval}</TableCell>
                            <TableCell align="left">{book.comment}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => handleDelete()}>
                                    <DeleteForeverIcon style={{ fontSize: 30, color:'#2d4957' }} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}