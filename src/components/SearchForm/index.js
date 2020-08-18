import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function SearchForm() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSumbit(event) {
    event.preventDefault();
    navigate('/' + search.toLowerCase().trim());
  }
  
  return (
    <form className="searchform" onSubmit={handleSumbit}>
      <input 
        placeholder='Enter organization name...'
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}   
      />
    </form>
  )
}

export default SearchForm;
