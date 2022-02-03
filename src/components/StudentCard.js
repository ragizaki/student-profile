import React, { useState, useMemo, useCallback } from 'react';
import StudentTags from './StudentTags';
import './StudentCard.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

/* Helper function for rendering user average */
const average = grades => {
    const toInts = grades.map(Number);
    return toInts.reduce((acc, grade) => acc + grade) / toInts.length;
};

const StudentCard = React.memo(({ student }) => {
    const [openCard, setOpenCard] = useState(false);
    const [tags, setTags] = useState([]);
    const { pic, firstName, lastName, email, company, skill, grades } = student;

    const memoizedAverage = useMemo(() => {
        return average(grades);
    }, [grades]);

    const renderTestScores = grades => (
        <div className='user-grades'>
            {grades.map((grade, num) => {
                const toInt = Number(grade);
                return (
                    <p className='user-grade' key={num}>
                        Test {++num}: {toInt}%
                    </p>
                );
            })}
        </div>
    );

    const handleIconClick = useCallback(() => setOpenCard(prevCard => !prevCard), [setOpenCard]);

    const handleKeyPress = e => {
        const userTag = e.target.value;
        if (e.key === 'Enter' && userTag) {
            if (tags.find(({ text }) => text.toLowerCase() === userTag.toLowerCase())) {
                return;
            }
            setTags([...tags, { text: userTag, id: tags.length + 1 }]);
            e.target.value = '';
        }
    };

    const handleTagDelete = tagId => {
        const tagsToKeep = tags.filter(tag => {
            return tag.id !== tagId;
        });
        setTags(tagsToKeep);
    };

    return (
        <div className='card'>
            <div className='user-avatar'>
                <img className='user-picture' src={pic} alt='student avatar' />
            </div>
            <header className='user-header'>
                <h2 className='user-name'>{`${firstName} ${lastName}`}</h2>
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
                <p className='user-point'>Average: {memoizedAverage}%</p>
                {openCard && renderTestScores(grades)}
                <StudentTags tags={tags} handleKeyPress={handleKeyPress} handleTagDelete={handleTagDelete} />
            </section>
        </div>
    );
});

export default StudentCard;
