import React, {useState} from "react";
import './wardrobe_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import {Card, Container, Col, Row, Modal} from "react-bootstrap";
import Footer from "../components/footer";
export default function WardrobeGallery () {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <NavigationMenu />
      <Container fluid
                 style={{backgroundColor: 'white'}}>
        <Row className='wardrobeBackground'
             style={{borderBottom: '2px solid grey',
               height: '400px',
               textAlign: 'center'}}>
          <Col>
            <h2 style={{display: 'block',
              border: '1px solid white',
              backgroundColor: 'rgb(230, 230, 230, 0.8)',
              margin: '110px 450px 0 450px',
              padding: '40px 20px'}}>Szafy i garderoby - nasze realizacje</h2>
          </Col>
        </Row>
        <Container>
          <Row className='mt-5'
               style={{backgroundColor: 'white'}}>
            <Col className='mt-3 mb-3'>
              <Card style={{height: '200px',
                width: '300px',
                marginLeft: 'auto',
                marginRight: 'auto'}}>
                <Card.Img src={require('../img/wardrobe_photos/1.jpg')}
                          alt='Zdjęcie garderoby'
                          style={{objectFit: 'cover',
                            height: '200px',
                            border: '1px solid black'}}
                          onClick={() => setModalShow(true)}
                />
                <Modal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  centered
                >
                  <Modal.Body>
                    <img
                      src={require('../img/wardrobe_photos/1.jpg')}
                      alt='Zdjęcie garderoby'
                      className='img-fluid'
                    />
                  </Modal.Body>
                </Modal>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}