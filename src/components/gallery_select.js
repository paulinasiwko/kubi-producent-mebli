import React from 'react';
import './components.css';
import { Button, Card, Col, Row} from 'react-bootstrap';

export default function GallerySelect({ firstCard, secondCard, thirdCard, fourthCard }) {
  return(
    <>
      <Row className='galleryRow'>
        <Col>
          <Card style={{width: '18rem', height: '18rem'}}>
            <Card.Img src={require('../img/szafy.jpg')} />
            <Card.Body>
              <Card.Text style={{textAlign: 'center'}}>
                <p style={{fontWeight: 'bold'}}>{firstCard}</p>
              </Card.Text>
              <Button variant='light'>Zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width: '18rem', height: '18rem'}}>
            <Card.Img src={require('../img/szafy.jpg')} />
            <Card.Body>
              <Card.Text style={{textAlign: 'center'}}>
                <p style={{fontWeight: 'bold'}}>{secondCard}</p>
              </Card.Text>
              <Button variant='light'>Zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width: '18rem', height: '18rem'}}>
            <Card.Img src={require('../img/lazienka.jpg')} />
            <Card.Body>
              <Card.Text style={{textAlign: 'center'}}>
                <p style={{fontWeight: 'bold'}}>{thirdCard}</p>
              </Card.Text>
              <Button variant='light'>Zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width: '18rem', height: '18rem'}}>
            <Card.Img src={require('../img/lazienka.jpg')} />
            <Card.Body>
              <Card.Text style={{textAlign: 'center'}}>
                <p style={{fontWeight: 'bold'}}>{fourthCard}</p>
              </Card.Text>
              <Button variant='light'>Zobacz zdjęcia</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}