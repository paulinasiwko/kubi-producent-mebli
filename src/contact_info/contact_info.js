import React from 'react';
import './contact_info.css';
import NavigationMenu from "../components/main_navigation_menu";
import ContactForm from "../components/contact_form";
import {Col, Container, Row} from "react-bootstrap";

export default function ContactInfo() {
  return (
    <>
      <NavigationMenu />
      <Container fluid>
        <Row>
          <Col sm={7} style={{backgroundColor: 'silver', color: 'white'}}>
            <h2 className='mt-4' style={{textAlign: 'center'}}>Kontakt</h2>
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
          </Col>
          <Col sm={5} style={{backgroundColor: 'lightgrey'}}>
            <div className='mt-4'>
              <ContactForm />
            </div>
          </Col>
        </Row>
        <Row>
          Mapa
        </Row>
      </Container>
    </>
  );
}