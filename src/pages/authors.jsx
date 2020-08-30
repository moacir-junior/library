import React from 'react'
import AuthorsTable from '../components/authorsTable'
import FormNewAuthor from '../components/formNewAuthor'

export default function Main(){
    return(
        <>        
            <FormNewAuthor />
            <AuthorsTable />
        </>
    )
}
