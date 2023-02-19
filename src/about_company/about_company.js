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
          <Col sm={3} className='aboutCompany'>O firmie</Col>
          <Col sm={2}>
            <img src={require('../img/zobal.png')} alt='Zobal' className='companyPhoto' />
            <img src={require('../img/gtv.png')} alt='GTV' className='companyPhoto' />
            <img src={require('../img/swiss_krono.png')} alt='Swiss-krono' className='companyPhoto'/>
            <img src={require('../img/pfleiderer.png')} alt='Pfleiderer' className='companyPhoto' />
            <img src={require('../img/blum.png')} alt='Blum' className='companyPhoto' />
            <img src={require('../img/ncs.png')} alt='NCS' className='companyPhoto' />
          </Col>
          <Col sm={7} style={{backgroundColor: 'lightgrey'}}>Pierdu pierdu</Col>
        </Row>
      </Container>
    </>
  );
}