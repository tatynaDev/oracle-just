import React, {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const Modal = ({title}) => {
    const [opened, setOpened] = useState(false)
    const openModal = () => {
        setOpened(true)
        setOpened(!opened)
    }
    return (
        <div className='modal'>
            <div className='modal--view'>
                <button onClick={openModal} style={{color: '#5699E8'}}
                >{opened ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
                <h1 className='modal--view__title'>{title}</h1>
            </div>
            <div className='modal--hidden'
                 style={{
                     display: opened ? 'block' : 'none'
                 }}>
                <p className='modal--hidden__text'>
                    Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis
                    aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas
                    eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id
                    interdum interdum tellus.
                </p>
            </div>
            <hr className='modal--line'/>
        </div>
    );
};

export default Modal;