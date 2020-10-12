import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  paper: {
    height: '100vh',
  }
})

export default function PageWrapper({ children }) {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      {children}
    </Paper>
  )
}