import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
  }
})

export default function StoragesTable({ storages, setSelectStorage, setDetailsOpen }) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="tabela de prateleiras">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableCell} align="center">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {storages?.map(storage =>
            <TableRow key={storage.id} onClick={() => {
              setSelectStorage(storage)
              setDetailsOpen(true)
            }}>
              <TableCell align="center">{storage.name}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}