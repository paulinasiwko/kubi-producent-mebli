import React from 'react';
import './components.css';
import { Container, Navbar } from 'react-bootstrap';

export default function AdditionalNavigationMenu( {menuText} ) {
  return (
    <Navbar className='additionalNavbar'>
      <Container fluid>
        <Navbar.Brand>
          <h2 className='additionalNavbarText'>{menuText}</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}