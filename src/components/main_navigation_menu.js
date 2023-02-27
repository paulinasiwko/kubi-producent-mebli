import React from 'react';
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import './components.css';
import { Link } from "react-router-dom";
import SocialFollow from "./social_follow";
import { FaPhoneAlt } from "react-icons/fa";

export default function NavigationMenu() {
  return (
    <>
      <Navbar className='navbar'>
        <Container fluid>
          <Navbar.Brand>
            <Link to={'/'}>
            <img
              src={require('../img/logo.jpg')}
              alt='Kubi - producent MEBLI'
              style={{width: '180px', height: '50px'}}/>
            </Link>
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Link to={'/'}><Button className='navbarButton' variant='light'>Strona główna</Button></Link>
            <Link to={'/about-company'}><Button className='navbarButton' variant='light'>O firmie</Button></Link>
            <Link to={'/main_gallery'}><Button className='navbarButton' variant='light'>Galeria</Button></Link>
            <Link to={'/contact-info'}><Button className='navbarButton' variant='light'>Kontakt</Button></Link>
          </Nav>
          <h6 className='contactNumber'><FaPhoneAlt /> (+48) 502-472-763</h6>
          <SocialFollow />
        </Container>
      </Navbar>
    </>
  );
}