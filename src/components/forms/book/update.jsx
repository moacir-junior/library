import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import Rating from '@material-ui/lab/Rating'
import SelectAuthor from './components/selectAuthor'
import SelectStorage from './components/selectStorage'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '80%',
  },
}))

export default function FormDialog({ book, authors, storages, handleUpdateBook, open, setOpen }) {
  const classes = useStyles()
  const [inconsistency, setInconsistency] = useState('')
  const [name, setName] = useState('')
  const [author, setAuthor] = useState(null)
  const [storage, setStorage] = useState(null)
  const [year, setYear] = useState(0)
  const [comment, setComment] = useState('')
  const [evaluation, setEvaluation] = useState(0)

  useEffect(() => {
    if (open) {
      setName(book.name)
      setAuthor(book.author)
      setStorage(book.storage)
      setYear(book.year)
      setComment(book.comment)
      setEvaluation(book.eval)
    }
  }, [open, book])

  const validateFields = () => {
    if (!name) {
      setInconsistency('Parece que você não informou o nome do livro. Preciso desta informação :)')
      return false
    }
    if (!author) {
      setInconsistency('Não sei qual o autor deste livro. Esta informação é importante para mim :)')
      return false
    }
    if (!storage) {
      setInconsistency('Preciso que você me fale qual o local onde este livro está :)')
      return false
    }
    if (!year) {
      setInconsistency('Conte-me o ano de lançamento deste livro e armazenarei aqui para que você possa consultá-lo futuramente :)')
      return false
    }
    return true
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSave = () => {
    if (!validateFields()) {
      return
    }
    handleUpdateBook({
      id: book.id,
      name,
      author,
      author_id: author.id,
      storage,
      storage_id: storage.id,
      year,
      comment,
      eval: evaluation,
    })
    setOpen(false)
  }

  const handleChangeAuthor = (selectAuthorName) => {
    authors.forEach(author => {
      if (author.name === selectAuthorName) {
        setAuthor(author)
        return
      }
    });
  }

  const handleChangeStorage = (selectStorageName) => {
    storages.forEach(storage => {
      if (storage.name === selectStorageName) {
        setStorage(storage)
        return
      }
    })
  }

  return (
    <>
      {book && <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Alteração do Livro</DialogTitle>
        {inconsistency && <Alert variant="filled" severity="warning">{inconsistency}</Alert>}
        <DialogContent>
          <DialogContentText>
            Informe os dados do livro.
        </DialogContentText>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth value={name}
            onChange={event => setName(event.target.value)} />
          <SelectAuthor authors={authors} selectedAuthor={author} id="author"
            onChange={event => handleChangeAuthor(event.target.value)} />
          <SelectStorage storages={storages} selectedStorage={storage} id="storage"
            onChange={event => handleChangeStorage(event.target.value)} />
          <TextField id="year" label="Ano" type="number" fullWidth value={year}
            onChange={event => setYear(Number(event.target.value))} />
          <TextField id="comment" label="Comentário" type="text" fullWidth value={comment}
            onChange={event => setComment(event.target.value)} />
          <Typography component="legend">Avaliação</Typography>
          <Rating
            name="simple-controlled"
            value={evaluation}
            onChange={(event, newValue) => setEvaluation(newValue)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} >
            Salvar
          </Button>
          <Button onClick={handleClose} >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>}
    </>
  )
}