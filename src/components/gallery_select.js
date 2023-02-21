import React from 'react';
import './components.css';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';

export default function GallerySelect({ firstCard, secondCard, thirdCard, fourthCard }) {
  return(
    <>
      <Row>
        <Col className='col'>
          <Card className='shadow' style={{width: '25rem', height: '21rem'}}>
            <Card.Img src={require('../img/nowoczesna_kuchnia.jpg')} />
            <Card.Body>
              <Button className='cardButton' variant='light'>{firstCard} - zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='shadow' style={{width: '25rem', height: '21rem'}}>
            <Card.Img src={require('../img/szafy.jpg')} />
            <Card.Body>
              <Button className='cardButton' variant='light'>{secondCard} - zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='shadow' style={{width: '25rem', height: '21rem'}}>
            <Card.Img src={require('../img/lazienka.jpg')} />
            <Card.Body>
              <Button className='cardButton' variant='light'>{thirdCard} - zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='shadow' style={{width: '25rem', height: '21rem'}}>
            <Card.Img src={require('../img/meble_pokojowe.jpg')} />
            <Card.Body>
              <Button className='cardButton' variant='light'>{fourthCard} - zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}