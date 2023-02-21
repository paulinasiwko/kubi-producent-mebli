import React from "react";
import {Button, Carousel} from "react-bootstrap";
import './components.css';

export default function HomePageScreen() {

  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <img
          src={require('../img/kuchnia_na_wymiar.jpg')}
          alt='Kuchnia na wymiar'
          className='mainPhoto'/>
        <Carousel.Caption>
          <div className='transbox'>
            <h1 className='title'>Kuchnie na wymiar</h1>
            <Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require('../img/szafy.jpg')}
          alt='Szafy i garderoby'
          className='mainPhoto'/>
        <Carousel.Caption>
          <div className='transbox'>
            <h1 className='title'>Szafy i garderoby</h1>
            <Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require('../img/lazienka.jpg')}
          alt='Łazienki'
          className='mainPhoto'/>
        <Carousel.Caption>
          <div className='transbox'>
            <h1 className='title'>Łazienki</h1>
            <Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}