import React from 'react';
import './Book-list-item.scss';

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-list-item__image">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-list-item__details">
        <div className="book-list-item__title">{title}</div>
        <div className="book-list-item__author">Автор(ы): {author}</div>
        <div className="book-list-item__price">Цена: {price} руб.</div>
        <button className="btn btn-info add-to-cart">Добавить в корзину</button>
      </div>
    </div>
  );
};

export default BookListItem;
