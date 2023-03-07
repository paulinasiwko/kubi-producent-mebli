import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import {Container, Row, Col } from 'react-bootstrap';


export default function Footer() {
  return (
      <Container
        fluid
        style={{backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          padding: '20px 0'}}>
        <Row style={{marginRight: '20px', marginLeft: '20px'}}>
          <Col md='3' sm='6' xs='12' style={{borderLeft: '1px solid white', borderRight: '1px solid white'}}>
            <FaMapMarkerAlt size='20' />
            <p>ul. Jasna 6, 82-335 Jegłownik</p>
          </Col>
          <Col md='3' sm='6' xs='12' style={{borderLeft: '1px solid white', borderRight: '1px solid white'}}>
            <FaPhoneAlt size='20' />
            <p>(+48) 502-472-763</p>
          </Col>
          <Col md='3' sm='6' xs='12' style={{borderLeft: '1px solid white', borderRight: '1px solid white'}}>
            <FaEnvelope size='20' />
          <p>kubimeble@icloud.com</p>
          </Col>
          <Col md='3' sm='6' xs='12' style={{borderLeft: '1px solid white', borderRight: '1px solid white'}}>
            <a href='https://www.facebook.com/profile.php?id=100063485287584'>
              <FontAwesomeIcon icon={faFacebookSquare} size='2x' style={{marginTop: '10px'}} />
            </a>
          </Col>
        </Row>
      </Container>
  );
}