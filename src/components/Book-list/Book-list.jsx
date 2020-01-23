import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../Book-list-item';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';
import { WithBookstoreService } from '../Hoc';
import { fetchBooks, bookAddedToCart } from '../../actions/';
import { compose } from '../../utils';

import './Book-list.scss';

const BookList = ({ books, onAddedToCart }) => {
  // const onAddedToCart = () => {
  //   console.log('added');
  // };

  return books.map((book) => {
    return (
      <BookListItem
        key={book.id}
        book={book}
        onAddedToCart={() => onAddedToCart(book.id)}
      />
    );
  });
};

const BookListContainer = (props) => {
  const { books, loading, error, onAddedToCart } = props;

  useEffect(() => {
    props.fetchBooks();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  return <BookList books={books} onAddedToCart={onAddedToCart} />;
};

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
