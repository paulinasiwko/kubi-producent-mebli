import React from 'react';
import './components.css';
import {Button, Card, Col, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function GallerySelect({ firstCard, secondCard, thirdCard, fourthCard }) {
  return(
    <>
      <Row className='mt-5 mb-5' style={{maxWidth: '100%'}}>
        <Col className='mt-3 mb-3'>
          <Card className='shadow' style={{height: '380px', width: '550px', marginLeft: 'auto', marginRight: 'auto'}}>
            <Card.Img src={require('../img/jasna-kuchnia.jpg')} style={{objectFit: 'cover', height: '300px'}} />
            <Card.Body>
              <Link to={'/kitchen-gallery'}><Button className='cardButton' variant='light'>{firstCard} - zobacz zdjęcia</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-3 mb-3'>
          <Card className='shadow' style={{height: '380px', width: '550px', marginLeft: 'auto', marginRight: 'auto'}}>
            <Card.Img src={require('../img/szafy.jpg')} style={{objectFit: 'cover', height: '300px'}} />
            <Card.Body>
              <Link to={'/wardrobe-gallery'}><Button className='cardButton' variant='light'>{secondCard} - zobacz zdjęcia</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-3 mb-3'>
          <Card className='shadow' style={{height: '380px', width: '550px', marginLeft: 'auto', marginRight: 'auto'}}>
            <Card.Img src={require('../img/lazienka.jpg')} style={{objectFit: 'cover', height: '300px'}} />
            <Card.Body>
              <Link to={'/bathroom-gallery'}><Button className='cardButton' variant='light'>{thirdCard} - zobacz zdjęcia</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-3 mb-3'>
          <Card className='shadow' style={{height: '380px', width: '550px', marginLeft: 'auto', marginRight: 'auto'}}>
            <Card.Img src={require('../img/meble_pokojowe.jpg')} style={{objectFit: 'cover', height: '300px'}} />
            <Card.Body>
              <Link to={'/room-gallery'}><Button className='cardButton' variant='light'>{fourthCard} - zobacz zdjęcia</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}