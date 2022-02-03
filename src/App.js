import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// services
import { getStudents } from './services/students.js';

// components
import StudentList from './components/StudentList';
import SearchBar from './components/SearchBar';

// valid search keywords
const searchKeywords = {
    name: 'name',
    tag: 'tag',
};

const App = () => {
    const [students, setStudents] = useState([]);
    const [nameSearch, setNameSearch] = useState('');
    const [tagSearch, setTagSearch] = useState('');

    const handleNameSearch = useCallback(e => setNameSearch(e.target.value), [setNameSearch]);
    const handleTagSearch = useCallback(e => setTagSearch(e.target.value), [setTagSearch]);

    useEffect(() => {
        getStudents()
            .then(({ students }) => setStudents(students))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='app'>
            <SearchBar value={nameSearch} onSearch={handleNameSearch} keyword={searchKeywords.name} />
            <SearchBar value={tagSearch} onSearch={handleTagSearch} keyword={searchKeywords.tag} />
            <StudentList students={students} name={nameSearch} tag={tagSearch} />
        </div>
    );
};

export default App;
