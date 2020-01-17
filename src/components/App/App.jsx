import React from 'react';
import Api from '../../services/bookstore-service';

import Spinner from '../Spinner';
import ErrorBoundary from '../Error-boundary';

import './App.scss';

const App = () => {
  const api = new Api();
  return (
    <div className="app">
      <Spinner />
      <ErrorBoundary />
    </div>
  );
};

export default App;
