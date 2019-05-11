import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import LoginForm from '../Login';
import Map from '../Map';
import PrivateRoute from '../PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PrivateRoute path="/login" component={LoginForm} />
        <Route path="/map" component={Map} />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
