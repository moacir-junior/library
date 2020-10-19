import React, { useState } from 'react'
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
  const [author, setAuthor] = useState(null)
  const [storage, setStorage] = useState(null)

  const handleClose = () => {
    setOpen(false)
  }

  const handleFilter = () => {
    setFilter({
      authorId: author?.id,
      storageId: storage?.id,
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
    <div>
      <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Filtrar Livros</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Filtrar por:
          </DialogContentText>
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