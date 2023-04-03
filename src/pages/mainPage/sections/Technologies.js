import React, {useState} from 'react';
import logos from '../../../assets/img/technologies.svg'
import TabTitle from "../../../components/UI/TabTitle";
import TabBlock from "../../../components/UI/TabBlock";
import tab1 from '../../../assets/img/tab1.svg'
import tab2 from '../../../assets/img/tab2.svg'
import tab3 from '../../../assets/img/tab3.svg'
import {Link} from "react-router-dom";

const Technologies = () => {

    const [selected, setSelected] = useState('mob')

    return (
        <div className='container'>
            <div className="technologies">
                <h1 className='technologies--title'>Технологии,<br/>которые мы используем</h1>
                <h3 className='technologies--des'>Quis pretium vitae suspendisse.</h3>
                <img className='technologies--logos' src={logos} alt=""/>
                <h1 className='technologies--title'>Наши выполненные проекты</h1>
                <h3 className='technologies--des'>Quis pretium vitae suspendisse.</h3>

                <div className='technologies--projects'>
                    <ul>
                        <TabTitle
                            text={'Мобильные приложения'}
                            selected={selected}
                            setSelected={setSelected}
                            state={'mob'}/>
                        <TabTitle
                            text={'Веб сайты'}
                            selected={selected}
                            setSelected={setSelected}
                        state={'site'}/>
                        <TabTitle
                            text={'Landing  Page'}
                            selected={selected}
                            setSelected={setSelected}
                        state={'land'}/>
                        <TabTitle
                            text={'CRM системы'}
                            selected={selected}
                            setSelected={setSelected}
                        state={'crm'}/>
                        <TabTitle
                            text={'Веб ресурсы'}
                            selected={selected}
                            setSelected={setSelected}
                        state={'res'}/>
                        <TabTitle
                            text={'Интернет магазины'}
                            selected={selected}
                            setSelected={setSelected}
                        state={'shop'}/>
                    </ul>
                    <div className='technologies--projects__tabs'>
                        <TabBlock
                            selected={selected}
                            image={tab1}
                            title={`Мобильное приложение`}
                            titleS={'Ош online'}
                            des={'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.'}
                        />
                        <TabBlock
                            selected={selected}
                            image={tab2}
                            title={`Мобильное приложение`}
                            titleS={'OPOP'}
                            des={'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.'}
                        />
                        <TabBlock
                            selected={selected}
                            image={tab3}
                            title={`Мобильное приложение`}
                            titleS={'batbat'}
                            des={'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.'}
                        />
                    </div>
                    <Link className='technologies--projects__view' to={'#'}>Смотреть другие работы</Link>
                </div>
            </div>
        </div>
    );
};

export default Technologies;