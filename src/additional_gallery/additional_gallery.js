import React, {useState} from "react";
import './additional_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import {Card, Container, Col, Row, Modal} from "react-bootstrap";
import Footer from "../components/footer";

function SinglePhoto({ imageNumber, imageFolder, alt }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Col key={imageNumber} className='mt-3 mb-3'>
      <Card style={{
        height: '200px',
        width: '300px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <Card.Img
          src={require(`../img/${imageFolder}/${imageNumber}.jpg`)}
          alt={`Zdjęcie ${alt}`}
          style={{
            objectFit: 'cover',
            height: '200px',
            border: '1px solid black'
          }}
          onClick={() => setModalShow(true)}
        />
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          centered
        >
          <Modal.Header closeButton />
          <Modal.Body>
            <img
              src={require(`../img/${imageFolder}/${imageNumber}.jpg`)}
              alt={`Zdjęcie ${alt}`}
              className='img-fluid'
            />
          </Modal.Body>
        </Modal>
      </Card>
    </Col>
  );
}
export default function AdditionalGallery ({ imageFolder, alt, backgroundImage, title, galleryArrayLength }) {
  const [images, setImages] = useState(
    [...Array(galleryArrayLength).keys()]
  );


  return (
    <>
      <NavigationMenu />
      <Container fluid
                 style={{backgroundColor: 'white'}}>
        <Row className={`${backgroundImage}`}
             style={{borderBottom: '2px solid grey',
               textAlign: 'center'}}>
          <Col>
            <div style={{display: 'block',
                border: '1px solid white',
                backgroundColor: 'rgb(230, 230, 230, 0.8)',
                margin: '70px auto',
                padding: '20px 10px',
                maxWidth: '350px'}}>
              <h2 style={{margin: 'auto 20px'}}>{title} - nasze realizacje</h2>
            </div>
          </Col>
        </Row>
        <Container>
          <Row className='mt-5'
               style={{backgroundColor: 'white'}}>
            {images.map((image) => {
              return (
                <SinglePhoto imageNumber={image}
                             imageFolder={imageFolder}
                             alt={alt}
                             key={image}/>
              );
            })
            }
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}