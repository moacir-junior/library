import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import SelectAuthor from './components/selectAuthor'
import SelectStorage from './components/selectStorage'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '80%',
  },
}))

export default function FilterBook({ authors, storages, open, setOpen, setFilter }) {
  const classes = useStyles()
  let filter = {}

  const handleClose = () => {
    setOpen(false)
  }

  const handleFilter = () => {
    setFilter(filter)
    setOpen(false)
  }

  const handleChangeName = name => {
    filter.name = name
  }

  const handleChangeAuthor = selectAuthorName => {
    authors.forEach(author => {
      if (author.name === selectAuthorName) {
        filter.authorId = author.id
        return
      }
    });
  }

  const handleChangeStorage = selectStorageName => {
    storages.forEach(storage => {
      if (storage.name === selectStorageName) {
        filter.storageId = storage.id
        return
      }
    })
  }

  return (
    <div>
      <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Filtrar Livros</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Filtrar por:
          </DialogContentText>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth
            onChange={event => handleChangeName(event.target.value)} />
          <SelectAuthor authors={authors} id="author"
            onChange={event => handleChangeAuthor(event.target.value)} />
          <SelectStorage storages={storages} id="storage"
            onChange={event => handleChangeStorage(event.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFilter}>
            Filtrar
          </Button>
          <Button onClick={handleClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}