import React from 'react';
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import './additional_navigation_menu.css';

export default function NavigationMenu() {
  return (
    <>
      <Navbar className='navbar'>
        <Container fluid>
          <Navbar.Brand style={{color: 'white'}}>
            <h6 className='mt-2'>(+48) 000-555-666</h6>
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Button variant='dark' className='additionalMenuButton'>O firmie</Button>
            <Button variant='dark' className='additionalMenuButton'>Galeria</Button>
            <Button variant='dark' className='additionalMenuButton'>Oferta</Button>
            <Button variant='dark' className='additionalMenuButton'>Kontakt</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}