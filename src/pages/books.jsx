import React from 'react'
import NavBar from '../components/navBar'
import BooksTable from '../components/booksTable'
import FormNewBook from '../components/formNewBook'

export default function Main(){
    return(
        <>  
            <NavBar />     
            <FormNewBook />
            <BooksTable />
        </>
    )
}