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
import TextFieldsIcon from '@material-ui/icons/TextFields'
import PersonIcon from '@material-ui/icons/Person'
import StorageIcon from '@material-ui/icons/Storage'
import EventIcon from '@material-ui/icons/Event'
import StarRateIcon from '@material-ui/icons/StarRate'
import ModeCommentIcon from '@material-ui/icons/ModeComment'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '80%',
  },
}))

export default function DetailsAuthor({ book, open, setOpen }) {
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {open && <Dialog classes={{ paper: classes.paper }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{book.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Detalhes do livro selecionado.
          </DialogContentText>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TextFieldsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Nome" secondary={book.name} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Autor" secondary={book.author.name} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StorageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Prateleira" secondary={book.storage.name} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EventIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Ano" secondary={book.year} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StarRateIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Avaliação" secondary={book.eval} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ModeCommentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Comentário" secondary={book.comment} />
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