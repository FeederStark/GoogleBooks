import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/main';
import Home from '../pages/home';
import Details from '../pages/details';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/home" component={Home} />
    <Route path="/details/:id" component={Details} />
  </Switch>
);

export default Routes;
