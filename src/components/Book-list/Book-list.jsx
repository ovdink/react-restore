import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../Book-list-item';
import { WithBookstoreService } from '../Hoc';
import { booksLoaded } from '../../actions/index';
import { compose } from '../../utils';

import './Book-list.scss';

const BookList = (props) => {
  const { books } = props;

  useEffect(() => {
    // 1 получить данные
    const { bookstoreService } = props;
    const data = bookstoreService.getBooks();
    // 2 отправить данные
    props.booksLoaded(data);
  }, []);

  return books.map((book) => {
    return <BookListItem key={book.id} book={book} />;
  });
};

const mapStateToProps = ({ books }) => {
  return {
    books
  };
};

const mapDispatchToProps = {
  booksLoaded // обернет в bindActionCreators с dispatch
};

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
