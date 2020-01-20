import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { WithBookstoreService } from '../Hoc';
import { HomePage, CartPage } from '../../pages';

import Spinner from '../Spinner';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <ul className="header">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
};

export default WithBookstoreService()(App);
