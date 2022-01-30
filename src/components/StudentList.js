import React from 'react';
import StudentCard from './StudentCard';
import SearchBar from './StudentCard';
import './StudentList.css';

const StudentList = ({ students, onSearch }) => {
    return (
        <div className='container'>
            <SearchBar onSearch={onSearch} />
            <section className='student-list'>
                {students.map((student, idx) => (
                    <StudentCard key={idx} student={student} />
                ))}
            </section>
        </div>
    );
};

export default StudentList;
