import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../organisms/sidebar/Sidebar';
import Home from './Home';
import Agenda from './Agenda';

const Routes = () => {
  return (
    <Fragment>
      <Sidebar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/agenda" exact component={Agenda} />
      </Switch>
    </Fragment>
  );
}

export default Routes;
