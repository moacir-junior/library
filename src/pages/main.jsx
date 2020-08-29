import React from 'react'
import TopMenu from '../components/topMenu'
import BooksTable from '../components/booksTable'
import AuthorsTable from '../components/authorsTable'
import FormNewAuthor from '../components/formNewAuthor'
import FormNewBook from '../components/formNewBook'

export default function Main(){
    return(
        <>
            <TopMenu />
            <BooksTable />
            <AuthorsTable />
            <FormNewAuthor />
            <FormNewBook />
        </>
    )
}