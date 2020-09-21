import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { Dialog } from '@material-ui/core'
import { Select } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { InputLabel } from '@material-ui/core'
import { DialogTitle } from '@material-ui/core'
import { DialogActions } from '@material-ui/core'
import { DialogContent } from '@material-ui/core'
import { DialogContentText } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import Alert from '@material-ui/lab/Alert'
import { connect } from 'react-redux'
import { actions } from '../../../actions/books'

function SelectAuthor({authors, onChange}){
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <InputLabel>Autor</InputLabel>
      <Select fullWidth
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={onChange}
      >
        {authors?.map(author => 
          <MenuItem key={author.id} value={author.name}>{author.name}</MenuItem>
        )}
      </Select>
    </>
  )
}

function SelectStorage({storages, onChange}){
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <InputLabel>Prateleira</InputLabel>
      <Select fullWidth
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={onChange}
      >
        {storages?.map(storage => 
          <MenuItem key={storage.id} value={storage.name}>{storage.name}</MenuItem>
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

function AlertInconsistency({fieldInconsistencyId}) {
  switch(fieldInconsistencyId){
    case 'name':
      document.querySelector('#name').focus()
      return (
        <Alert variant="filled" severity="warning">
          Parece que você não informou o nome do livro. Preciso desta informação :)
        </Alert>
      )
    case 'author':
      document.querySelector('#author').focus()
      return (
        <Alert variant="filled" severity="warning">
          Não sei qual o autor deste livro. Esta informação é importante para mim :)
        </Alert>
      )
    case 'storage':
      document.querySelector('#storage').focus()
      return (
        <Alert variant="filled" severity="warning">
          Preciso que você me fale qual o local onde este livro está :)
        </Alert>
      )
    case 'year':
      document.querySelector('#year').focus()
      return (
        <Alert variant="filled" severity="warning">
          Conte-me o ano de lançamento deste livro e armazenarei aqui para que você possa consultá-lo futuramente :)
        </Alert>
      )
    default:
      return <></>
  }
}

function FormDialog({authors, storages, add}) {
  const classes = useStyles()
  
  const [open, setOpen] = useState(false)
  const [fieldInconsistencyId, setFieldInconsistencyId] = useState('')
  const [name, setName] = useState('')
  const [author, setAuthor] = useState(null)
  const [storage, setStorage] = useState(null)
  const [year, setYear] = useState(0)
  const [comment, setComment] = useState('')
  const [evaluation, setEvaluation] = useState(0)

  const validateFields = () => {
    if(!name){
      setFieldInconsistencyId('name')
      return false
    }
    if(!author){
      setFieldInconsistencyId('author')
      return false
    }
    if(!storage){
      setFieldInconsistencyId('storage')
      return false
    }
    if(!year){
      setFieldInconsistencyId('year')
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
    if(!validateFields()){
      return
    }

    add({
      id: 5, 
      name,
      author,
      storage,
      year,
      comment,
      evaluation,
    })
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
        <AlertInconsistency fieldInconsistencyId={fieldInconsistencyId} />
        <DialogContent>
          <DialogContentText>
            Informe os dados do livro.
          </DialogContentText>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth 
            onChange={event => setName(event.target.value)} />
          <SelectAuthor authors={authors} id="author"
            onChange={(event) => setAuthor(event.target.value)} />
          <SelectStorage storages={storages} id="storage"
            onChange={event => setStorage(event.target.value)} />
          <TextField id="year" label="Ano" type="number" min="1500" max="2100" fullWidth
            onChange={event => setYear(event.target.value)}/>
          <TextField id="comment" label="Comentário" type="text" fullWidth 
            onChange={event => setComment(event.target.value)} />
          <Typography component="legend">Avaliação</Typography>
          <Rating 
            name="simple-controlled"
            value={evaluation}
            onChange={(event, newValue) => setEvaluation(newValue)}
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

const mapStateToProps = state => ({
  authors: state.authorsReducer,
  storages: state.storagesReducer,
})

const mapDispatchToProps = dispatch => ({
  add: (book) => dispatch(actions.add(book)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog)