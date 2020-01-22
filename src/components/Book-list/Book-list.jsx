import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../Book-list-item';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';
import { WithBookstoreService } from '../Hoc';
import { fetchBooks } from '../../actions/';
import { compose } from '../../utils';

import './Book-list.scss';

const BookList = ({ books }) => {
  return books.map((book) => {
    return <BookListItem key={book.id} book={book} />;
  });
};

const BookListContainer = (props) => {
  const { books, loading, error } = props;

  useEffect(() => {
    props.fetchBooks();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  return <BookList books={books} />;
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
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  };
};

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
