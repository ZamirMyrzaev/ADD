import React from 'react';
import "./Header.css"
import clock from "../../assets/clock.svg"
import phone from "../../assets/phone.svg"
import email from "../../assets/mail.svg"
import logo from "../../assets/logo.jpg"

const Header = () => {
    return (
        <div className="header">
            <div className="header_nav">
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
            </div>
            <div className="header_main">
                <div className="header_main_line"></div>
                <img src={logo} alt="logo" />
                <span>Главная страница</span>
                <div className="header_main_line"></div>
            </div>
            <div className="header_content">
                <p>Искусственный интеллект и автоматизированные сервисы</p>
                <p>Искусственный интеллект все больше встраивается во внутренние процессы компаний. Через несколько лет доходы компаний, активно использующих искусственный интеллект (ИИ) в своих технологиях, будут на порядок превосходить по финансовым показателям нетехнологичные компании. По данным Форбс, уже сейчас 30 процентов американцев используют технологии ИИ в повседневной жизни. И эта статистика будет только расти.</p>
            </div>
            <div className="header_footer"></div>
        </div>
    );
};

export default Header;