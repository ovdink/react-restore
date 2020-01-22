import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { WithBookstoreService } from '../Hoc';
import { HomePage, CartPage } from '../../pages';

import Header from '../Header';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header numItems={2} total={1500} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
};

export default WithBookstoreService()(App);
