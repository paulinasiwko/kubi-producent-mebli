import React from 'react';
import './components.css';
import {Button, Card, Col, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function GallerySelect({ firstCard, secondCard, thirdCard, fourthCard }) {
  return(
    <>
      <Row>
        <Col className='col'>
          <Card className='shadow' style={{width: '25rem', height: '21rem'}}>
            <Card.Img src={require('../img/nowoczesna_kuchnia.jpg')} />
            <Card.Body>
              <Link to={'/kitchen-gallery'}><Button className='cardButton' variant='light'>{firstCard} - zobacz zdjęcia</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='shadow' style={{width: '25rem', height: '21rem'}}>
            <Card.Img src={require('../img/szafy.jpg')} />
            <Card.Body>
              <Link to={'/wardrobe-gallery'}><Button className='cardButton' variant='light'>{secondCard} - zobacz zdjęcia</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='shadow' style={{width: '25rem', height: '21rem'}}>
            <Card.Img src={require('../img/lazienka.jpg')} />
            <Card.Body>
              <Link to={'/bathroom-gallery'}><Button className='cardButton' variant='light'>{thirdCard} - zobacz zdjęcia</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='shadow' style={{width: '25rem', height: '21rem'}}>
            <Card.Img src={require('../img/meble_pokojowe.jpg')} />
            <Card.Body>
              <Link to={'/room-gallery'}><Button className='cardButton' variant='light'>{fourthCard} - zobacz zdjęcia</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}