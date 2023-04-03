import React from 'react';
import './main.scss'
import './mediaMain.scss'
import FirstMain from "./sections/FirstMain";
import Development from "./sections/Development";
import Companies from "./sections/Companies";
import Technologies from "./sections/Technologies";
import Clients from "./sections/Clients";
const MainPage = () => {
    return (
        <div>
            <FirstMain/>
            <Development/>
            <Companies/>
            <Technologies/>
            <Clients/>
        </div>
    );
};

export default MainPage;