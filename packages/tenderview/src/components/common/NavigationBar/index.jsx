import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Badge
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { clearToken } from 'utils/sessions'

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

const NavigationBar = ({ isLoggedIn }) => {
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
          <Hidden smUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" className={classes.title} color="inherit">
            Service Point Oriflame 1047
          </Typography>
          {isLoggedIn() ? (
            <>
              <IconButton color="inherit" aria-label="11 notifikasi baru">
                <Badge badgeContent={11} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Keluar"
                onClick={handleLogout}
              >
                <ExitToAppIcon />
              </IconButton>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default NavigationBar
