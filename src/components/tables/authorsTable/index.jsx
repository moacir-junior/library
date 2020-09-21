import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { connect } from 'react-redux'
import { actions } from '../../../actions/books'

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

function AuthorsTable({authors, remove}) {
    const classes = useStyles()

    const handleDelete = () => {
        remove()
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

const mapStateToProps = state => ({
    authors: state.authorsReducer
})

const mapDispatchToProps = dispatch => ({
    remove: () => dispatch(actions.remove()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsTable)