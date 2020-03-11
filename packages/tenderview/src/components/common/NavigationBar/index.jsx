import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { isLoggedIn, clearToken } from 'utils/sessions'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navigation: {
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const NavigationBar = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleLogout = () => {
    clearToken()
    history.push('/')
  }

  return (
    <header className={classes.root}>
      <AppBar
        className={classes.navigation}
        position="static"
        color="transparent"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} color="inherit">
            Tendercare
          </Typography>
          {isLoggedIn() ? (
            <Button color="inherit" onClick={handleLogout}>
              Keluar
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default NavigationBar
