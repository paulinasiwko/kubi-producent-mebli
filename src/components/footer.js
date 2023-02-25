import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import {Container, Nav, Navbar} from 'react-bootstrap';


export default function Footer() {
  return (
    <Navbar>
    <Container fluid className='footer'>
      <Nav className='footerContent'>
        <div className='icon'>
          <FaMapMarkerAlt size='20' />
        </div>
        <p className='borderRight'>ul. Jasna 6, 82-335 Jegłownik</p>
        <div className='icon'>
          <FaPhoneAlt size='20' />
        </div>
        <p className='borderRight'>(+48) 502-472-763</p>
        <div className='icon'>
          <FaEnvelope size='20' />
        </div>
        <p className='borderRight'> kubimeble@icloud.com</p>
        <div className='icon'>
          <a href='https://www.facebook.com/profile.php?id=100063485287584'>
            <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
          </a>
        </div>
      </Nav>
    </Container>
    </Navbar>
  );
}
