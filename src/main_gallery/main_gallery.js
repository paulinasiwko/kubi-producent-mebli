import React from 'react';
import NavigationMenu from "../components/main_navigation_menu";
import Footer from "../components/footer";
import {Col, Container, Row} from "react-bootstrap";
import GalleryCard from "../components/gallery_card";
import './main_gallery.css';

export default function MainGallery() {
  return (
    <>
      <NavigationMenu />
      <Container fluid>
        <Row className='titleBackground'>
          <Col xs='12'>
            <h1 className='mt-4 mb-5 mainGalleryTitle'>Galeria</h1>
          </Col>
        </Row>
        <Row className='mt-4 mb-5'>
          <GalleryCard backgroundImage={'kitchen'}
                       linkTo={'kitchen-gallery'}
                       title={'Kuchnie'} />
          <GalleryCard backgroundImage={'wardrobe'}
                       linkTo={'wardrobe-gallery'}
                       title={'Szafy i garderoby'} />
          <GalleryCard backgroundImage={'bathroom_carousel'}
                       linkTo={'bathroom-gallery'}
                       title={'Łazienki'} />
          <GalleryCard backgroundImage={'room'}
                       linkTo={'room-gallery'}
                       title={'Meble pokojowe i RTV'} />
        </Row>
      </Container>
        <Footer />
    </>
  );
}