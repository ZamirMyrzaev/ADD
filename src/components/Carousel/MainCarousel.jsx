import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MainCarousel.css'
import img1 from '../../assets/carousel/first1.png'
import img2 from '../../assets/carousel/second.jpg'
import img3 from '../../assets/carousel/third2.jpg'

const MainCarousel = () => {
    return (
        <div className='carousel'>
          <Carousel variant="dark">
          <Carousel.Item>
            <img className='carousel_img1' src={img1} />
            <Carousel.Caption>
              <p className='carousel_heading1'>ADD Technologies</p>
              <p className='carousel_description'>ADD Technologies – это компания-сообщество программистов и профессионалов в своей сфере. 
              Мы предоставляем полный пакет услуг от автоматизации и анализа бизнес-процессов до разработки программного обеспечения, 
              внедрения и сопровождения информационных систем. ADD Technologies занимается разработкой информационных систем, веб-приложений, 
              баз данных, внутренних корпоративных порталов, систем управления персоналом, систем документооборота, систем по учету материальных 
              ценностей, систем по управлению отношениями с клиентами (CRM - систем) и т.д. <br/> На сегодняшний день наша команда специалистов 
              является одной из ведущих по разработке программного обеспечения в Кыргызстане в разных сферах бизнеса и государственного управления. 
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel_img2' src={img2} />
            <Carousel.Caption>
              <p className='carousel_heading2'>Ценности</p>
              <p className='carousel_description2'>Мы всегда стараемся вести работу в интересах Заказчика, разрабатывая программное обеспечение так, 
              чтобы оно было удобным для пользователей и приносило максимальную пользу и выгоду, при этом соблюдая экономические интересы заказчиков 
              и предоставляя всю необходимую документацию в рамках проекта - прозрачную смету и развернутую отчетность о проделанной работе.
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel_img1' src={img3} />
            <Carousel.Caption>
              <p className='carousel_heading1'>Опыт </p>
              <p className='carousel_description'>Наш многолетний успешный опыт в создании программных продуктов позволяет нам достичь нужных результатов 
              в Ваших желаниях и представлениях, так как мы знаем как находить решения поставленным задачам и как объединить и автоматизировать 
              определенные процессы. Мы предоставляем полный пакет услуг от автоматизации и анализа бизнес-процессов до разработки программного обеспечения, 
              внедрения и сопровождения информационных систем. ADD Technologies занимается разработкой информационных систем, веб-приложений, баз данных, 
              внутренних корпоративных порталов, систем управления персоналом, систем документооборота, систем по учету материальных ценностей, систем по 
              управлению отношениями с клиентами (CRM - систем) и т.д.
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default MainCarousel;