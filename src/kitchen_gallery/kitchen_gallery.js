import React from "react";
import './kitchen_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import {Card, Container, Col, Row } from "react-bootstrap";
import Footer from "../components/footer";
export default function KitchenGallery () {
  return (
    <>
      <NavigationMenu />
      <Container fluid style={{backgroundColor: 'white'}}>
        <Row className='kitchenBackground' style={{borderBottom: '2px solid grey'}}>
          <Col>
            <h2 className='kitchenTransbox'>Kuchnie - nasze realizacje</h2>
          </Col>
        </Row>
        <Container>
        <Row className='mt-5' style={{backgroundColor: 'white'}}>
          <Col>
            <Card style={{height: '200px', width: '300px'}}>
              <Card.Img src={require('../img/nowoczesna_kuchnia.jpg')} style={{height: '200px', width: '300px'}}/>
            </Card>
          </Col>
          <Col>
            <Card style={{height: '200px', width: '300px'}}>
              <Card.Img src={require('../img/nowoczesna_kuchnia.jpg')} style={{height: '200px', width: '300px'}}/>
            </Card>
          </Col>
          <Col>
            <Card style={{height: '200px', width: '300px'}}>
              <Card.Img src={require('../img/nowoczesna_kuchnia.jpg')} style={{height: '200px', width: '300px'}}/>
            </Card>
          </Col>
          <Col>
            <Card style={{height: '200px', width: '300px'}}>
              <Card.Img src={require('../img/nowoczesna_kuchnia.jpg')} style={{height: '200px', width: '300px'}}/>
            </Card>
          </Col>
          <Col>
            <Card style={{height: '200px', width: '300px'}}>
              <Card.Img src={require('../img/nowoczesna_kuchnia.jpg')} style={{height: '200px', width: '300px'}}/>
            </Card>
          </Col>
          <Col>
            <Card style={{height: '200px', width: '300px'}}>
              <Card.Img src={require('../img/nowoczesna_kuchnia.jpg')} style={{height: '200px', width: '300px'}}/>
            </Card>
          </Col>
        </Row>
      </Container>
      </Container>
      <Footer />
    </>
  );
}