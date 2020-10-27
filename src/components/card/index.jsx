import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

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

export default function CardInfo({ link, cardTitle, elementTitle, elementSubtitle, information }) {
  const classes = useStyles()

  return (
    <Link to={link} className={classes.link}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {cardTitle}
          </Typography>
          <Typography variant="h5" component="h2">
            {elementTitle}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {elementSubtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {information}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}