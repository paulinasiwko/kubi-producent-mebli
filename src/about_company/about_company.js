import React from 'react';
import './about_company.css';
import NavigationMenu from "../components/main_navigation_menu";
import {Container, Col, Row } from 'react-bootstrap';

export default function AboutCompany() {
  return (
    <>
      <NavigationMenu />
      <Container fluid>
        <Row>
          <Col sm={3} style={{color:'white', backgroundColor: 'grey', fontWeight: 'bold', textAlign: 'center' }}>
            <h1 className='aboutCompany'>O firmie</h1>
          </Col>
            <Col sm={9} className='pageBackgroundPhoto'>
              <div className='aboutCompanyTransbox'>
                <p className='companyDescription'>
                "A company profile describes what makes your company unique.
                </p>
                <div className='borderBottom'></div>
                <p className='companyDescription'>
                  It automatically differentiates your brand because no other company has the exact same
                founding story and reason for existing that your business does. Your history and values
                are integral parts of your brand positioning strategy, and a company profile is where you
                can mention this information without it feeling extraneous or out of place.
                </p>
                <div className='borderBottom'></div>
                <p className='companyDescription'>
                For instance, Starbucks’ coffee may not necessarily be better than Dunkin’ Donuts’ coffee,
                but because Starbucks goes into details about its high-quality ingredients,
                it immediately creates the sense that you’ll be paying a little more for a "better" product."
                </p>
                <p className='signature'>- Jakub Podufalski</p>
              </div>
            </Col>
        </Row>
        <Row>
          <Col sm={12} style={{backgroundColor: 'white'}}>
            <img src={require('../img/zobal.png')} alt='Zobal' className='providerLogo' />
            <img src={require('../img/gtv.png')} alt='GTV' className='providerLogo' />
            <img src={require('../img/swiss_krono.png')} alt='Swiss-krono' className='providerLogo' />
            <img src={require('../img/pfleiderer.png')} alt='Pfleiderer' className='providerLogo' />
            <img src={require('../img/blum.png')} alt='Blum' className='providerLogo' />
            <img src={require('../img/ncs.png')} alt='NCS' className='providerLogo' />
          </Col>
        </Row>
      </Container>
    </>
  );
}