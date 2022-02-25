import React, { useState } from 'react';
import StudentCard from '../StudentCard/StudentCard';

const StudentList = ({ students, name, tag }) => {
    const [tagStudents, setTagStudents] = useState([]);

    const retrieveStudent = (id, tags) => {
        const [student] = students.filter(s => s.id === id);
        student.tags = tags;
        const newStudents = [...tagStudents, student];
        const uniq = Array.from(new Set(newStudents));
        setTagStudents(uniq);
    };
    return (
        <div className='card-list'>
            {students
                .filter(student => {
                    const fullName = `${student.firstName} ${student.lastName}`;
                    return fullName.toLowerCase().includes(name.toLowerCase());
                })
                .map(student => (
                    <StudentCard key={student.id} student={student} getTags={retrieveStudent} />
                ))}
        </div>
    );
};

export default StudentList;
