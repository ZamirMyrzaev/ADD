import React from 'react';
import "./Footer.css";
import phone1 from "../../assets/phone-inc.svg"
import email from "../../assets/email.svg"
import map from "../../assets/map-pin.svg"

const Footer = () => {
    return (
        <div id='contact' className="footer">
            <div className="footer_contacts">
                <p>Контакты</p>
                <div className="footer_contacts_phone">
                    <img src={phone1} alt="phone" />
                    <span>+996553120399</span>
                </div>
                <div className="footer_contacts_phone">
                    <img src={email} alt="email" />
                    <span>addtechkg@gmail.com</span>
                </div>
                <div className="footer_contacts_phone">
                    <img src={map} alt="map" />
                    <span>Кыргызская Республика, Бишкек, бул.Эркиндик 64Б</span>
                </div>
                <div className='map'>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7e7322579a2e98a3d38c6d25bd7f83bad3f9b887f5042de9e75567da1ca707b8&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
                      </div>
            </div>
        </div>
    );
};

export default Footer;