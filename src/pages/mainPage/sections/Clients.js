import React from 'react';
import Numbers from "../../../components/UI/Numbers";
import Title from "../../../components/UI/h1";
import {ImQuotesLeft} from "react-icons/im";
import client from '../../../assets/img/clientFeedback.svg'
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import {IoStar} from "react-icons/io5";
import Modal from "../../../components/UI/Modal";
import Form from "../../../components/UI/Form";
import just from '../../../assets/img/Group.svg'

const Clients = () => {
    const star = [<IoStar/>, <IoStar/>, <IoStar/>, <IoStar/>, <IoStar/>]
    return (
        <div className='clients'>
            <div className="clients--top">
                <div className="container">
                    <div className="clients--top__block">
                        <Numbers number={'528'} string={'Satisfaction Clients'}/>
                        <Numbers number={'858'} string={'Projects Completed'}/>
                        <Numbers number={'145'} string={'Partners worldwide'}/>
                        <Numbers number={'+120'} string={'Partners worldwide'}/>
                    </div>
                </div>
            </div>
            <div className="clients--block">
                <Title title={'Что говорят наши клиенты'}/>
                <p className='clients--block__text'>Quis pretium suspendisse.</p>
                <div className='clients--block__feedback'>
                    <h1 className='clients--block__feedback--quotes'><ImQuotesLeft/></h1>
                    <p className='clients--block__feedback--text'>
                        Eu facilisis duis pulvinar dui sapien vestibulum. Praesent sed ridiculus iaculis eget egestas
                        blandit euismod. Ligula senectus egestas cras risus sodales commodo. Enim nec neque sodales quis
                        sit massa posuere. Id eget ultrices tempus sit id donec feugiat. Congue aliquet tristique
                        egestas dictum tincidunt ac. Odio varius sitsapien aliquet aliquam quis et tellus velit
                        bibendum. Quis pretium vitae suspendisse at.
                        Iaculis eu convallis egestas a mattis viverra. Id leo sollicitudin mattiId
                        leo sollicitudin matti
                    </p>
                    <h5 className='clients--block__feedback--name'>Марго Самойлова <span>29.11.2022г</span></h5>
                    <div className='clients--block__feedback--buttons'>
                        <div>{
                            star.map(el => (
                                <button className='star'>{el}</button>
                            ))
                        }</div>
                        <div>
                            <button className='arrow prev'><BsArrowLeftCircle/></button>
                            <button className='arrow next'><BsArrowRightCircle/></button>
                        </div>
                    </div>
                </div>
                <img width={400} className='clients--block__image' src={client} alt=""/>
            </div>
            <div className="clients--questions">
                <div className="container">
                    <h1 className='clients--questions__title'>Часто задаваемые вопросы</h1>
                    <p className='clients--block__text'>Quis pretium suspendisse.</p>
                    <div className='clients--questions__modals'>
                        <div>
                            <Modal title={'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?'}/>
                            <Modal title={'Urna tempus adipiscing quis est sapien in blandit?'}/>
                            <Modal title={' Erat ultrices feugiat pellentesque consectetur nibh elementum?'}/>
                            <Modal title={'Felis id tincidunt pulvinar ac nunc ut nec ornare eget?'}/>
                        </div>
                        <div>
                            <Modal title={'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?'}/>
                            <Modal title={'Cras sit semper at viverra porta. Tellus in risus purus ornare?'}/>
                            <Modal title={'Condimentum ut magna id tortor amet consectetur?'}/>
                            <Modal title={'Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?'}/>
                        </div>
                    </div>
                    <img className={'clients--questions__just'} src={just} alt=""/>
                    <div className='clients--questions__faq'>FAQ</div>
                    <div className='clients--questions__request'>
                        <h1 className='clients--questions__title'>У вас остались вопросы?</h1>
                        <p className='clients--block__text'>Quis pretium suspendisse.</p>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Clients;