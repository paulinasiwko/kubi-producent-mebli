import React from 'react';
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import './components.css';

export default function NavigationMenu() {
  return (
    <>
      <Navbar className='navbar'>
        <Container fluid>
          <Navbar.Brand>
            <img
              src={require('../img/logo.jpg')}
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