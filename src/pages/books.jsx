import React from 'react'
import NavBar from '../components/navBar'
import BooksTable from '../components/tables/booksTable'
import FormNewBook from '../components/forms/formNewBook'

export default function Main(){
    return(
        <>  
            <NavBar />     
            <FormNewBook />
            <BooksTable />
        </>
    )
}