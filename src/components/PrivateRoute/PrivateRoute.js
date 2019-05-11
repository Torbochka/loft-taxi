import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsLoggedIn } from '../../modules/Login';

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  const renderRoute = props =>
    isLoggedIn ? <Redirect to="/map" /> : <Component {...props} />;

  return <Route {...rest} render={renderRoute} />;
};

export default connect(state => ({
  isLoggedIn: getIsLoggedIn(state)
}))(PrivateRoute);
