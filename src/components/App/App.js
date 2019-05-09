import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import LoginForm from '../LoginForm';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
