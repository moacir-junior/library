import React, { useEffect, useState } from 'react'
import NavBar from '../components/navBar'
import Options from '../components/options'
import AuthorsTable from '../components/tables/authorsTable'
import PageWrapper from '../pages/pageWrapper'
import AuthorService from '../services/authors'
import DetailsAuthor from '../components/details/author'
import AddAuthor from '../components/forms/author/add'
import UpdateAuthor from '../components/forms/author/update'

export default function Authors() {
  const [authors, setAuthors] = useState([])
  const [selectAuthor, setSelectAuthor] = useState(null)
  const [addOpen, setAddOpen] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState(false)

  const readAuthors = () => {
    AuthorService.readAuthors()
      .then(authors => setAuthors(authors))
      .catch(console.log)
  }

  const addAuthor = author => {
    AuthorService.createAuthor(author)
      .then(res => setAuthors([...authors, res]))
      .catch(console.log)
  }

  const updateAuthor = author => {
    AuthorService.updateAuthor(author.id, author)
    .then(() => readAuthors())
    .catch(console.log)
  }

  useEffect(() => {
    readAuthors()
  }, [])

  return (
    <PageWrapper >
      <NavBar />
      <Options 
        title={'Autores'} 
        handleClickAdd={() => setAddOpen(true)} 
      />
      <AddAuthor 
        open={addOpen} 
        setOpen={setAddOpen} 
        handleAddAuthor={addAuthor} 
      />
      <AuthorsTable 
        authors={authors} 
        setSelectAuthor={setSelectAuthor} 
        setDetailsOpen={setDetailsOpen} 
      />
      <DetailsAuthor 
        author={selectAuthor} 
        open={detailsOpen} 
        setOpen={setDetailsOpen} 
        setUpdateOpen={setUpdateOpen} 
      />
      <UpdateAuthor 
        author={selectAuthor} 
        handleUpdateAuthor={updateAuthor} 
        open={updateOpen} 
        setOpen={setUpdateOpen} 
      />
    </PageWrapper>
  )
}
