import React, {useState} from 'react';
import './about_company.css'
import NavigationMenu from "../components/main_navigation_menu";
import {Container, Col, Row } from 'react-bootstrap';
import Footer from "../components/footer";

function SingleLogo ({ logoNumber }) {
  return (
    <img src={require(`../img/logo/${logoNumber}.png`)} />
  );
}
export default function AboutCompany() {
  const [logo, setLogo] = useState(
    [...Array(4).keys()]
  );


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
        <Row className='mt-3 mb-3'
             style={{backgroundColor: 'white'}}>
          {logo.map((logo) => {
            return (
              <Col xs='6' sm='6' md='4' lg='2'
                   style={{backgroundColor: 'white', margin: '20px 0'}}
                   key={logo}>
                <SingleLogo logoNumber={logo}
                            key={logo}/>
              </Col>
            );
          })}
          <Col xs='4' sm='4' md='3' lg='1'
               style={{backgroundColor: 'white', margin: '20px 0'}}>
            <img src={require(`../img/logo/4.png`)} />
          </Col>
          <Col xs='8' sm='8' md='5' lg='3'
               style={{backgroundColor: 'white', margin: '20px 0'}}>
          <img src={require(`../img/logo/5.png`)} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}