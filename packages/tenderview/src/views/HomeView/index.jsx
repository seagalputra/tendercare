import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import LoginForm from 'components/resources/HomeView/LoginForm'

import useStyles from 'assets/styles/HomeView'

import backgroundImage from 'assets/img/delivery.svg'

const HomeView = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleRedirect = path => {
    history.push(path)
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
        <LoginForm handleRedirect={handleRedirect} />
      </Grid>
    </Grid>
  )
}

export default HomeView
