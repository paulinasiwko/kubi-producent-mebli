import React from "react";
import {Button, Carousel} from "react-bootstrap";
import './components.css';
import { Link } from "react-router-dom";

export default function HomePageScreen() {

  return (
    <Carousel variant='dark'>
      <Carousel.Item style={{objectFit: 'cover', height: '500px'}}>
        <img
          src={require('../img/kuchnia_na_wymiar.jpg')}
          alt='Kuchnia na wymiar'
          />
        <Carousel.Caption>
          <div className='transbox'>
            <h1 className='title'>Kuchnie na wymiar</h1>
            <Link to={'/main_gallery'}><Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button></Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{objectFit: 'cover', height: '500px'}}>
        <img
          src={require('../img/szafy.jpg')}
          alt='Szafy i garderoby'
          />
        <Carousel.Caption>
          <div className='transbox'>
            <h1 className='title'>Szafy i garderoby</h1>
            <Link to={'/main_gallery'}><Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button></Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{objectFit: 'cover', height: '500px'}}>
        <img
          src={require('../img/lazienka.jpg')}
          alt='Łazienki'
          />
        <Carousel.Caption>
          <div className='transbox'>
            <h1 className='title'>Łazienki</h1>
            <Link to={'/main_gallery'}><Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button></Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{objectFit: 'cover', height: '500px'}}>
        <img
          src={require('../img/meble_pokojowe.jpg')}
          alt='Meble pokojowe'
          />
        <Carousel.Caption>
          <div className='transbox'>
            <h1 className='title'>Meble pokojowe i RTV</h1>
            <Link to={'/main_gallery'}><Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button></Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}