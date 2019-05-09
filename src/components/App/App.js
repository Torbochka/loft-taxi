import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header';

const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Header/>
          {/*<Route path="/login" component={LoginForm} />*/}
        </Switch>
      </BrowserRouter>
    )
};

export default App;
