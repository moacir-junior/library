import React from 'react'
import NavBar from '../components/navBar'
import FormNewStorage from '../components/forms/formNewStorage'
import StoragesTable from '../components/tables/storagesTable'

export default function Main(){
    return(
        <>  
            <NavBar />     
            <FormNewStorage />
            <StoragesTable />
        </>
    )
}