import React from 'react';
import './contact_info.css';
import NavigationMenu from "../components/main_navigation_menu";
import ContactForm from "../components/contact_form";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../components/footer";
import Map from "../components/map";
export default function ContactInfo() {
  return (
    <>
      <NavigationMenu />
      <Container fluid>
        <Row>
          <Col sm='12' lg='7'
               className='contactDetailsBackground'>
            <div className='contactInfoTransbox'>
            <h2 className='text'>Kontakt</h2>
            <p className='text'>
              <b>KUBI - Producent Mebli</b> <br />
              Meble na wymiar Jakub Podufalski <br />
              <br />
              82-335 Jegłownik, ul. Jasna 6 <br />
              <br />
              NIP: 5783140291 <br />
              REGON: 385226970 <br />
              <br />
              Tel: (+48) 502-472-763 <br/>
              E-mail: kubimeble@icloud.com
            </p>
            </div>
          </Col>
          <Col lg='5'
               className='formBackground'>
            <div className='mt-5 mb-5'>
              <ContactForm />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid
                 className='mapContainer'>
        <Map />
      </Container>
      <Footer />
    </>
  );
}

