import React from 'react';
import './about_company.css';
import NavigationMenu from "../components/main_navigation_menu";
import {Container, Col, Row } from 'react-bootstrap';
import Footer from "../components/footer";
export default function AboutCompany() {
  return (
    <>
      <NavigationMenu />
      <Container fluid>
        <Row>
          <Col sm={3} style={{color:'white',
            backgroundColor: 'grey',
            fontWeight: 'bold',
            textAlign: 'center' }}>
            <h1 style={{marginTop: '250px'}}>O firmie</h1>
          </Col>
            <Col sm={9} className='pageBackgroundPhoto'>
              <div style={{display: 'block',
                border: '1px solid grey',
                margin: '50px 100px 50px 150px',
                backgroundColor: 'rgb(211, 211, 211, 0.8)'}}>
                <p style={{fontStyle: 'italic',
                  marginTop: '30px',
                  textAlign: 'center'}}>
                  Firma z dziada pradziada przeszła na kolejnego dziada
                </p>
                <div style={{borderBottom: '1px solid white',
                  margin: '30px 160px 0 160px'}} />
                <p style={{fontStyle: 'italic',
                  margin: '30px 40px 0 40px',
                  textAlign: 'center'}}>
                  It automatically differentiates your brand because no other company has the exact same
                founding story and reason for existing that your business does. Your history and values
                are integral parts of your brand positioning strategy, and a company profile is where you
                can mention this information without it feeling extraneous or out of place.
                </p>
                <div style={{borderBottom: '1px solid white',
                  margin: '30px 160px 0 160px'}} />
                <p style={{fontStyle: 'italic',
                  margin: '30px 40px 0 40px',
                  textAlign: 'center'}}>
                For instance, Starbucks’ coffee may not necessarily be better than Dunkin’ Donuts’ coffee,
                but because Starbucks goes into details about its high-quality ingredients,
                it immediately creates the sense that you’ll be paying a little more for a "better" product."
                </p>
                <p style={{textAlign: 'right',
                  fontWeight: 'bold',
                  margin: '30px 50px 30px 0'}}>- Jakub Podufalski</p>
              </div>
            </Col>
        </Row>
        <Row>
          <Col sm={12} style={{backgroundColor: 'white'}}>
            <img src={require('../img/zobal.png')}
                 alt='Zobal'
                 style={{display: 'inline', marginLeft: '25px'}} />
            <img src={require('../img/gtv.png')}
                 alt='GTV'
                 style={{display: 'inline', marginLeft: '25px'}} />
            <img src={require('../img/swiss_krono.png')}
                 alt='Swiss-krono'
                 style={{display: 'inline', marginLeft: '25px'}} />
            <img src={require('../img/pfleiderer.png')}
                 alt='Pfleiderer'
                 style={{display: 'inline', marginLeft: '25px'}} />
            <img src={require('../img/blum.png')}
                 alt='Blum'
                 style={{display: 'inline', marginLeft: '25px'}} />
            <img src={require('../img/ncs.png')}
                 alt='NCS'
                 style={{display: 'inline', marginLeft: '25px'}} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}