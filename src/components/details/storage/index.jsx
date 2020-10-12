import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '80%',
  },
}))

export default function DetailsStorage({ storage, open, setOpen }) {
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {open && <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{storage.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Detalhes da prateleira selecionada.
          </DialogContentText>

          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TextFieldsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Nome" secondary={storage.name} />
            </ListItem>
          </List>

        </DialogContent>
        <DialogActions>
          <Button>
            Alterar
          </Button>
          <Button onClick={handleClose}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>}
    </div>
  )
}