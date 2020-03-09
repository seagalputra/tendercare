import React from 'react'
import withStyles from 'react-jss'

const styles = {
  content: {
    margin: '32px 0',
    padding: 24,
    minHeight: 380,
    background: '#fff'
  }
}

const LoginView = ({ classes }) => {
  return (
    <div className={classes.content}>
      <h1>Login View!</h1>
    </div>
  )
}

export default withStyles(styles)(LoginView)
