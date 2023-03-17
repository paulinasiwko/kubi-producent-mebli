import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MenuButton from "./menu_button";

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
          <MenuButton href={'/'}
                      buttonText={'Strona główna'}/>
          <MenuButton href={'/about-company'}
                      buttonText={'O firmie'}/>
          <MenuButton href={'/main-gallery'}
                      buttonText={'Galeria'}/>
          <MenuButton href={'/contact-info'}
                      buttonText={'Kontakt'}/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}