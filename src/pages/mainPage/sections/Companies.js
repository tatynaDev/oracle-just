import React from 'react';
import aiylBank from '../../../assets/img/AiylBank.svg'
import fincaBank from '../../../assets/img/FincaBank.svg'
import barakad from '../../../assets/img/Barakad.svg'
import sabat from '../../../assets/img/sabat.svg'
import geoIntellect from '../../../assets/img/geointellect.svg'
import center from '../../../assets/img/center.svg'
import media from '../../../assets/img/media.svg'
import netex from '../../../assets/img/netex.svg'
import auto from '../../../assets/img/auto.svg'
import coolShop from '../../../assets/img/coolshop.svg'
import ik from '../../../assets/img/ik.svg'
import uni from '../../../assets/img/uni.svg'
import w8 from '../../../assets/img/w8.svg'
import racurs from '../../../assets/img/racurs.svg'
import medServer from '../../../assets/img/medserver.svg'
import artDeco from '../../../assets/img/artdeco.svg'
import kelechek from '../../../assets/img/kelechek.svg'
import fives from '../../../assets/img/555.svg'
import international from '../../../assets/img/international.svg'
import agency from '../../../assets/img/agency.svg'

const Companies = () => {
    return (
        <div className='companies'>
            <div className="container">
                <div className='companies--block'>
                    <img className='companies--block__logo' src={aiylBank} alt=""/>
                    <img className='companies--block__logo' src={fincaBank} alt=""/>
                    <img className='companies--block__logo' src={barakad} alt=""/>
                    <img className='companies--block__logo' src={sabat} alt=""/>
                    <img className='companies--block__logo' src={geoIntellect} alt=""/>
                    <img className='companies--block__logo' src={center} alt=""/>
                    <img className='companies--block__logo' src={media} alt=""/>
                    <img className='companies--block__logo' src={netex} alt=""/>
                    <img className='companies--block__logo small' src={auto} alt=""/>
                    <img className='companies--block__logo' src={coolShop} alt=""/>
                    <img className='companies--block__logo' src={ik} alt=""/>
                    <img className='companies--block__logo' src={uni} alt=""/>
                    <img className='companies--block__logo small' src={w8} alt=""/>
                    <img className='companies--block__logo' src={racurs} alt=""/>
                    <img className='companies--block__logo' src={medServer} alt=""/>
                    <img className='companies--block__logo small' src={artDeco} alt=""/>
                    <img className='companies--block__logo' src={kelechek} alt=""/>
                    <img className='companies--block__logo' src={fives} alt=""/>
                    <img className='companies--block__logo' src={international} alt=""/>
                    <img className='companies--block__logo' src={agency} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Companies;