import React, {useState} from 'react'
import {
  Button,
  Dialog,
  Select,
  MenuItem,
  TextField,
  Typography,
  InputLabel,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Box,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { makeStyles } from '@material-ui/core/styles'

const authors = [{ id: 1, name: 'Machado de Assis' },
{ id: 2, name: 'Joaquim Manuel de Macedo' },
{ id: 3, name: 'José de Alencar' }]

function SelectAuthor(props){
  const [open, setOpen] = useState(false)

  const handleChange = event => {
    console.log(event.target.value)
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <InputLabel >Autor</InputLabel>
      <Select fullWidth
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={handleChange}
      >
        {authors.map(author => 
          <MenuItem key={author.id} value={author.name}>{author.name}</MenuItem>
        )}
      </Select>
    </>
  )
}

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
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [evaluation, setEvaluation] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleAdd = () => {
      alert('Adicionou.')
      setOpen(false)
  }

  return (
    <div>
      <Box display="flex">
        <Box p={1} width="100%" >
          <h1 className={classes.title}>Livros</h1>
        </Box>        
        <Box p={1} flexShrink={0} >
          <Button className={classes.button} onClick={handleClickOpen}>Novo Livro</Button>
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Novo Autor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Informe os dados do livro.
          </DialogContentText>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth />
          <SelectAuthor evaluation={evaluation}/>
          <TextField id="year" label="Ano" type="number" min="1500" max="2100" fullWidth />
          <TextField id="comment" label="Comentário" type="text" fullWidth />
          <Typography component="legend">Avaliação</Typography>
          <Rating 
            name="simple-controlled"
            value={evaluation}
            onChange={(event, newValue) => {setEvaluation(newValue);}}
          />
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