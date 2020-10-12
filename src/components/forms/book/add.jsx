import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Box from '@material-ui/core/Box'
import Rating from '@material-ui/lab/Rating'
import Alert from '@material-ui/lab/Alert'
import SelectAuthor from './components/selectAuthor'
import SelectStorage from './components/selectStorage'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '80%',
  },
  button: {
    backgroundColor: '#2d4957',
    color: '#fff',
    right: '0',
    marginTop: '2ch',
    '&:hover': {
      backgroundColor: '#42687a'
    }
  },
  title: {
    fontSize: '1.5rem',
  }
}))

function AlertInconsistency({ fieldInconsistencyId }) {
  switch (fieldInconsistencyId) {
    case 'name':
      document.querySelector('#name').focus()
      return (
        <Alert variant="filled" severity="warning">
          Parece que você não informou o nome do livro. Preciso desta informação :)
        </Alert>
      )
    case 'author':
      document.querySelector('#author').focus()
      return (
        <Alert variant="filled" severity="warning">
          Não sei qual o autor deste livro. Esta informação é importante para mim :)
        </Alert>
      )
    case 'storage':
      document.querySelector('#storage').focus()
      return (
        <Alert variant="filled" severity="warning">
          Preciso que você me fale qual o local onde este livro está :)
        </Alert>
      )
    case 'year':
      document.querySelector('#year').focus()
      return (
        <Alert variant="filled" severity="warning">
          Conte-me o ano de lançamento deste livro e armazenarei aqui para que você possa consultá-lo futuramente :)
        </Alert>
      )
    default:
      return <></>
  }
}

export default function FormDialog({ authors, storages, handleAddBook }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [fieldInconsistencyId, setFieldInconsistencyId] = useState('')
  const [name, setName] = useState('')
  const [author, setAuthor] = useState(null)
  const [storage, setStorage] = useState(null)
  const [year, setYear] = useState(0)
  const [comment, setComment] = useState('')
  const [evaluation, setEvaluation] = useState(0)

  const validateFields = () => {
    if (!name) {
      setFieldInconsistencyId('name')
      return false
    }
    if (!author) {
      setFieldInconsistencyId('author')
      return false
    }
    if (!storage) {
      setFieldInconsistencyId('storage')
      return false
    }
    if (!year) {
      setFieldInconsistencyId('year')
      return false
    }
    return true
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAdd = () => {
    if (!validateFields()) {
      return
    }

    const book = {
      name,
      author,
      author_id: author.id,
      storage,
      storage_id: storage.id,
      year,
      comment,
      eval: evaluation,
    }

    handleAddBook(book)
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
    <div>
      <Box display="flex">
        <Box p={1} width="100%" >
          <h1 className={classes.title}>Livros</h1>
        </Box>
        <Box p={1} flexShrink={0} >
          <Button className={classes.button} onClick={handleClickOpen}>Novo</Button>
        </Box>
      </Box>
      <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Novo Autor</DialogTitle>
        <AlertInconsistency fieldInconsistencyId={fieldInconsistencyId} />
        <DialogContent>
          <DialogContentText>
            Informe os dados do livro.
          </DialogContentText>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth
            onChange={event => setName(event.target.value)} />
          <SelectAuthor authors={authors} id="author"
            onChange={event => handleChangeAuthor(event.target.value)} />
          <SelectStorage storages={storages} id="storage"
            onChange={event => handleChangeStorage(event.target.value)} />
          <TextField id="year" label="Ano" type="number" fullWidth
            onChange={event => setYear(Number(event.target.value))} />
          <TextField id="comment" label="Comentário" type="text" fullWidth
            onChange={event => setComment(event.target.value)} />
          <Typography component="legend">Avaliação</Typography>
          <Rating
            name="simple-controlled"
            value={evaluation}
            onChange={(event, newValue) => setEvaluation(newValue)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd}>
            Adicionar
          </Button>
          <Button onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}