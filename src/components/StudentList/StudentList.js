import React from 'react';
import StudentCard from '../StudentCard/StudentCard';

const StudentList = ({ students, name, tag }) => {
    return (
        <div className='card-list'>
            {students
                .filter(({ firstName, lastName }) => {
                    const fullName = `${firstName} ${lastName}`;
                    return fullName.toLowerCase().includes(name.toLowerCase());
                })
                .map(student => (
                    <StudentCard key={student.id} student={student} />
                ))}
        </div>
    );
};

export default StudentList;
