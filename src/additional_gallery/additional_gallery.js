import React, {useState} from "react";
import './additional_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import { Container, Col, Row } from "react-bootstrap";
import Footer from "../components/footer";
import SinglePhoto from "../components/single_photo";

export default function AdditionalGallery ({ imageFolder, alt, backgroundImage, title, galleryArrayLength }) {
  const [images, setImages] = useState(
    [...Array(galleryArrayLength).keys()]
  );

  return (
    <>
      <NavigationMenu />
      <Container fluid
                 className='pageBackground'>
        <Row className={`${backgroundImage} galleryTitleBackground`}>
          <Col>
            <div className='galleryTransbox'>
              <h2 className='title'>{title} - nasze realizacje</h2>
            </div>
          </Col>
        </Row>
        <Container>
          <Row className='mt-5 pageBackground'>
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