import React from 'react';

import RepositoryList from '../RepositoryList/index';
import './style.scss';

function Main(props) {
  return (
    <main className="main-area">
      <RepositoryList repositories={props.repositories} />
    </main>
  )
}

export default Main;
