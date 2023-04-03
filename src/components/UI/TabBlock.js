import React from 'react';

const TabBlock = ({selected, image, title, des, titleS}) => {
    return (
        <div className='tab'>
            <div className='tab--top'>
                <img width={190} src={image} alt=""/>
            </div>
            <div className='tab--bottom'>
                <h1 className='tab--bottom__title'><span>{title}</span> <span style={{
                    color: '#E47F53'
                }}>{titleS}</span></h1>
                <p className='tab--bottom__des'>{des}</p>
                <hr className='tab--bottom__line'/>
                <button className='tab--bottom__btn'>Смотреть приложение</button>
            </div>
        </div>
    );
};

export default TabBlock;