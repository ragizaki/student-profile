import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './StudentTags.css';

const StudentTags = React.memo(({ tags, handleKeyPress, handleTagDelete, tag }) => {
    return (
        <div className='tag-form'>
            <ul className='tag-collection'>
                {tags.map(({ text, id }) => (
                    <li className='tag-entry' key={id}>
                        {text}
                        <FaTimes onClick={() => handleTagDelete(id)} className='tag-remove-icon' />
                    </li>
                ))}
            </ul>
            <input
                value={tag}
                onChange={e => setTag(e.target.value)}
                onKeyDown={handleKeyPress}
                className='tag-input'
                type='text'
                placeholder='Add a tag'
            />
        </div>
    );
});

export default StudentTags;
