import React from 'react';
import "./Footer.css";
import logo from "../../assets/logo.jpg"
import phone1 from "../../assets/phone-inc.svg"
import email from "../../assets/email.svg"
import map from "../../assets/map-pin.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="header_footer"></div>
            <div className="header_main">
                <img src={logo} alt="logo" />
            </div>
            <div className="footer_contacts">
                <p>Контакты</p>
                <div className="footer_contacts_phone">
                    <img src={phone1} alt="phone" />
                    <span>0555 000 000</span>
                </div>
                <div>
                    <img src={email} alt="email" />
                    <span>Aidar@gmail.com</span>
                </div>
                <div>
                    <img src={map} alt="map" />
                    <span>Бишкек, ул. Чокморова, 254-71</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;