import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationBar from 'components/common/NavigationBar'
import FallbackProgress from 'components/common/FallbackProgress'

const DashboardView = lazy(() => import('../../../views/DashboardView'))
const LoginView = lazy(() => import('../../../views/LoginView'))

const Routes = () => {
  return (
    <Router>
      <NavigationBar />
      <Suspense fallback={<FallbackProgress />}>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route path="/dashboard" component={DashboardView} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
