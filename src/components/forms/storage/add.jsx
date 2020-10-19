import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '80%',
  },
}))

export default function AddStorage({ open, setOpen, handleAddStorage }) {
  const classes = useStyles()
  const [inconsistency, setInconsistency] = useState('')
  const [name, setName] = useState('')

  const validateFields = () => {
    if (!name) {
      setInconsistency('Parece que você não informou o nome da prateleira. Preciso desta informação :)')
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
    handleAddStorage({
      name,
    })
    setOpen(false)
  }

  return (
    <div>
      <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nova Prateleira</DialogTitle>
        {inconsistency && <Alert variant="filled" severity="warning">{inconsistency}</Alert>}
        <DialogContent>
          <DialogContentText>
            Informe os dados da prateleira.
          </DialogContentText>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth
            onChange={(event) => setName(event.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd} color="primary">
            Salvar
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}