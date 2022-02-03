import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onSearch, keyword }) => {
    return (
        <div className='search-bar'>
            <input value={value} onChange={onSearch} type='text' placeholder={'Search by ' + keyword} />
        </div>
    );
};

export default SearchBar;
