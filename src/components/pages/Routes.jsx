import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../organisms/sidebar/Sidebar';
import Home from './Home';

const Routes = () => {
  return (
    <Fragment>
      <Sidebar/>
      <Switch>
        <Route path="/home" exact component={Home} />
      </Switch>
  </Fragment>
  );
}

export default Routes;
