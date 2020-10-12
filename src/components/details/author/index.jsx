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
import Avatar from '@material-ui/core/Avatar'
import TextFieldsIcon from '@material-ui/icons/TextFields';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '80%',
  },
}))

export default function DetailsAuthor({ author, open, setOpen, setUpdateOpen }) {
  const classes = useStyles()

  const handleUpdate = () => {
    setUpdateOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {author && <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{author.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Detalhes do autor selecionado.
        </DialogContentText>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TextFieldsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Nome" secondary={author.name} />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdate}>
            Alterar
        </Button>
          <Button onClick={handleClose}>
            Fechar
        </Button>
        </DialogActions>
      </Dialog>}
    </>
  )
}