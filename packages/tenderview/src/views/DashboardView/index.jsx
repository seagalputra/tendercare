import React from 'react'
import { Button } from 'antd'
import withStyles from 'react-jss'

const styles = {
  content: {
    margin: '32px 0',
    padding: 24,
    minHeight: 380,
    background: '#fff'
  }
}

const DashboardView = ({ classes }) => {
  return (
    <div className={classes.content}>
      <Button type="primary">Click Me!</Button>
    </div>
  )
}

export default withStyles(styles)(DashboardView)
