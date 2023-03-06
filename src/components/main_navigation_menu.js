import React from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function NavigationMenu() {
  return (
    <Navbar collapseOnSelect
            expand="md"
            style={{borderBottom: '2px solid grey', backgroundColor: 'white'}}>
      <Navbar.Brand>
        <Link to={'/'}>
          <img
            src={require('../img/logo.jpg')}
            alt='Kubi - producent MEBLI'
            style={{width: '180px', height: '50px'}}/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight: '30px'}} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <NavLink
              variant='light'
              href='/'
              style={{margin: '10px',
                color: 'black',
                backgroundColor: 'white',
                borderBottom: '1px solid grey',
                textDecoration: 'underline white'}}
            >Strona główna</NavLink>
            <NavLink
              variant='light'
              href='/about-company'
              style={{margin: '10px',
                color: 'black',
                backgroundColor: 'white',
                borderBottom: '1px solid grey',
                textDecoration: 'underline white'}}
            >O firmie</NavLink>
            <NavLink
              variant='light'
              href='/main-gallery'
              style={{margin: '10px',
                color: 'black',
                backgroundColor: 'white',
                borderBottom: '1px solid grey',
                textDecoration: 'underline white'}}
            >Galeria</NavLink>
            <NavLink
              variant='light'
              href='/contact-info'
              style={{margin: '10px',
                color: 'black',
                backgroundColor: 'white',
                borderBottom: '1px solid grey',
                textDecoration: 'underline white'}}
            >Kontakt</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}