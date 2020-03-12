import React, { useState } from 'react'
import { Grid, Hidden } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import Login from 'components/resources/HomeView/Login'
import Register from 'components/resources/HomeView/Register'

import useStyles from 'assets/styles/HomeView'

import backgroundImage from 'assets/img/delivery.svg'

const HomeView = () => {
  const [isRegister, setIsRegister] = useState(false)
  const classes = useStyles()
  const history = useHistory()

  const handleRedirect = path => {
    history.push(path)
  }

  const toggleRegister = () => {
    setIsRegister(!isRegister)
  }

  return (
    <Grid container component="main">
      <Hidden smDown>
        <Grid
          container
          item
          xs={false}
          sm={false}
          md={7}
          justify="center"
          alignItems="center"
        >
          <img
            src={backgroundImage}
            alt="Background"
            className={classes.image}
          />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={12} md={5} className={classes.paper}>
        {isRegister ? (
          <Register toggleRegister={toggleRegister} />
        ) : (
          <Login
            handleRedirect={handleRedirect}
            toggleRegister={toggleRegister}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default HomeView
