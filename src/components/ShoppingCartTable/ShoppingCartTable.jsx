import React from 'react';

import './ShoppingCartTable.scss';

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete
}) => {
  return (
    <div className="shopping-cart-table">
      <h2>Ваш заказ: </h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Наименование</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>тест</td>
            <td>1</td>
            <td>200 руб.</td>
            <td>
              <button className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
              </button>
              <button className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">Сумма: 200 руб.</div>
    </div>
  );
};

export default ShoppingCartTable;
