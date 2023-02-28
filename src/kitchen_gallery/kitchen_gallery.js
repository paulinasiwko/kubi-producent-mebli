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
        <Row className='kitchenBackground' style={{borderBottom: '2px solid black'}}>
          <Col>
            <h2 className='kitchenTransbox'>Kuchnie - nasze realizacje</h2>
          </Col>
        </Row>
        <Container>
        <Row className='mt-5' style={{backgroundColor: 'white'}}>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0165.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0166.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0168.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0169.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0173.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0174.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0175.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0176.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0177.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0178.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0180.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0184.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0185.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0193.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0194.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0195.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0196.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0197.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0200.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0201.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0202.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0206.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0207.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0208.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0209.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0210.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0214.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0215.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0216.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0222.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0223.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0224.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0226.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0227.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0229.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0230.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0232.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0233.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0234.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0235.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0236.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0237.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0238.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0239.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0240.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0241.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0243.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0244.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0245.JPG')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0098.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0099.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0100.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0575.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_0576.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_1086.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_1211.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_1213.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_1871.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_1872.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_1873.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2260.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2262.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2263.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2264.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2265.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2266.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2268.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2314.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2315.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2361.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
          <Col className='mt-3 mb-3'>
            <Card style={{height: '200px', width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
              <Card.Img src={require('../img/kitchen_photos/IMG_2363.jpg')} style={{objectFit: 'cover', height: '200px', border: '2px solid black'}}/>
            </Card>
          </Col>
        </Row>
      </Container>
      </Container>
      <Footer />
    </>
  );
}