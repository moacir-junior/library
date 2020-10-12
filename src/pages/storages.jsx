import React, { useState, useEffect } from 'react'
import NavBar from '../components/navBar'
import StoragesTable from '../components/tables/storagesTable'
import PageWrapper from '../pages/pageWrapper'
import StorageService from '../services/storages'
import DetailsStorage from '../components/details/storage'
import AddStorage from '../components/forms/storage/add'
import UpdateStorage from '../components/forms/storage/update'

export default function Main() {
  const [storages, setStorages] = useState([])
  const [selectStorage, setSelectStorage] = useState(null)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState(false)

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

  return (
    <PageWrapper >
      <NavBar />
      <AddStorage handleAddStorage={handleAddStorage} />
      <StoragesTable storages={storages} setSelectStorage={setSelectStorage} setDetailsOpen={setDetailsOpen} />
      <DetailsStorage storage={selectStorage} open={detailsOpen} setOpen={setDetailsOpen} setUpdateOpen={setUpdateOpen} />
      <UpdateStorage storage={selectStorage} open={updateOpen} setOpen={setUpdateOpen} />
    </PageWrapper>
  )
}