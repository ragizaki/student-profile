import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './StudentTags.css';

const StudentTags = ({ tags, handleKeyPress, handleTagDelete }) => {
    return (
        <div className='tag-form'>
            <ul className='tag-collection'>
                {tags.map((tag, key) => (
                    <li className='tag-entry' key={key}>
                        {tag}
                        <FaTimes onClick={handleTagDelete} className='tag-remove-icon' />
                    </li>
                ))}
            </ul>
            <input onKeyDown={handleKeyPress} className='tag-input' type='text' placeholder='Add a tag' />
        </div>
    );
};

export default StudentTags;
