import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import {Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
      <Container
        fluid
        style={{backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          padding: '20px 0'}}>
        <Row style={{marginRight: '20px',
          marginLeft: '20px'}}>
          <Col md='3'
               sm='6'
               xs='12'
               style={{borderLeft: '1px solid white',
                 borderRight: '1px solid white'}}>
            <Link to={'/contact-info'} style={{color: 'white', textDecoration: 'none'}}>
            <FaMapMarkerAlt size='20' />
            <p>ul. Jasna 6, 82-335 Jegłownik</p>
            </Link>
          </Col>
          <Col md='3'
               sm='6'
               xs='12'
               style={{borderLeft: '1px solid white',
                 borderRight: '1px solid white'}}>
            <Link to={'/contact-info'} style={{color: 'white', textDecoration: 'none'}}>
            <FaPhoneAlt size='20' />
            <p>(+48) 502-472-763</p>
            </Link>
          </Col>
          <Col md='3'
               sm='6'
               xs='12'
               style={{borderLeft: '1px solid white',
                 borderRight: '1px solid white'}}>
            <Link to={'/contact-info'} style={{color: 'white', textDecoration: 'none'}}>
            <FaEnvelope size='20' />
            <p>kubimeble@icloud.com</p>
            </Link>
          </Col>
          <Col md='3'
               sm='6'
               xs='12'
               style={{borderLeft: '1px solid white',
                 borderRight: '1px solid white'}}>
              <a href='https://www.facebook.com/profile.php?id=100063485287584'
                 style={{color: 'white'}}>
              <FontAwesomeIcon icon={faFacebookSquare}
                               size='2x'
                               style={{marginTop: '10px'}} />
            </a>
          </Col>
        </Row>
      </Container>
  );
}