import React, {useState} from "react";
import {Alert, Container, Row, Col, Card, Form, Button, FormGroup, FloatingLabel} from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [show, setShow] = useState(true);
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_3xupwqf', 'template_tsysrsj', e.target, 'MmKBPLfAJvZH6gRig');
    setShow(false);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{border: '1px solid black'}}>
              <Card.Header className='p-3' style={{backgroundColor: 'lightgrey', color: 'black'}}>
                <h4>Napisz do nas!</h4>
              </Card.Header>
              <Card.Body className='shadow'>
                <Form onSubmit={sendEmail}>
                  <Form.Group>
                    <Form.Control
                      className='mt-3'
                      name='email'
                      type='email'
                      placeholder='E-mail'
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      className='mt-3'
                      name='phone'
                      type='phone'
                      placeholder='Numer telefonu'
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      className='mt-3'
                      name='title'
                      type='text'
                      placeholder='Temat wiadomości'
                      required
                    />
                  </Form.Group>
                  <FloatingLabel label='Treść wiadomości'>
                    <Form.Control
                      className='mt-3'
                      name='message'
                      as='textarea'
                      placeholder='Treść wiadomości'
                      required
                    />
                  </FloatingLabel>
                  <FormGroup className='mt-3'>
                    {show ? (
                      <Button
                        className='me-2'
                        variant='light'
                        size='sm'
                        type='submit'
                      >Wyślij</Button>
                    ) : (
                      <Alert variant='success'
                             className='alert'
                             onClose={() => setShow(true)}
                             dismissible>
                        <p>Wysłano!</p>
                      </Alert>
                    )}
                  </FormGroup>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
