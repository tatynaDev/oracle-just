import React from 'react';

const Numbers = ({number, string}) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '240px'
        }}>
            <h1 className='number' style={{color: 'white'}}>{number}</h1>
            <h2 className='string' style={{color: 'white'}}>{string}</h2>
        </div>
    );
};

export default Numbers;