import React from "react";
import './bathroom_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import {Card, Container, Col, Row } from "react-bootstrap";
import Footer from "../components/footer";
export default function BathroomGallery () {
  return (
    <>
      <NavigationMenu />
      <Container fluid
                 style={{backgroundColor: 'white'}}>
        <Row className='bathroomBackground'
             style={{borderBottom: '2px solid grey',
               height: '400px',
               textAlign: 'center'}}>
          <Col>
            <h2 style={{display: 'block',
              border: '1px solid white',
              backgroundColor: 'rgb(230, 230, 230, 0.8)',
              margin: '110px 450px 0 450px',
              padding: '40px 20px'}}>Łazienki - nasze realizacje</h2>
          </Col>
        </Row>
        <Container>
          <Row className='mt-5'
               style={{backgroundColor: 'white'}}>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px',
                width: '300px',
                marginLeft: 'auto',
                marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_0179.JPG')}
                          style={{objectFit: 'cover',
                            height: '200px',
                            border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px',
                width: '300px',
                marginLeft: 'auto',
                marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_0204.JPG')}
                          style={{objectFit: 'cover',
                            height: '200px',
                            border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_0231.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_0242.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_1214.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_1215.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_1239.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_1240.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_1277.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_1394.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_1395.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_2247.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_2256.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/bathroom_photos/IMG_2257.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}