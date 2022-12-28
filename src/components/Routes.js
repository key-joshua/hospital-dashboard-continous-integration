import '../App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardPage } from './index';

const Routes = () => (
  <div>
    <Router>
      <Switch>

        <Route exact path="/" component={DashboardPage} />

      </Switch>
    </Router>
  </div>
);

export default Routes;
