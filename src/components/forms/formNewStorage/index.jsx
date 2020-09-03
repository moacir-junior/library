import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#2d4957',
    color: '#fff',
    right: '0',
    marginTop: '2ch',
    '&:hover':{
      backgroundColor: '#42687a'
    }
  },
  title: {
    ...theme.typography.button,
    fontSize: '1.5rem',
  }
}))

export default function FormDialog() {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
      alert('Adicionou.')
      setOpen(false)
  }

  return (
    <div>
      <Box display="flex">
        <Box p={1} width="100%" >
          <h1 className={classes.title}>Prateleiras</h1>
        </Box>        
        <Box p={1} flexShrink={0} >
          <Button className={classes.button} onClick={handleClickOpen}>Nova Prateleira</Button>
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nova Prateleira</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Informe os dados da prateleira.
          </DialogContentText>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth />
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