import React from 'react'
import { Layout } from 'antd'
import withStyles from 'react-jss'

const styles = {
  footer: {
    textAlign: 'center'
  }
}

const AppFooter = ({ classes }) => {
  const { Footer } = Layout

  return <Footer className={classes.footer}>Footer</Footer>
}

export default withStyles(styles)(AppFooter)
