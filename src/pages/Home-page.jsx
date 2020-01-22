import React from 'react';
import BookListContainer from '../components/Book-list';
import ShoppingCartTable from '../components/ShoppingCartTable';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Welcome to ReStore!</h1>
        <BookListContainer />
        <ShoppingCartTable />
      </div>
    </>
  );
};

export default HomePage;
