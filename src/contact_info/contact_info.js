import React from 'react';
import './contact_info.css';
import NavigationMenu from "../components/main_navigation_menu";
import ContactForm from "../components/contact_form";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../components/footer";
import Map from '../components/map';

const location = {
  address: 'Jasna 6, 82-335 Jegłownik, Polska',
  lat: 54.121701912291094,
  lng: 19.303385726980476,
}
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
          <Col sm={3} style={{backgroundColor: 'grey'}}>
          </Col>
        </Row>
        <Row style={{backgroundColor: 'white'}}>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

//           <Map location={location} zoomLevel={17} />