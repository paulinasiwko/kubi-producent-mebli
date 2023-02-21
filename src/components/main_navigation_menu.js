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
            <Button variant='light' className='button' onClick={handleClick}>O firmie</Button>
            <Button variant='light' className='button'>Galeria</Button>
            <Button variant='light' className='button'>Oferta</Button>
            <Button variant='light' className='button'>Kontakt</Button>
          </Nav>
          <h6 className='contactNumber'>(+48) 000-555-666</h6>
        </Container>
      </Navbar>
    </>
  );
}