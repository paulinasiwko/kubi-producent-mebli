import React from "react";
import {Button, Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
import './components.css';
export default function CarouselElement({ carouselImage, alt, title }) {
  return (
    <Carousel.Item>
      <img
        className='d-block w-100'
        src={require(`../img/${carouselImage}.jpg`)}
        alt={alt}
      />
      <Carousel.Caption>
        <div className='carouselTransbox'>
          <h2 className='carouselTitle'>{title}</h2>
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
