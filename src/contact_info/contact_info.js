import React from 'react';
import './contact_info.css';
import NavigationMenu from "../components/main_navigation_menu";
import ContactForm from "../components/contact_form";
import {Col, Container, Row} from "react-bootstrap";

export default function ContactInfo() {
  return (
    <>
      <NavigationMenu />
      <div className='form'>
        <ContactForm />
      </div>
      <Container fluid>
        <Row>
          <Col sm={9} className='contactDetailsBackground'>
            <div className='contactInfoTransbox'>
            <h2 className='contactDetails'>Kontakt</h2>
            <p className='contactDetails'>
              Przedsiębiorstwo Produkcyjno - Handlowo - Usługowe <br />
              "MEBLE" s.c. Import-Export Maria Bożyczko, Jerzy Bożyczko <br />
              <br />
              82-300 Elbląg, ul. Nowodworska 29 <br />
              <br />
              NIP: 578-25-94-423 <br />
              <br />
              REGON: 170778986 <br />
              <br />
              Tel: 535 227 662 - Piotr Bożyczko, e-mail: projektybozyczko@wp.pl
            </p>
            </div>
          </Col>
          <Col sm={3} style={{backgroundColor: 'grey'}}>
          </Col>
        </Row>
        <Row style={{backgroundColor: 'white'}}>
          Mapa
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Row>
      </Container>
    </>
  );
}