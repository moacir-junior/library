import React from 'react'
import NavBar from '../components/navBar'
import AuthorsTable from '../components/tables/authorsTable'
import FormNewAuthor from '../components/forms/formNewAuthor'

export default function Main(){
    return(
        <>     
            <NavBar />   
            <FormNewAuthor />
            <AuthorsTable />
        </>
    )
}
