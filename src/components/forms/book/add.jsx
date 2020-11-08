import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Rating from '@material-ui/lab/Rating'
import Alert from '@material-ui/lab/Alert'
import SelectAuthor from './components/selectAuthor'
import SelectStorage from './components/selectStorage'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '80%',
  },
}))

export default function FormDialog({ authors, storages, open, setOpen, handleAddBook }) {
  const classes = useStyles()
  let inconsistency = ''
  let book = {}

  const validateFields = () => {
    if (!book.name) {
      inconsistency = 'Parece que você não informou o nome do livro. Preciso desta informação :)'
      return false
    }
    if (!book.author) {
      inconsistency = 'Não sei qual o autor deste livro. Esta informação é importante para mim :)'
      return false
    }
    if (!book.storage) {
      inconsistency = 'Preciso que você me fale qual o local onde este livro está :)'
      return false
    }
    if (!book.year) {
      inconsistency = 'Conte-me o ano de lançamento deste livro e armazenarei aqui para que você possa consultá-lo futuramente :)'
      return false
    }
    return true
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAdd = () => {
    if (!validateFields()) {
      return
    }

    handleAddBook(book)
    setOpen(false)
  }

  const handleChangeAuthor = (selectAuthorName) => {
    authors.forEach(author => {
      if (author.name === selectAuthorName) {
        book.author = author
        book.author_id = author.id
        return
      }
    });
  }

  const handleChangeStorage = (selectStorageName) => {
    storages.forEach(storage => {
      if (storage.name === selectStorageName) {
        book.storage = storage
        book.storage_id = storage.id
        return
      }
    })
  }

  return (
    <div>
      <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Novo Livro</DialogTitle>
        {inconsistency && <Alert variant="filled" severity="warning">{inconsistency}</Alert>}
        <DialogContent>
          <DialogContentText>
            Informe os dados do livro.
          </DialogContentText>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth
            onChange={event => book.name = event.target.value} />
          <SelectAuthor authors={authors} id="author"
            onChange={event => handleChangeAuthor(event.target.value)} />
          <SelectStorage storages={storages} id="storage"
            onChange={event => handleChangeStorage(event.target.value)} />
          <TextField id="year" label="Ano" type="number" fullWidth
            onChange={event => book.year = Number(event.target.value)} />
          <TextField id="comment" label="Comentário" type="text" fullWidth
            onChange={event => book.comment = event.target.value} />
          <Typography component="legend">Avaliação</Typography>
          <Rating
            name="simple-controlled"
            value={book.eval}
            onChange={(event, newValue) => book.eval = newValue}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd}>
            Salvar
          </Button>
          <Button onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}