import React from 'react'
import BooksTable from '../components/booksTable'
import FormNewBook from '../components/formNewBook'

export default function Main(){
    return(
        <>        
            <h1>Livros</h1>
            <FormNewBook />
            <BooksTable />
        </>
    )
}