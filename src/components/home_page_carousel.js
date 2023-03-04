import React from "react";
import {Button, Carousel} from "react-bootstrap";
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
          <div style={{display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '400px',
            padding: '20px',
            backgroundColor: 'rgb(204, 204, 204, 0.7)',
            border: '1px solid rgb(222, 216, 216)',
            boxShadow: '0 3px 5px 0 grey'}}>
            <h1 style={{borderBottom: '4px solid rgb(239, 239, 239)', margin: 'auto 70px'}}>Kuchnie na wymiar</h1>
            <Link to={'/main_gallery'}>
              <Button
                variant='light'
                className='mt-3 button'>Zobacz galerię</Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{objectFit: 'cover', height: '500px'}}>
        <img
          src={require('../img/szafy.jpg')}
          alt='Szafy i garderoby'
          />
        <Carousel.Caption>
          <div style={{display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '400px',
            padding: '20px',
            backgroundColor: 'rgb(204, 204, 204, 0.7)',
            border: '1px solid rgb(222, 216, 216)',
            boxShadow: '0 3px 5px 0 grey'}}>
            <h1 style={{borderBottom: '4px solid rgb(239, 239, 239)',
              margin: 'auto 70px'}}>Szafy i garderoby</h1>
            <Link to={'/main_gallery'}><Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{objectFit: 'cover', height: '500px'}}>
        <img
          src={require('../img/lazienka.jpg')}
          alt='Łazienki'
          />
        <Carousel.Caption>
          <div style={{display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '400px',
            padding: '20px',
            backgroundColor: 'rgb(204, 204, 204, 0.7)',
            border: '1px solid rgb(222, 216, 216)',
            boxShadow: '0 3px 5px 0 grey'}}>
            <h1 style={{borderBottom: '4px solid rgb(239, 239, 239)', margin: 'auto 80px'}}>Łazienki</h1>
            <Link to={'/main_gallery'}>
              <Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{objectFit: 'cover', height: '500px'}}>
        <img
          src={require('../img/meble_pokojowe.jpg')}
          alt='Meble pokojowe'
          />
        <Carousel.Caption>
          <div style={{display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '400px',
            padding: '20px',
            backgroundColor: 'rgb(204, 204, 204, 0.7)',
            border: '1px solid rgb(222, 216, 216)',
            boxShadow: '0 3px 5px 0 grey'}}>
            <h1 style={{borderBottom: '4px solid rgb(239, 239, 239)', margin: 'auto 70px'}}>Meble pokojowe i RTV</h1>
            <Link to={'/main_gallery'}>
              <Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}