import React from 'react';
import { BookstoreServiceConsumer } from '../Bookstore-service-context';

const WithBookstoreService = () => (Wrapper) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          <Wrapper {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default WithBookstoreService;
