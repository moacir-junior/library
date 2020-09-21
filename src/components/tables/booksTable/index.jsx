import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@material-ui/core'
import StarRateIcon from '@material-ui/icons/StarRate'
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
    },
    star:{
        color: '#deba07',
    }
})

function StarRate({rate}){
    const classes = useStyles()

    return Array(rate).fill(1).map((star, index) => <StarRateIcon className={classes.star} key={index}/>)
}

function BooksTable({books, remove}) {
    const classes = useStyles()

    const handleDelete = () => {
        remove()
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="tabela de livros">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell className={classes.tableCell} align="center">Código</TableCell>
                        <TableCell className={classes.tableCell} align="left">Nome</TableCell>
                        <TableCell className={classes.tableCell} align="left">Autor</TableCell>
                        <TableCell className={classes.tableCell} align="left">Prateleira</TableCell>
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
                            <TableCell align="left">{book.storage}</TableCell>
                            <TableCell align="center">{book.year}</TableCell>
                            <TableCell align="center"><StarRate rate={book.evaluation}/></TableCell>
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

const mapStateToProps = state => ({
    books: state.booksReducer
})

const mapDispatchToProps = dispatch => ({
    remove: () => dispatch(actions.remove()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksTable)