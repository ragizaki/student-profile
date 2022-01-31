import React, { useState, useEffect } from 'react';
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
    const [searchResults, setSearchResults] = useState([]);
    const [nameSearch, setNameSearch] = useState('');
    const [tagSearch, setTagSearch] = useState('');

    const onNameSearch = term => {
        setNameSearch(term);
        if (term) {
            const newStudents = students.filter(({ firstName, lastName }) => {
                const fullName = `${firstName} ${lastName}`;
                return fullName.toLowerCase().includes(term.toLowerCase());
            });
            setSearchResults(newStudents);
        } else {
            setSearchResults(students);
        }
    };

    const onTagSearch = term => {
        setTagSearch(term);
    };

    useEffect(() => {
        getStudents()
            .then(data => setStudents(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='app'>
            <SearchBar onSearch={onNameSearch} keyword={searchKeywords.name} />
            <SearchBar onSearch={onTagSearch} keyword={searchKeywords.tag} />
            <StudentList students={nameSearch.length ? searchResults : students} />
        </div>
    );
};

export default App;
