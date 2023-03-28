import React from 'react';
import {Button, Card, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './components.css';

export default function GalleryCard({ backgroundImage, linkTo, title }) {
  return(
    <>
        <Col className='mt-3 mb-3'
             xs='12' md='6'>
          <Card className='shadow galleryCard'>
            <Card.Img src={require(`../img/background/${backgroundImage}.jpg`)}
                      className='galleryCardImage' />
            <Card.Body>
              <Link to={`/${linkTo}`}>
                <Button variant='light'
                        className='galleryCardButton'>{title} - zobacz zdjęcia</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
    </>
  );
}