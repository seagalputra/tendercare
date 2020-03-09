import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const sessionStorageName = 'tendercare';

const isLoggedIn = () => localStorage.getItem(sessionStorageName);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isLoggedIn()) {
        return (
          <div>
            <Component {...props} />
          </div>
        );
      }

      return (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      );
    }}
  />
);

export default PrivateRoute;
