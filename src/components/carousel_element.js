import React from "react";
import {Button, Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function CarouselElement({ carouselImage, alt, title }) {
  return (
    <Carousel.Item>
      <img
        className='d-block w-100'
        src={require(`../img/${carouselImage}.jpg`)}
        alt={alt}
      />
      <Carousel.Caption>
        <div style={{display: 'block',
          margin: 'auto',
          maxWidth: '400px',
          padding: '20px',
          backgroundColor: 'rgb(204, 204, 204, 0.7)',
          border: '1px solid rgb(222, 216, 216)',
          boxShadow: '0 3px 5px 0 grey'}}>
          <h2 style={{borderBottom: '4px solid rgb(239, 239, 239)',
            margin: 'auto 20%'}}>{title}</h2>
          <Link to={'/main-gallery'}>
            <Button
              variant='light'
              className='mt-3 button'>Zobacz galerię</Button>
          </Link>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  );
}
