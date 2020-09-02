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

const authors = [{ id: 1, name: 'Machado de Assis' },
{ id: 2, name: 'Joaquim Manuel de Macedo' },
{ id: 3, name: 'José de Alencar' },
{ id: 4, name: 'Aluisio Azevedo' }]

export default function () {
    const classes = useStyles();

    const handleDelete = () => {
        alert('Excluido')
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="tabela de autores">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell className={classes.tableCell} align="center">Código</TableCell>
                        <TableCell className={classes.tableCell} align="left">Nome</TableCell>
                        <TableCell className={classes.tableCell} align="center">Excluir</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {authors.map(author =>
                        <TableRow key={author.id}>
                            <TableCell align="center">{author.id}</TableCell>
                            <TableCell align="left">{author.name}</TableCell>
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