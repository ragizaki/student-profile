import React, { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import SearchBar from './components/SearchBar';
import { getStudents } from './services/students.js';
import './App.css';

const App = () => {
    const [students, setStudents] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = term => {
        setSearchTerm(term);
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

    useEffect(() => {
        getStudents().then(data => setStudents(data.students));
    }, []);

    return (
        <div className='app'>
            <SearchBar onSearch={handleSearch} />
            <StudentList students={searchTerm.length ? searchResults : students} />
        </div>
    );
};

export default App;
