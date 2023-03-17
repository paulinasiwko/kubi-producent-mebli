import React from 'react';
import './about_company.css'
import NavigationMenu from "../components/main_navigation_menu";
import {Container, Col, Row } from 'react-bootstrap';
import Footer from "../components/footer";
export default function AboutCompany() {
  return (
    <>
      <NavigationMenu />
      <Container fluid>
        <Row>
          <Col sm='12'
               md='3'
               style={{color:'white',
                 backgroundColor: 'grey',
                 fontWeight: 'bold',
                 textAlign: 'center',
                 padding: '10% 0'}}>
            <h1>O firmie</h1>
          </Col>
            <Col sm='12'
                 md='9'
                 className='d-block pageBackgroundPhoto'>
              <div style={{display: 'block',
                border: '1px solid grey',
                margin: '30px 10%',
                backgroundColor: 'rgb(211, 211, 211, 0.8)'}}>
                <p style={{fontStyle: 'italic',
                  margin: '30px',
                  textAlign: 'center'}}>
                  Firma z dziada pradziada przeszła na kolejnego dziada
                </p>
                <div style={{borderBottom: '1px solid white',
                  margin: '0 20%'}} />
                <p style={{fontStyle: 'italic',
                  margin: '30px',
                  textAlign: 'center'}}>
                  It automatically differentiates your brand because no other company has the exact same
                founding story and reason for existing that your business does. Your history and values
                are integral parts of your brand positioning strategy.
                </p>
                <div style={{borderBottom: '1px solid white',
                  margin: '0 20%'}} />
                <p style={{fontStyle: 'italic',
                  margin: '30px',
                  textAlign: 'center'}}>
                For instance, Starbucks’ coffee may not necessarily be better than Dunkin’ Donuts’ coffee,
                but because Starbucks goes into details about its high-quality ingredients,
                it immediately creates the sense that you’ll be paying a little more for a "better" product."
                </p>
                <p style={{textAlign: 'right',
                  fontWeight: 'bold',
                  margin: '30px 10% 30px 0'}}>- Jakub Podufalski</p>
              </div>
            </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}