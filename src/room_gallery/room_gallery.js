import React from "react";
import './room_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import {Card, Container, Col, Row } from "react-bootstrap";
import Footer from "../components/footer";
export default function RoomGallery () {
  return (
    <>
      <NavigationMenu />
      <Container fluid
                 style={{backgroundColor: 'white'}}>
        <Row className='roomBackground'
             style={{borderBottom: '2px solid grey',
             height: '400px',
             textAlign: 'center'}}>
          <Col>
            <h2 style={{display: 'block',
              border: '1px solid white',
              backgroundColor: 'rgb(230, 230, 230, 0.8)',
              margin: '110px 450px 0 450px',
              padding: '40px 20px'}}>Meble pokojowe i RTV - nasze realizacje</h2>
          </Col>
        </Row>
        <Container>
          <Row className='mt-5' style={{backgroundColor: 'white'}}>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_0187.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_0205.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_0221.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_0839.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_0434.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_0435.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_1026.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_1027.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_1029.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_1392.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_1496.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_2152.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_2153.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_2155.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_2157.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_2158.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_2248.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_2250.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_2251.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_2380.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/rtv_photos/IMG_2381.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}