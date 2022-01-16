import React from 'react';
import "./Footer.css";
import phone1 from "../../assets/phone-inc.svg"
import email from "../../assets/email.svg"
import map from "../../assets/map-pin.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_contacts">
                <p>Контакты</p>
                <div className="footer_contacts_phone">
                    <img src={phone1} alt="phone" />
                    <span>0555 000 000</span>
                </div>
                <div className="footer_contacts_phone">
                    <img src={email} alt="email" />
                    <span>Aidar@gmail.com</span>
                </div>
                <div className="footer_contacts_phone">
                    <img src={map} alt="map" />
                    <span>Бишкек, ул. Чокморова, 254-71</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;