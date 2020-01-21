import React from 'react';
import BookList from '../components/Book-list';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1>Welcome to ReStore!</h1>
        <BookList />
      </div>
    </>
  );
};

export default HomePage;
