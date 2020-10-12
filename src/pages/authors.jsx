import React, {useEffect, useState} from 'react'
import NavBar from '../components/navBar'
import AuthorsTable from '../components/tables/authorsTable'
import FormNewAuthor from '../components/forms/formNewAuthor'
import PageWrapper from '../pages/pageWrapper'
import AuthorService from '../services/authors'
import Details from '../components/details/author'

export default function Authors(){
    const [authors, setAuthors] = useState([])
    const [selectAuthor, setSelectAuthor] = useState(null)
    const [detailsOpen, setDetailsOpen] = useState(false)

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

    return(
        <PageWrapper >     
            <NavBar />
            <FormNewAuthor handleAddAuthor={handleAddAuthor} />
            <AuthorsTable authors={authors} setSelectAuthor={setSelectAuthor} setDetailsOpen={setDetailsOpen} />
            <Details author={selectAuthor} open={detailsOpen} setOpen={setDetailsOpen} />}
        </PageWrapper>
    )
}
