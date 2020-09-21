import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  root: {
    margin: '0 1ch',
    minWidth: 275,
    background: '#ccc',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function CardInfo(props) {
  const classes = useStyles()

  return (
    <Link to={props.link} className={classes.link}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.cardTitle}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.elementTitle}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.elementSubtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {props.information}          
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}