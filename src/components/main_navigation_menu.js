import React from 'react';
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import SocialFollow from "./social_follow";
import { FaPhoneAlt } from "react-icons/fa";

export default function NavigationMenu() {
  return (
    <>
      <Navbar style={{borderBottom: '2px solid grey', backgroundColor: 'white'}}>
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
            <Link to={'/'}>
              <Button
                variant='light'
                style={{margin: '0 10px', backgroundColor: 'white', borderBottom: '1px solid grey'}}
              >Strona główna</Button>
            </Link>
            <Link to={'/about-company'}>
              <Button
                variant='light'
                style={{margin: '0 10px', backgroundColor: 'white', borderBottom: '1px solid grey'}}
              >O firmie</Button>
            </Link>
            <Link to={'/main_gallery'}>
              <Button
                variant='light'
                style={{margin: '0 10px', backgroundColor: 'white', borderBottom: '1px solid grey'}}
              >Galeria</Button>
            </Link>
            <Link to={'/contact-info'}>
              <Button
                variant='light'
                style={{margin: '0 10px', backgroundColor: 'white', borderBottom: '1px solid grey'}}
              >Kontakt</Button>
            </Link>
          </Nav>
          <h6 style={{marginRight: '20px'}}><FaPhoneAlt /> (+48) 502-472-763</h6>
          <SocialFollow />
        </Container>
      </Navbar>
    </>
  );
}