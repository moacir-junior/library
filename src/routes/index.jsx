import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../pages/main'
import AuthorsPage from '../pages/authors'
import BooksPage from '../pages/books'
import StoragesPage from '../pages/storages'
import NotFoundPage from '../pages/notFound'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route path="/livros" component={BooksPage} />
      <Route path="/autores" component={AuthorsPage} />
      <Route path="/prateleiras" component={StoragesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}