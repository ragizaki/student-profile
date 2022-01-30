import React, { useState } from 'react';
import './StudentCard.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const fullName = (first, last) => {
    return `${first} ${last}`;
};

const average = grades => {
    const toInts = grades.map(Number);
    return toInts.reduce((acc, grade) => acc + grade) / toInts.length;
};

const StudentCard = ({ student }) => {
    const [openCard, setOpenCard] = useState(false);
    const { pic, firstName, lastName, email, company, skill, grades } = student;

    const renderTestScores = grades => {
        return (
            <div className='user-grades'>
                {grades.map((grade, num) => {
                    const toInt = Number(grade);
                    return (
                        <p className='user-grade'>
                            Test {++num}: {toInt}%
                        </p>
                    );
                })}
            </div>
        );
    };

    const handleIconClick = () => {
        setOpenCard(prevOpenCard => !prevOpenCard);
    };

    return (
        <div className='card'>
            <div className='user-avatar'>
                <img className='user-picture' src={pic} alt='student avatar' />
            </div>
            <header className='user-header'>
                <h2 className='user-name'>{fullName(firstName, lastName)}</h2>
                {openCard ? (
                    <AiOutlineMinus onClick={handleIconClick} className='accordion-icon' />
                ) : (
                    <AiOutlinePlus onClick={handleIconClick} className='accordion-icon' />
                )}
            </header>
            <section className='user-description'>
                <p className='user-point'>Email: {email}</p>
                <p className='user-point'>Company: {company}</p>
                <p className='user-point'>Skill: {skill}</p>
                <p className='user-point'>Average: {average(grades)}%</p>
                {openCard && renderTestScores(grades)}
            </section>
        </div>
    );
};

export default StudentCard;
