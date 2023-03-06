import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import {Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";

/*
export default function Footer() {
  return (
    <Navbar>
    <Container
      fluid
      style={{backgroundColor: 'black', color: 'white'}}>
      <Nav style={{margin: 'auto', width: '800px'}}>
        <div style={{margin: '18px 0'}}>
          <FaMapMarkerAlt size='20' />
        </div>
        <p style={{padding: '0 20px 0 10px',
          margin: '20px 20px 20px 0',
          borderRight: '1px solid white'}}>ul. Jasna 6, 82-335 Jegłownik</p>
        <div style={{margin: '18px 0'}}>
          <FaPhoneAlt size='20' />
        </div>
        <p style={{padding: '0 20px 0 10px',
          margin: '20px 20px 20px 0',
          borderRight: '1px solid white'}}>(+48) 502-472-763</p>
        <div style={{margin: '18px 0'}}>
          <FaEnvelope size='20' />
        </div>
        <p style={{padding: '0 20px 0 10px',
          margin: '20px 20px 20px 0',
          borderRight: '1px solid white'}}> kubimeble@icloud.com</p>
        <div style={{margin: '18px 0'}}>
          <a href='https://www.facebook.com/profile.php?id=100063485287584'>
            <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
          </a>
        </div>
      </Nav>
    </Container>
    </Navbar>
  );
}
*/

export default function Footer() {
  return (
      <Container
        fluid
        style={{backgroundColor: 'black', color: 'white'}}>
        <Nav style={{margin: 'auto', textAlign: 'center'}}
             className='flex-column'>
          <p style={{padding: '0 10px',
            margin: '20px'}}><FaMapMarkerAlt size='20' /> ul. Jasna 6, 82-335 Jegłownik</p>
          <div style={{borderBottom: '1px solid white',
            width: '180px',
            margin: 'auto'}} />
          <p style={{padding: '0 10px',
            margin: '20px'}}><FaPhoneAlt size='20' /> (+48) 502-472-763</p>
          <div style={{borderBottom: '1px solid white',
            width: '180px',
            margin: 'auto'}} />
          <p style={{padding: '0 10px',
            margin: '20px'}}><FaEnvelope size='20' /> kubimeble@icloud.com</p>
          <div style={{borderBottom: '1px solid white',
            width: '180px',
            margin: 'auto'}} />
          <div style={{margin: '20px 0'}}>
            <a href='https://www.facebook.com/profile.php?id=100063485287584'>
              <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
            </a>
          </div>
        </Nav>
      </Container>
  );
}