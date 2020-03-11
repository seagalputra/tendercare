import React from 'react'
import { CircularProgress, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  progress: {
    textAlign: 'center'
  }
}))

const FallbackProgress = () => {
  const classes = useStyles()

  return (
    <Container className={classes.progress}>
      <CircularProgress />
    </Container>
  )
}

export default FallbackProgress
