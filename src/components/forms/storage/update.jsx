import React, { useState, useEffect } from 'react'
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
          Parece que você não informou o nome da prateleira. Preciso desta informação :)
        </Alert>
      )
    default:
      return <></>
  }
}

export default function FormDialog({ storage, handleUpdateStorage, open, setOpen }) {
  const classes = useStyles()
  const [fieldInconsistencyId, setFieldInconsistencyId] = useState('')
  const [name, setName] = useState(storage?.name)

  useEffect(() => {
    console.log('Entrou')
    if(open){
      setName(storage.name)
    }
  }, [open])


  const validateFields = (fieldInconsistencyId) => {
    if (!name) {
      setFieldInconsistencyId('name')
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
    handleUpdateStorage({
      id: storage.id,
      name,
    })
    setOpen(false)
  }

  return (
    <>
      {storage && <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Alteração da prateleira</DialogTitle>
        <AlertInconsistency fieldInconsistencyId={fieldInconsistencyId} />
        <DialogContent>
          <DialogContentText>
            Informe os dados da prateleira.
        </DialogContentText>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth value={name}
            onChange={(event) => setName(event.target.value)} />
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