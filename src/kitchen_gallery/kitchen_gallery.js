import React, {useState} from "react";
import './kitchen_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import { Card, Container, Col, Modal, Row } from "react-bootstrap";
import Footer from "../components/footer";
export default function KitchenGallery () {
  const [modalShow, setModalShow] = useState(false);
  const images = [
    {
      img: '../img/kitchen_photos/1.jpg'
    },
    {
      img: '../img/kitchen_photos/2.jpg'
    },
    ];

  return (
    <>
      <NavigationMenu />
      <Container fluid
                 style={{backgroundColor: 'white'}}>
        <Row className='kitchenBackground'
             style={{borderBottom: '2px solid black',
             height: '400px',
             textAlign: 'center'}}>
          <Col>
            <h2 style={{display: 'block',
              border: '1px solid white',
              backgroundColor: 'rgb(230, 230, 230, 0.8)',
              margin: '110px 450px 0 450px',
              padding: '40px 20px'}}>Kuchnie - nasze realizacje</h2>
          </Col>
        </Row>
        <Container>
        <Row className='mt-5'
             style={{backgroundColor: 'white'}}>
          {images.map((image) => {
            return (
              <Col className='mt-3 mb-3'>
                <Card style={{height: '200px',
                        width: '300px',
                        marginLeft: 'auto',
                        marginRight: 'auto'}}>
                  <Card.Img
                    src={image.img}
                    alt='Zdjęcie kuchni'
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
                        src={image.img}
                        alt='Zdjęcie kuchni'
                        className='img-fluid'
                      />
                    </Modal.Body>
                  </Modal>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      </Container>
      <Footer />
    </>
  );
}