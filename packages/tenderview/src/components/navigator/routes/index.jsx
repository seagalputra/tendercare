import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/navigator/private-routes'
import { isLoggedIn } from 'utils/sessions'

import NavigationBar from 'components/common/NavigationBar'
import FallbackProgress from 'components/common/FallbackProgress'

const DashboardView = lazy(() => import('../../../views/DashboardView'))
const HomeView = lazy(() => import('../../../views/HomeView'))
const RegisterView = lazy(() => import('../../../views/RegisterView'))

const Routes = () => {
  return (
    <Router>
      <NavigationBar isLoggedIn={isLoggedIn} />
      <Suspense fallback={<FallbackProgress />}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <PrivateRoute path="/dashboard" component={DashboardView} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
