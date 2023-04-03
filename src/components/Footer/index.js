import React from 'react';
import './footer.scss'
import {Link} from "react-router-dom";
import {RiWhatsappFill} from "react-icons/ri";
import {FaTelegramPlane} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {GrInstagram} from "react-icons/gr";
import Logo from "../UI/Logo";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer--content">
                    <Logo/>
                    <div className='footer--content__info'>
                        <div className='first'>
                            <p style={{color:'#5699E8'}}>Телефон:</p>
                            <a className='tel tel1' href='tel:+996 709 683 738'>+996 709 683 738</a>
                            <a className='tel tel2' href='tel:+996 557 978 715'>+996 557 978 715</a>
                            <div className='first-flex'>
                                <div>
                                    <p style={{color:'white'}}>Пишите нам в мессенджерах</p>
                                    <Link className='first-flex__icon' to='#'><RiWhatsappFill/></Link>
                                    <Link className='first-flex__icon' to='#'><FaTelegramPlane/></Link>
                                </div>
                                <div>
                                    <p style={{color:'white'}}>Мы в <br/>социальных сетях</p>
                                    <Link className='first-flex__icon' to='#'><BsGithub/></Link>
                                    <Link className='first-flex__icon' to='#'><GrInstagram/></Link>
                                    <Link className='first-flex__icon' to='#'>Bе</Link>
                                </div>
                            </div>
                        </div>

                        <div className='second'>
                            <div>
                                <p className='second--title'>Адрес:</p>
                                <p className='second--text'>Кыргызстан, г. Бишкек, ул. Тимирязева 80</p>
                            </div>
                            <div className='second-block'>
                                <p className='second--title'>E-mail:</p>
                                <p className='second--text'>contact@odigital.dev</p>
                            </div>
                            <div className='second-block'>
                                <p className='second--title'>График работы:</p>
                                <p className='second--text'>Ежедненвно: 10:00 - 20:00</p>
                            </div>
                        </div>
                        <div className='third'>
                            <p className='second--title'>Мы на карте</p>
                            <div >
                                <iframe className='third--card'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187098.4508122469!2d74.46559366775797!3d42.88522618377302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec86a8bb5b873%3A0x222c5538e7365c36!2z0LPQvtGA0L7QtCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1680259383753!5m2!1sru!2skg"
                                        allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;