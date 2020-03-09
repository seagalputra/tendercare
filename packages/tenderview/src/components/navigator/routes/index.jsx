import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spinner from 'components/common/Spinner';

const DashboardView = lazy(() => import('../../../views/DashboardView'));

const Routes = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={DashboardView} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
