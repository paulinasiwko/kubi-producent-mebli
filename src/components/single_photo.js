import React, {useState} from "react";
import {Card, Col, Modal} from "react-bootstrap";
import './components.css';
export default function SinglePhoto({ imageNumber, imageFolder, alt }) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Col key={imageNumber}
             className='mt-3 mb-3'>
            <Card className='me-auto ms-auto photoCard'>
                <Card.Img
                    src={require(`../img/${imageFolder}/${imageNumber}.jpg`)}
                    alt={`Zdjęcie ${alt}`}
                    className='photo'
                    onClick={() => setModalShow(true)}
                />
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    centered>
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