import React from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function GalleryCard({ backgroundImage, linkTo, title }) {
  return(
    <>
        <Col className='mt-3 mb-3'
             xs='12' sm='12' md='6'>
          <Card className='shadow'
                style={{height: '380px',
                  width: '90%',
                  marginLeft: 'auto',
                  marginRight: 'auto'}}>
            <Card.Img src={require(`../img/${backgroundImage}.jpg`)}
                      style={{objectFit: 'cover', height: '300px'}} />
            <Card.Body>
              <Link to={`/${linkTo}`}>
                <Button variant='light'
                        style={{backgroundColor: 'white',
                          margin: '0 auto',
                          display: 'block',
                          borderBottom: '1px solid grey',
                          textDecoration: 'underline white'}}>{title} - zobacz zdjęcia</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
    </>
  );
}