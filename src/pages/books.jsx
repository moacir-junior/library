import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import BooksTable from '../components/booksTable'
import FormNewBook from '../components/formNewBook'

const useStyles = makeStyles((theme) => ({
    button:{
        backgroundColor: '#2d4957',
        color: '#fff',
        width: '15ch',
        '&:hover': {
            backgroundColor: '#4e7487',
        }
    },    
  }))

export default function Main(){
    const classes = useStyles()

    return(
        <>        
            <h1>Livros</h1>
            <FormNewBook />
            <BooksTable />
        </>
    )
}