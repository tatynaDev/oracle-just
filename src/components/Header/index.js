import React from 'react';
import './header.scss'
import {NavLink} from "react-router-dom";
import Logo from "../UI/Logo";

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
               <div className="header-block">
                   <div className="header-block--logo">
                       <Logo/>
                       <p className='header-block--logo__title'>Разработка сайтов и
                           мобильных приложений
                           в Кыргыстане и по СНГ</p>
                   </div>
                   <div className="header--nav">
                       <ul>
                           <li><NavLink to='/'>Главная</NavLink></li>
                           <li><NavLink to='/about'>О компании</NavLink></li>
                           <li><NavLink to='/services'>Услуги и цены</NavLink></li>
                           <li><NavLink to='/projects'>Проекты</NavLink></li>
                           <li><NavLink to='/contacts'>Контакты</NavLink></li>
                       </ul>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Header;