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
      <div style={{position: 'absolute',
        margin: '4% 5% 5% 48%',
        width: '45%'}}>
        <ContactForm />
      </div>
      <Container fluid>
        <Row>
          <Col sm={9}
               className='contactDetailsBackground'>
            <div style={{display: 'block',
              border: '1px solid white',
              backgroundColor: 'rgb(230, 230, 230, 0.8)',
              margin: '5% 45% 5% 5%'}}>
            <h2 style={{margin: '20px 30px 40px 30px'}}>Kontakt</h2>
            <p style={{margin: '20px 30px 40px 30px'}}>
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
          <Col sm={3}
               style={{backgroundColor: 'grey'}}>
          </Col>
        </Row>
        <Row style={{backgroundColor: 'white'}}>
        </Row>
      </Container>
      <Container fluid
                 style={{backgroundColor: 'white',
                   borderTop: '2px solid grey',
                   borderBottom: '2px solid grey'}}>
        <Row>
          <Map />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

