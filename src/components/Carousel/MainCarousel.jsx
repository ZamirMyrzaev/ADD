import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MainCarousel.css'
import img1 from '../../assets/carousel/first.jpg'
import img2 from '../../assets/carousel/second.jpg'
import img3 from '../../assets/carousel/third.jpg'

const MainCarousel = () => {
    return (
        <div className='carousel'>
          <Carousel variant="light">
          <Carousel.Item>
            <img className='carousel_img' src={img1} />
            <Carousel.Caption>
              <p className='carousel_heading1'>Искусственный интеллект</p>
              <p className='carousel_description'>Искусственный интеллект все больше встраивается во внутренние процессы компаний. 
                Через несколько лет доходы компаний, активно использующих искусственный интеллект 
                (ИИ) в своих технологиях, будут на порядок превосходить по финансовым показателям нетехнологичные компании. 
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} />
            <Carousel.Caption>
              <p className='carousel_heading2'>Aвтоматизированные сервисы</p>
              <p className='carousel_description'>Искусственный интеллект все больше встраивается во внутренние процессы компаний. 
                Через несколько лет доходы компаний, активно использующих искусственный интеллект 
                (ИИ) в своих технологиях, будут на порядок превосходить по финансовым показателям нетехнологичные компании. 
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} />
            <Carousel.Caption>
              <p className='carousel_heading2'>Aвтоматизированные сервисы</p>
              <p className='carousel_description'>Искусственный интеллект все больше встраивается во внутренние процессы компаний. 
                Через несколько лет доходы компаний, активно использующих искусственный интеллект 
                (ИИ) в своих технологиях, будут на порядок превосходить по финансовым показателям нетехнологичные компании. 
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default MainCarousel;