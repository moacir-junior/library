import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
});

const authors = [{ id: 1, name: 'Machado de Assis' },
{ id: 2, name: 'Joaquim Manuel de Macedo' },
{ id: 3, name: 'José de Alencar' }]

export default function () {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="tabela de autores">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell className={classes.tableCell} align="left">Código</TableCell>
                        <TableCell className={classes.tableCell} align="left">Nome</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {authors.map(author =>
                        <TableRow key={author.id}>
                            <TableCell align="left">{author.id}</TableCell>
                            <TableCell align="left">{author.name}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}