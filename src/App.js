import React, { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import { getStudents } from './services/students.js';

const App = () => {
    const [students, setStudents] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = term => {
        setSearchTerm(term);
        if (term) {
            const newStudents = students.filter(({ firstName, lastName }) => {
                const fullName = `${firstName} ${lastName}`;
                return fullName.includes(term);
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
        <div>
            <StudentList onSearch={handleSearch} students={searchTerm.length < 1 ? students : searchResults} />
        </div>
    );
};

export default App;
