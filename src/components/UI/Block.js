import React from 'react';

const Block = ({icon, text, description}) => {
    return (
        <div className='development--blocks__block'>
            <div>
                <img src={icon} alt="#"/>
            </div>
            <h2 className='block-text'>{text}</h2>
            <p className='block-des'>{description}</p>
        </div>
    );
};

export default Block;