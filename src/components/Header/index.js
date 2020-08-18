import React from 'react';
import './style.scss';

import SearchForm from '../SearchForm/index';

function Header(props) {
  return (
    <header className="header">
      <SearchForm />
      <h1>This account has <span className="sum">{props.repositories}</span> repositories available</h1>
    </header>
  )
}

export default Header;
