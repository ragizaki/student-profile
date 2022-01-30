import React from 'react';
import StudentCard from './StudentCard';
import './StudentList.css';

const StudentList = ({ students }) => {
    return (
        <div className='card-list'>
            {students.map((student, key) => (
                <StudentCard key={key} student={student} />
            ))}
        </div>
    );
};

export default StudentList;
