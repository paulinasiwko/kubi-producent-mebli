import React from "react";
import {Button, Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
import './components.css';
export default function HomePageCarousel() {
  return (
    <>
      <Carousel variant='dark'>
      <Carousel.Item className='carouselItem'>
        <img
          className='d-block w-100 h-100'
          src={require('../img/background/kitchen_carousel.jpg')}
          alt='Kuchnia na wymiar'
        />
        <Carousel.Caption>
          <div className='m-auto carouselTransbox'>
            <h2 className='carouselTitle'>Kuchnie na wymiar</h2>
            <Link to={'/main-gallery'}>
              <Button
                variant='light'
                className='mt-3'>Zobacz galerię</Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className='d-block w-100'
          src={require('../img/background/wardrobe.jpg')}
          alt='Szafy i garderoby'
        />
        <Carousel.Caption>
          <div className='m-auto carouselTransbox'>
            <h2 className='carouselTitle'>Szafy i garderoby</h2>
            <Link to={'/main-gallery'}><Button
              variant='light'
              className='mt-3'>Zobacz galerię</Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className='d-block w-100'
          src={require('../img/background/bathroom_bright.jfif')}
          alt='Łazienki'
        />
        <Carousel.Caption>
          <div className='m-auto carouselTransbox'>
            <h2 className='carouselTitle'>Łazienki</h2>
            <Link to={'/main-gallery'}>
              <Button
                variant='light'
                className='mt-3'>Zobacz galerię</Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className='d-block w-100'
          src={require('../img/background/room.jpg')}
          alt='Meble pokojowe'
        />
        <Carousel.Caption>
          <div className='m-auto carouselTransbox'>
            <h2 className='carouselTitle'>Meble pokojowe i RTV</h2>
            <Link to={'/main-gallery'}>
              <Button
                variant='light'
                className='mt-3'>Zobacz galerię</Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </>
  );
}