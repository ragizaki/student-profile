import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <div className='searchBar'>
            <input onChange={e => onSearch(e.target.value)} type='text' placeholder='Search by name' />
        </div>
    );
};

export default SearchBar;
