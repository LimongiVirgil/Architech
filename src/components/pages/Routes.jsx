import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../organisms/sidebar/Sidebar';
import Home from './home/Home';
import Agenda from './Agenda';

const Routes = () => {
  return (
    <>
      <Sidebar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/agenda" exact component={Agenda} />
      </Switch>
    </>
  );
}

export default Routes;
