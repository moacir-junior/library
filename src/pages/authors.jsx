import React from 'react'
import NavBar from '../components/navBar'
import AuthorsTable from '../components/authorsTable'
import FormNewAuthor from '../components/formNewAuthor'

export default function Main(){
    return(
        <>     
            <NavBar />   
            <FormNewAuthor />
            <AuthorsTable />
        </>
    )
}
