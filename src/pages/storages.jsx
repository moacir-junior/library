import React, { useState, useEffect } from 'react'
import NavBar from '../components/navBar'
import Options from '../components/options'
import StoragesTable from '../components/tables/storagesTable'
import PageWrapper from '../pages/pageWrapper'
import StorageService from '../services/storages'
import DetailsStorage from '../components/details/storage'
import AddStorage from '../components/forms/storage/add'
import UpdateStorage from '../components/forms/storage/update'

export default function Main() {
  const [storages, setStorages] = useState([])
  const [selectStorage, setSelectStorage] = useState(null)
  const [addOpen, setAddOpen] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState(false)

  const readStorage = () => {
    StorageService.readStorages()
      .then(storages => setStorages(storages))
      .catch(console.log)
  }

  useEffect(() => {
    readStorage()
  }, [])

  const handleAddStorage = storage => {
    StorageService.createStorage(storage)
      .then(res => setStorages([...storages, res]))
      .catch(console.log)
  }

  const handleUpdateStorage = storage => {
    StorageService.updateStorage(storage.id, storage)
    .then(() => readStorage())
    .catch(console.log)
  }

  return (
    <PageWrapper >
      <NavBar />
      <Options 
        title={'Prateleiras'} 
        handleClickAdd={() => setAddOpen(true)} 
      />
      <AddStorage 
        open={addOpen} 
        setOpen={setAddOpen} 
        handleAddStorage={handleAddStorage}
      />
      <StoragesTable 
        storages={storages} 
        setSelectStorage={setSelectStorage} 
        setDetailsOpen={setDetailsOpen} 
      />
      <DetailsStorage 
        storage={selectStorage} 
        open={detailsOpen} 
        setOpen={setDetailsOpen} 
        setUpdateOpen={setUpdateOpen} 
      />
      <UpdateStorage 
        storage={selectStorage} 
        handleUpdateStorage={handleUpdateStorage} 
        open={updateOpen} 
        setOpen={setUpdateOpen} 
      />
    </PageWrapper>
  )
}