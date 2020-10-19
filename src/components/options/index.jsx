import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#2d4957',
    color: '#fff',
    right: '0',
    marginTop: '2ch',
    marginBottom: '2ch',
    marginRight: '2ch',
    '&:hover': {
      backgroundColor: '#42687a'
    }
  },
  title: {
    fontSize: '1.5rem',
  }
}))

export default function Options({title, handleClickAdd, handleClickFilter}){
  const classes = useStyles()

  return (
    <Box display="flex">
      <Box p={1} width="100%" >
        <h1 className={classes.title}>{title}</h1>
      </Box>
      {handleClickFilter && <Button className={classes.button} onClick={handleClickFilter}>Filtrar</Button>}
      {handleClickAdd && <Button className={classes.button} onClick={handleClickAdd}>Novo</Button>}
    </Box>
  )
}