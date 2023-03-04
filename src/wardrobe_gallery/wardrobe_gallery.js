import React from "react";
import './wardrobe_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import {Card, Container, Col, Row } from "react-bootstrap";
import Footer from "../components/footer";
export default function WardrobeGallery () {
  return (
    <>
      <NavigationMenu />
      <Container fluid
                 style={{backgroundColor: 'white'}}>
        <Row className='wardrobeBackground'
             style={{borderBottom: '2px solid grey',
               height: '400px',
               textAlign: 'center'}}>
          <Col>
            <h2 style={{display: 'block',
              border: '1px solid white',
              backgroundColor: 'rgb(230, 230, 230, 0.8)',
              margin: '110px 450px 0 450px',
              padding: '40px 20px'}}>Szafy i garderoby - nasze realizacje</h2>
          </Col>
        </Row>
        <Container>
          <Row className='mt-5' style={{backgroundColor: 'white'}}>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0170.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0171.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0172.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0182.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0183.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0186.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0189.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0191.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0192.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0198.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0199.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0203.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0212.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0213.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0217.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0218.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0219.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0220.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0836.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0837.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0101.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0102.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0103.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0536.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0537.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0749.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_0775.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_1141.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_1238.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/IMG_1246.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}