import React from 'react';
import './components.css';
import { Button, Card, Col, Row} from 'react-bootstrap';

export default function GallerySelect({ firstCard, secondCard, thirdCard }) {
  return(
    <>
      <Row className='galleryRow'>
        <Col>
          <Card style={{width: '18rem', height: '19rem'}}>
            <Card.Header style={{textAlign: 'center'}}>{firstCard}</Card.Header>
            <Card.Body>
              <Card.Text>
                <Card.Img src={require('../img/kuchnia_na_wymiar.jpg')} />
              </Card.Text>
              <Button variant='light'>Zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width: '18rem', height: '19rem'}}>
            <Card.Header style={{textAlign: 'center'}}>{secondCard}</Card.Header>
            <Card.Body>
              <Card.Text>
                <Card.Img src={require('../img/szafy.jpg')} />
              </Card.Text>
              <Button variant='light'>Zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width: '18rem', height: '19rem'}}>
            <Card.Header style={{textAlign: 'center'}}>{thirdCard}</Card.Header>
            <Card.Body>
              <Card.Text>
                <Card.Img src={require('../img/lazienka.jpg')} />
              </Card.Text>
              <Button variant='light'>Zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}