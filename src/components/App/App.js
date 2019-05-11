import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Login from '../Login';
import Map from '../Map';
import Profile from '../Profile';
import PrivateRoute from '../PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PrivateRoute path="/map" component={Map} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Redirect to="/map" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
