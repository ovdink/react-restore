import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = ({ numItems, total }) => {
  return (
    <header className="header ">
      <Link to="/">
        <div className="header__logo">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="header__cart-icon">
          <i className=" fa fa-shopping-cart" />
          {numItems} items ({total} руб.)
        </div>
      </Link>
    </header>
  );
};

export default Header;
