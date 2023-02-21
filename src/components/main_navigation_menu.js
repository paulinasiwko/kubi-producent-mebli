import React from 'react';
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import './components.css';
import { Link } from "react-router-dom";

function handleClick() {
  <Link to='/about_company' />
}
export default function NavigationMenu() {
  return (
    <>
      <Navbar className='navbar'>
        <Container fluid>
          <Navbar.Brand>
            <img
              src={require('../img/logo.jpg')}
              alt='Kubi - producent MEBLI'
              style={{width: '180px', height: '50px'}}/>
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Button className='navbarButton' variant='light' onClick={handleClick}>O firmie</Button>
            <Button className='navbarButton' variant='light'>Galeria</Button>
            <Button className='navbarButton' variant='light'>Oferta</Button>
            <Button className='navbarButton' variant='light'>Kontakt</Button>
          </Nav>
          <h6 className='contactNumber'>(+48) 000-555-666</h6>
        </Container>
      </Navbar>
    </>
  );
}