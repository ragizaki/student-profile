import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    return (
        <div className='search-bar'>
            <input onChange={e => onSearch(e.target.value)} type='text' placeholder='Search by name' />
        </div>
    );
};

export default SearchBar;
