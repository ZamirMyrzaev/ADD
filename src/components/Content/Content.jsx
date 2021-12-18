import React from 'react';
import "./Content.css"
import icon from "../../assets/icon.svg"

const Content = () => {
    return (
        <div className="cont">
        <div className="content">
            <div className="content_card">
                <img src={icon} alt="icon" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo ipsum eligendi aperiam quasi placeat, repellat atque amet recusandae! 
                </p>
            </div>
            <div className="content_card">
                <img src={icon} alt="icon" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo ipsum eligendi aperiam quasi placeat, repellat atque amet recusandae! 
                </p>
            </div>
            <div className="content_card">
                <img src={icon} alt="icon" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo ipsum eligendi aperiam quasi placeat, repellat atque amet recusandae! 
                </p>
            </div>
            <div className="content_card">
                <img src={icon} alt="icon" />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo ipsum eligendi aperiam quasi placeat, repellat atque amet recusandae! 
                </p>
            </div>
            <div className="content_services">
                <span>Наши услуги</span>
                <p> Мы предлагаем полный спектр современных IT-услуг – от стратегического консалтинга в сфере технологий и оптимизации 
                    внутренних процессов до закупки необходимого оборудования и проведения обучения.
                    Мы – команда высококвалифицированных и целеустремленных разработчиков программного обеспечения, 
                    которые умеют проектировать, внедрять и поддерживать новые и существующие IT-решения для мобильных и веб-систем. 
                    Наши эксперты разрабатывают безопасные и эффективные решения, имеющие высокий уровень качества.
                </p>
            </div>
            <div className="content_services_cards">
                <div className="content_services_cards_main">
                        <h2>IT-консалтинг</h2> 
                    <p>
                        Мы станем вашим партнером в области анализа, консультирования и управления инновациями в бизнесе, 
                        в котором внедрение цифровых технологий имеет решающее значение. Наши специалисты обладают большим 
                        опытом в проведении оперативных и масштабных изменений с помощью цифровых технологий.
                    </p>
                </div>
                <div className="content_services_cards_main">
                    <h2>Разработка ПО</h2> 
                    <p>
                        Мы занимаемся разработкой программного обеспечения и предлагаем полный пакет услуг по разработке, 
                        внедрению и сопровождению программных решений различной сложности и масштаба. Знания и опыт наших 
                        ведущих IT-специалистов позволяют «ITS-Technologies» качественно выполнять полный цикл работ – от 
                        анализа технологической ситуации в вашей организации и написания технического задания до полномасштабной. 
                    </p>
                </div>
                <div className="content_services_cards_main">
                    <h2>Поставка оборудования</h2> 
                    <p>
                        Поставка оборудования ведущих компаний мира - компьютерной техники, телекоммуникационного, периферийного 
                        и сетевого оборудования, инфраструктурного программного обеспечения, расходных материалов и товаров для 
                        интерактивных развлечений. При необходимости можем организовать круглосуточное гарантийное и послегарантийное 
                        сервисное обслуживание.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Content;