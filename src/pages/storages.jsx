import React, {useState, useEffect} from 'react'
import NavBar from '../components/navBar'
import FormNewStorage from '../components/forms/formNewStorage'
import StoragesTable from '../components/tables/storagesTable'
import PageWrapper from '../pages/pageWrapper'
import StorageService from '../services/storages'
import Details from '../components/details/storage'

export default function Main(){
    const [storages, setStorages] = useState([])
    const [selectStorage, setSelectStorage] = useState(null)
    const [detailsOpen, setDetailsOpen] = useState(false)

    useEffect(() => {
        StorageService.readStorages()
        .then(storages => setStorages(storages))
        .catch(console.log)
    }, [])

    const handleAddStorage = storage => {
        StorageService.createStorage(storage)
        .then(() => setStorages([...storages, storage]))
        .catch(console.log)
    }

    return(
        <PageWrapper >
            <NavBar />     
            <FormNewStorage handleAddStorage={handleAddStorage} />
            <StoragesTable storages={storages} setSelectStorage={setSelectStorage} setDetailsOpen={setDetailsOpen} />
            <Details storage={selectStorage} open={detailsOpen} setOpen={setDetailsOpen} />
        </PageWrapper>  
    )
}