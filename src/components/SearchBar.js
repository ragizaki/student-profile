import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, keyword }) => {
    return (
        <div className='search-bar'>
            <input onChange={e => onSearch(e.target.value)} type='text' placeholder={'Search by ' + keyword} />
        </div>
    );
};

export default SearchBar;
