import React from 'react';
import logo from "../../assets/img/logo.svg";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to='/'>
            <img src={logo} alt="logo"/>
        </NavLink>

    );
};

export default Logo;