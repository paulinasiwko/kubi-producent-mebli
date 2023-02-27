import React from "react";
import './wardrobe_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import {Card, Container, Col, Row } from "react-bootstrap";
import Footer from "../components/footer";
export default function WardrobeGallery () {
  return (
    <>
      <NavigationMenu />
      <Container fluid style={{backgroundColor: 'white'}}>
        <Row className='wardrobeBackground' style={{borderBottom: '2px solid grey'}}>
          <Col>
            <h2 className='wardrobeTransbox'>Szafy i garderoby - nasze realizacje</h2>
          </Col>
        </Row>
        <Container>
          <Row className='mt-5' style={{backgroundColor: 'white'}}>
            <Col>
              <Card style={{height: '200px', width: '300px'}}>
                <Card.Img src={require('../img/szafy.jpg')} style={{height: '200px', width: '300px'}}/>
              </Card>
            </Col>
            <Col>
              <Card style={{height: '200px', width: '300px'}}>
                <Card.Img src={require('../img/szafy.jpg')} style={{height: '200px', width: '300px'}}/>
              </Card>
            </Col>
            <Col>
              <Card style={{height: '200px', width: '300px'}}>
                <Card.Img src={require('../img/szafy.jpg')} style={{height: '200px', width: '300px'}}/>
              </Card>
            </Col>
            <Col>
              <Card style={{height: '200px', width: '300px'}}>
                <Card.Img src={require('../img/szafy.jpg')} style={{height: '200px', width: '300px'}}/>
              </Card>
            </Col>
            <Col>
              <Card style={{height: '200px', width: '300px'}}>
                <Card.Img src={require('../img/szafy.jpg')} style={{height: '200px', width: '300px'}}/>
              </Card>
            </Col>
            <Col>
              <Card style={{height: '200px', width: '300px'}}>
                <Card.Img src={require('../img/szafy.jpg')} style={{height: '200px', width: '300px'}}/>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}