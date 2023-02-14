import './App.css';
import React from 'react';
import { Button, Card, Carousel, Container, Nav, Navbar, Row } from 'react-bootstrap';

function NavigationMenu() {
  return (
  <>
  <Navbar className='navbar'>
    <Container fluid>
      <Navbar.Brand>
        <img 
          src={require('./img/logo.jpg')} 
          alt='Kubi - producent MEBLI'
          style={{width: '250px'}}/>
      </Navbar.Brand>
      <Nav className='me-auto'>
        <Button variant='light' className='button'>O firmie</Button>
        <Button variant='light' className='button'>Galeria</Button>
        <Button variant='light' className='button'>Oferta</Button>
        <Button variant='light' className='button'>Kontakt</Button>
      </Nav>
      <Button variant='primary' className='facebookButton'>Polub nas na Facebooku!</Button>
    </Container>
  </Navbar>
  </>
  );
}

function MainScreen() {
  
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <img
          src={require('./img/kuchnia_na_wymiar.jpg')}
          alt='Kuchnia na wymiar'
          className='mainPhoto' />
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
          src={require('./img/szafy.jpg')}
          alt='Szafy i garderoby'
          className='mainPhoto' />
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
          src={require('./img/lazienka.jpg')}
          alt='Łazienki'
          className='mainPhoto' />
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

export default function App() {
  return (
    <>
    <NavigationMenu />
    <MainScreen />
    </>
  );
}

