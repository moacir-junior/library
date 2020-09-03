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

const storages = [{ id: 1, name: 'Blumenau' },
{ id: 2, name: 'Sítio' }]

export default function StoragesTable() {
    const classes = useStyles();

    const handleDelete = () => {
        alert('Excluido')
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="tabela de prateleiras">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell className={classes.tableCell} align="center">Código</TableCell>
                        <TableCell className={classes.tableCell} align="left">Nome</TableCell>
                        <TableCell className={classes.tableCell} align="center">Excluir</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {storages.map(storage =>
                        <TableRow key={storage.id}>
                            <TableCell align="center">{storage.id}</TableCell>
                            <TableCell align="left">{storage.name}</TableCell>
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