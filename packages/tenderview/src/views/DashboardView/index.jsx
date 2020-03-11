import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center'
  }
}))

const DashboardView = () => {
  const classes = useStyles()

  return (
    <Container>
      <h1 className={classes.title}>This is DashboardView</h1>
    </Container>
  )
}

export default DashboardView
