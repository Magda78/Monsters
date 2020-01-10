import React from 'react';
import './search-box.css';

const SearchBox = ({placeholder, inputHandler}) => (
    <input className='search' type='search' placeholder={placeholder} onChange={inputHandler}/>
)

export default SearchBox;