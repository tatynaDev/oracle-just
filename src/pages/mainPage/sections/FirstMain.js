import React from 'react';
import key from '../../../assets/img/key.svg'
import key1 from '../../../assets/img/key1.svg'
import {IoIosArrowDown} from "react-icons/io";

const FirstMain = () => {
    return (
        <div className='main'>
            <h1 className='main--title'>
                <span>Dui sapien aliquet</span>
                <span className='main--title__img'><img src={key} alt="#"/></span>
                <span>aliquam</span>
                <span className='main--title__img'><img src={key1} alt="#"/></span>
                <span>tellus velit bibendum.</span>
            </h1>
            <p className='main--text'>
                Quis fringilla convallis et
                vitae volutpat at porttitor. Est
                tincidunt massa aliquam sed enim
                rhoncus. Id nullam sollicitudin aliquet
                in morbi fermentum sit aenean. Diam
                lectus vitae pretium dolor.
            </p>
            <button className='main--btn'>Связаться с нами</button>
            <a href='#next' className='main--circle'>
                <IoIosArrowDown className='main--circle__arrow'/>
            </a>
        </div>
    );
};

export default FirstMain;