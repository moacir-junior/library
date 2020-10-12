import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import AuthorIcon from '@material-ui/icons/Person'
import StorageIcon from '@material-ui/icons/Storage'

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: '#2d4957',
  },
  icon: {
    color: '#fff',
  }
})

function IconLink(props) {
  const classes = useStyles()

  switch (props.type) {
    case 'home':
      return (
        <Link to="/">
          <HomeIcon className={classes.icon} />
        </Link>
      )
    case 'book':
      return (
        <Link to="/livros">
          <BookIcon className={classes.icon} />
        </Link>
      )
    case 'author':
      return (
        <Link to="/autores">
          <AuthorIcon className={classes.icon} />
        </Link>
      )
    case 'shelves':
      return (
        <Link to="/prateleiras">
          <StorageIcon className={classes.icon} />
        </Link>
      )
    default:
      return (
        <>
        </>
      )
  }
}

export default function NavBar() {
  const classes = useStyles()

  return (
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.icon} label="Início" icon={<IconLink type="home" />} />
      <BottomNavigationAction className={classes.icon} label="Livros" icon={<IconLink type="book" />} />
      <BottomNavigationAction className={classes.icon} label="Autores" icon={<IconLink type="author" />} />
      <BottomNavigationAction className={classes.icon} label="Prateleiras" icon={<IconLink type="shelves" />} />
    </BottomNavigation>
  )
}