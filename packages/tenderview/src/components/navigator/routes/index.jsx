import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import withStyles from 'react-jss'
import Spinner from 'components/common/Spinner'
import NavigationBar from 'components/common/NavigationBar'
import AppFooter from 'components/common/AppFooter'

const DashboardView = lazy(() => import('../../../views/DashboardView'))
const LoginView = lazy(() => import('../../../views/LoginView'))

const styles = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  contentContainer: {
    padding: '0 50px',
    marginTop: 64,
    flex: 1
  }
}

const Routes = ({ classes }) => {
  const { Content } = Layout

  return (
    <Router>
      <Layout className={classes.layout}>
        <NavigationBar />
        <Content className={classes.contentContainer}>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={DashboardView} />
              <Route path="/login" component={LoginView} />
            </Switch>
          </Suspense>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  )
}

export default withStyles(styles)(Routes)
