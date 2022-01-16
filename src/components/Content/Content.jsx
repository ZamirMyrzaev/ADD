import React from 'react';
import "./Content.css"
import img_main from '../../assets/content.png'
// import logo1 from '../../assets/Logo.svg'
import arch from '../../assets/icon/arch.png'
import front from '../../assets/icon/front.png'
import backend from '../../assets/icon/backend.png'
import design from '../../assets/icon/design.png'
import manager from '../../assets/icon/manager.png'
import analyst from '../../assets/icon/analyst.png'


const Content = () => {
    return (
        <div>
            <div className="content">
                <div className="content_services">
                    <div className="content_services_main1">
                        <img src={img_main} alt="content" />
                        {/* <img src={logo1} alt="logo" /> */}
                    </div>
                    <div className="content_services_main2">
                    <p>Предоставляем весь спектр услуг <br/>по созданию информационных систем</p>
                    <ul>
                        <li>обследование объекта автоматизации</li>
                        <li>формирование требований</li>
                        <li>проведение бизнес и системного анализа</li>
                        <li>разработка архитектуры</li>
                        <li>реализация информационной системы и запуск в промышленную эксплуатацию</li>
                    </ul>
                    <button>Связаться с нами</button>
                    </div>
                </div>
                <div className="content_services1">
                   
                    <div className="content_services1_block1">
                    <p>Web Разработка</p>
                    <ul>
                        <li>Сайт-визитка</li>
                        <li>Корпоративный информационный web-сайт</li>
                        <li>Корпоративный имиджевый web-сайт</li>
                        <li>Интернет-магазин</li>
                        <li>Информационный сайт</li>
                        <li>Игровой портал</li>
                        <li>Персональный проект</li>
                    </ul>
                    </div>
                
                <div className="content_services1_block2">
                    <p>Разработка приложений и ПО</p>
                    <ul>
                        <li>На платформах Android</li>
                        <li>Нa платформах IOS</li>
                        <li>Информационые cистемы </li>
                        <li>ERP системы</li>
                        <li>CRM системы</li>
                        <li>Персональные системы</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className='team'>
                <div className='team_head'>
                    <p>Разносторонняя и высоко квалифицированная команда специалистов в своих сферах</p>
                </div>
                <div className='team_about'>
                    <div className='team_about_prof'>
                        <img src={arch} alt="architect icon" />
                        <p>Архитектор</p>
                    </div>
                    <div className='team_about_prof'>
                        <img src={backend} alt="architect icon" />
                        <p>Back-end Разработчики </p>
                    </div>
                    <div className='team_about_prof'>
                        <img src={front} alt="frontend icon" />
                        <p>Front-end разработчики</p>
                    </div>
                </div>
                <div className='team_about'>
                    <div className='team_about_prof'>
                        <img src={design} alt="architect icon" />
                        <p>Дизайнер</p>
                    </div>
                    <div className='team_about_prof'>
                        <img src={manager} alt="architect icon" />
                        <p>Проектный менеджер</p>
                    </div>
                    <div className='team_about_prof'>
                        <img src={analyst} alt="frontend icon" />
                        <p>Бизнес аналитик</p>
                    </div>
                </div>
                <div className="content_services_text">
                    <span>
                        Мы станем вашим партнером в области анализа, консультирования и управления инновациями в бизнесе, 
                        в котором внедрение цифровых технологий имеет решающее значение. Наши специалисты обладают большим 
                        опытом в проведении оперативных и масштабных изменений с помощью цифровых технологий.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Content;