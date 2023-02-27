import React from 'react';
import './contact_info.css';
import NavigationMenu from "../components/main_navigation_menu";
import ContactForm from "../components/contact_form";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../components/footer";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";

const position = [54.12222, 19.30422];

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
      <Container fluid style={{backgroundColor: 'white', borderTop: '2px solid grey', borderBottom: '2px solid grey'}}>
        <Row>
      <MapContainer className='map' center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

