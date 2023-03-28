import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookSquare } from "react-icons/fa";
import {Container, Row, Col } from 'react-bootstrap';
import FooterElement from "./footer_element";
import './components.css';

export default function Footer() {
  return (
      <Container
        fluid
        className='footerContainer'>
        <Row className='footerRow'>
          <FooterElement icon={<FaMapMarkerAlt size='20' />}
                         elementText={'ul. Jasna 6, 82-335 Jegłownik'}/>
          <FooterElement icon={<FaPhoneAlt size='20' />}
                         elementText={'(+48) 502-472-763'}/>
          <FooterElement icon={<FaEnvelope size='20' />}
                         elementText={'kubimeble@icloud.com'}/>
          <Col md='3' sm='6' xs='12'
               className='footerFacebookElement'>
              <a href='https://www.facebook.com/profile.php?id=100063485287584'
                 className='footerLink'>
                  <FaFacebookSquare size='30'/>
              </a>
          </Col>
        </Row>
      </Container>
  );
}