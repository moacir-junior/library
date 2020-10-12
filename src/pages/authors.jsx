import React, { useEffect, useState } from 'react'
import NavBar from '../components/navBar'
import AuthorsTable from '../components/tables/authorsTable'
import PageWrapper from '../pages/pageWrapper'
import AuthorService from '../services/authors'
import DetailsAuthor from '../components/details/author'
import AddAuthor from '../components/forms/author/add'
import UpdateAuthor from '../components/forms/author/update'

export default function Authors() {
  const [authors, setAuthors] = useState([])
  const [selectAuthor, setSelectAuthor] = useState(null)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState(false)

  useEffect(() => {
    AuthorService.readAuthors()
      .then(authors => setAuthors(authors))
      .catch(console.log)
  }, [])

  const handleAddAuthor = author => {
    AuthorService.createAuthor(author)
      .then(() => setAuthors([...authors, author]))
      .catch(console.log)
  }

  const handleUpdateAuthor = author => {
    AuthorService.updateAuthor(author.id, author)
    .then(() => {
      authors.forEach(auth => {
        if(auth.id === author.id)
          auth = author
      })
    })
    .catch(console.log)
  }

  return (
    <PageWrapper >
      <NavBar />
      <AddAuthor handleAddAuthor={handleAddAuthor} />
      <AuthorsTable authors={authors} setSelectAuthor={setSelectAuthor} setDetailsOpen={setDetailsOpen} />
      <DetailsAuthor author={selectAuthor} open={detailsOpen} setOpen={setDetailsOpen} setUpdateOpen={setUpdateOpen}/>
      <UpdateAuthor author={selectAuthor} handleUpdateAuthor={handleUpdateAuthor} open={updateOpen} setOpen={setUpdateOpen} />
    </PageWrapper>
  )
}
