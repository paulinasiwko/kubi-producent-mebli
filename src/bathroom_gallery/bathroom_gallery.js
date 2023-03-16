import React, {useState} from "react";
import './bathroom_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import {Card, Container, Col, Row, Modal} from "react-bootstrap";
import Footer from "../components/footer";

function SinglePhoto({ imageNumber }) {
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
          src={require(`../img/bathroom_photos/${imageNumber}.jpg`)}
          alt='Zdjęcie łazienki'
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
          <Modal.Body>
            <img
              src={require(`../img/bathroom_photos/${imageNumber}.jpg`)}
              alt='Zdjęcie łazienki'
              className='img-fluid'
            />
          </Modal.Body>
        </Modal>
      </Card>
    </Col>
  );
}
export default function BathroomGallery () {
  const [images, setImages] = useState(
    [...Array(13).keys()]
  );


  return (
    <>
      <NavigationMenu />
      <Container fluid
                 style={{backgroundColor: 'white'}}>
        <Row className='bathroomBackground'
             style={{borderBottom: '2px solid grey',
               height: '400px',
               textAlign: 'center'}}>
          <Col>
            <h2 style={{display: 'block',
              border: '1px solid white',
              backgroundColor: 'rgb(230, 230, 230, 0.8)',
              margin: '110px 450px 0 450px',
              padding: '40px 20px'}}>Łazienki - nasze realizacje</h2>
          </Col>
        </Row>
        <Container>
          <Row className='mt-5'
               style={{backgroundColor: 'white'}}>
            {images.map((image) => {
              return (
                <SinglePhoto imageNumber={image} key={image}/>
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