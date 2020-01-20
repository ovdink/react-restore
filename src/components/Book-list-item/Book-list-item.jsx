import React from 'react';
import './Book-list-item.scss';

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <div className="book-list-item">
      <span>{title}</span>
      <span>{author}</span>
    </div>
  );
};

export default BookListItem;
