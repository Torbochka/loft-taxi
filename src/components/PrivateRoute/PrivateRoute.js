import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsLoggedIn } from '../../modules/Auth';

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  const renderRoute = props =>
    isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;

  return <Route {...rest} render={renderRoute} />;
};

export default connect(state => ({
  isLoggedIn: getIsLoggedIn(state)
}))(PrivateRoute);
