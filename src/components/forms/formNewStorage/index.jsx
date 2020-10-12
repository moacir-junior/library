import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Box from '@material-ui/core/Box'
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

export default function FormDialog({ handleAddStorage }) {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [fieldInconsistencyId, setFieldInconsistencyId] = useState('')
  const [name, setName] = useState('')

  const validateFields = (fieldInconsistencyId) => {
    if (!name) {
      setFieldInconsistencyId('name')
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
    handleAddStorage({
      name,
    })
    setOpen(false)
  }

  return (
    <div>
      <Box display="flex">
        <Box p={1} width="100%" >
          <h1 className={classes.title}>Prateleiras</h1>
        </Box>
        <Box p={1} flexShrink={0} >
          <Button className={classes.button} onClick={handleClickOpen}>Nova</Button>
        </Box>
      </Box>
      <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nova Prateleira</DialogTitle>
        <AlertInconsistency fieldInconsistencyId={fieldInconsistencyId} />
        <DialogContent>
          <DialogContentText>
            Informe os dados da prateleira.
          </DialogContentText>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth
            onChange={(event) => setName(event.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd} color="primary">
            Adicionar
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}