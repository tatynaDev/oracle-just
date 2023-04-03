import React from 'react';
import Title from "../../../components/UI/h1";
import Block from "../../../components/UI/Block";
import first from '../../../assets/img/firstIcon.svg'
import second from '../../../assets/img/secondIcon.svg'
import third from '../../../assets/img/thirdIcon.svg'
import fours from '../../../assets/img/foursIcon.svg'
import fives from '../../../assets/img/fivesIcon.svg'
import six from '../../../assets/img/sixsIcon.svg'
import year from '../../../assets/img/Mask group.png'

const Development = () => {
    return (
        <div id='next' className='container'>
            <div className="development">
                <Title
                    title={`Что входит в работу по разработке сайта`}
                />
                <p className='development--des'>Quis pretium vitae suspendisse.</p>
                <div className='development--blocks'>
                    <Block icon={first} text={'Система управления сайтом'} description={'Разработка удобной и заточенной под клиента системы управления сайтом'}/>
                    <Block icon={second} text={`Адаптивный сайт `} description={'Создание адаптивного сайта под все существующие платформы и браузеры'}/>
                    <Block icon={third} text={'Анализ рынка и конкурентов'} description={'Разработка концепции сайта, на основе анализа рынка, конкурентов и тенденций'}/>
                    <Block icon={fours} text={'SEO оптимизация'} description={'Внутренняя SEO оптимизация сайта под поисковики Google и Яндекс'}/>
                    <Block icon={fives} text={'Контент для сайта'} description={'При необходимости написание вкусного, продающего контента для сайта'}/>
                    <Block icon={six} text={'Ux/Ui дизайн'} description={'Разработка концепции сайта, на основе анализа рынка, конкурентов и тенденций'}/>
                </div>
                <div className='development--info'>
                    <div className='development--info__left'>
                        <img width={490} src={year} alt=""/>
                    </div>
                    <div className='development--info__right'>
                        <h1 className='development--info__right--title'>С нами сотрудничают</h1>
                        <p className='development--info__right--des'>Quis pretium suspendisse.</p>
                        <p className='development--info__right--description'>Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin aliquet in morbi fermentum sit aenean. Diam lectus vitae pretium dolor. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Development;