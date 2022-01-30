import React from 'react';
import './StudentCard.css';

const fullName = (first, last) => {
    return `${first} ${last}`;
};

const average = grades => {
    const toInts = grades.map(Number);
    return toInts.reduce((acc, grade) => acc + grade) / toInts.length;
};

const StudentCard = ({ student }) => {
    const { pic, firstName, lastName, email, company, skill, grades } = student;

    return (
        <div className='card'>
            <main className='user'>
                <div className='user-avatar'>
                    <img className='user-picture' src={pic} alt='student avatar' />
                </div>
                <div className='user-description'>
                    <strong>
                        <h2 className='user-name'>{fullName(firstName, lastName)}</h2>
                    </strong>
                    <section className='user-caption'>
                        <p>Email: {email}</p>
                        <p>Company: {company}</p>
                        <p>Skill: {skill}</p>
                        <p>Average: {average(grades)}%</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default StudentCard;
