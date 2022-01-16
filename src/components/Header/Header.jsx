import React from 'react';
import "./Header.css"
// import clock from "../../assets/clock.svg"
// import phone from "../../assets/phone.svg"
// import email from "../../assets/mail.svg"
import logo from "../../assets/Logo.svg"
import MainCarousel from '../Carousel/MainCarousel';


const Header = () => {
    return (
        <div className="header">
            <div className="header_main">
                <img src={logo} alt="logo" />
                <div className='header_main_right'>
                <span>О нас</span>
                <span>Профайл</span>
                <span>Команда</span>
                <span>Контакты</span>             
                </div>
                <div className="header_main_line"></div>
            </div>
            <MainCarousel/>
            {/* <div className="header_footer"></div> */}
        </div>
    );
};

export default Header;




{/* <div className="header_nav">
    <div className="header_nav_contacts">
        <div className="header_nav_contacts_left">
            <div className="header_nav_contacts_left_clock">
                <img src={clock} alt="clock" />
                <p>Режим работы <br /> <span>Понедельник-пятница: 9:00 - 18:00</span></p>
            </div>
            <div className="header_nav_contacts_left_phone">
                <img src={phone} alt="phone" />
                <p>Телефон <br /> <span>0555 000 000</span></p>
            </div>
        </div>
        <div className="header_nav_contacts_right">
            <div className="header_nav_contacts_right_email">
                <span>Написать на эл.почту</span>
                <img src={email} alt="email" />
            </div>
        </div>
    </div>
</div> */}