import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'components/navigator/private-routes'

const DashboardView = lazy(() => import('../../../views/DashboardView'))
const HomeView = lazy(() => import('../../../views/HomeView'))
const RegisterView = lazy(() => import('../../../views/RegisterView'))

const Routes = () => {
  return (
    <Router>
      <NavigationBar />
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
