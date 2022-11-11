import React from 'react';

function UISection({ heading, content }) {
    return (
        <div>
            <div className='text-2xl font-semibold mb-3'>{heading}</div>
            <div>{content}</div>
        </div>
    );
}

export default UISection;