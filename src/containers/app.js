import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header';

import About from './about';
import Signin from './auth/signin';
import Signout from './auth/signout';

import Home from '../components/home';
import RequireAuth from '../components/require_auth';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={RequireAuth(Signout)} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
