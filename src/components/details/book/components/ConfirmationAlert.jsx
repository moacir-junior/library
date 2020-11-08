import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmationAlert({book, handleRemoveBook, handleCloseParent}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleYes = () => {
    handleRemoveBook(book.id)
    setOpen(false)
    handleCloseParent()
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        Excluir
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{book?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Não tem volta! Quer mesmo excluir este livro?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYes} color="primary">
            Sim
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}