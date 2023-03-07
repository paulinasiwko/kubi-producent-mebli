import React from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function GallerySelect({ firstCard, secondCard, thirdCard, fourthCard }) {
  return(
    <>
      <Row className='mt-5 mb-5'>
        <Col className='mt-3 mb-3'
             xs='12' sm='12' md='6'>
          <Card className='shadow'
                style={{height: '380px',
                  width: '90%',
                  marginLeft: 'auto',
                  marginRight: 'auto'}}>
            <Card.Img src={require('../img/jasna-kuchnia.jpg')}
                      style={{objectFit: 'cover', height: '300px'}} />
            <Card.Body>
              <Link to={'/kitchen-gallery'}>
                <Button variant='light'
                        style={{backgroundColor: 'white',
                        margin: '0 auto',
                        display: 'block',
                        borderBottom: '1px solid grey',
                        textDecoration: 'underline white'}}>{firstCard} - zobacz zdjęcia</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-3 mb-3'
             xs='12' sm='12' md='6'>
          <Card className='shadow'
                style={{height: '380px',
                  width: '90%',
                  marginLeft: 'auto',
                  marginRight: 'auto'}}>
            <Card.Img src={require('../img/szafy.jpg')}
                      style={{objectFit: 'cover', height: '300px'}} />
            <Card.Body>
              <Link to={'/wardrobe-gallery'}>
                <Button variant='light'
                        style={{backgroundColor: 'white',
                          margin: '0 auto',
                          display: 'block',
                          borderBottom: '1px solid grey',
                          textDecoration: 'underline white'}}>{secondCard} - zobacz zdjęcia</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-3 mb-3'
             xs='12' sm='12' md='6'>
          <Card className='shadow'
                style={{height: '380px',
                  width: '90%',
                  marginLeft: 'auto',
                  marginRight: 'auto'}}>
            <Card.Img src={require('../img/lazienka.jpg')}
                      style={{objectFit: 'cover', height: '300px'}} />
            <Card.Body>
              <Link to={'/bathroom-gallery'}>
                <Button variant='light'
                        style={{backgroundColor: 'white',
                          margin: '0 auto',
                          display: 'block',
                          borderBottom: '1px solid grey',
                          textDecoration: 'underline white'}}>{thirdCard} - zobacz zdjęcia</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-3 mb-3'
             xs='12' sm='12' md='6'>
          <Card className='shadow'
                style={{height: '380px',
                  width: '90%',
                  marginLeft: 'auto',
                  marginRight: 'auto'}}>
            <Card.Img src={require('../img/meble_pokojowe.jpg')}
                      style={{objectFit: 'cover', height: '300px'}} />
            <Card.Body>
              <Link to={'/room-gallery'}>
                <Button variant='light' style={{backgroundColor: 'white',
                  margin: '0 auto',
                  display: 'block',
                  borderBottom: '1px solid grey',
                  textDecoration: 'underline white'}}>{fourthCard} - zobacz zdjęcia</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}