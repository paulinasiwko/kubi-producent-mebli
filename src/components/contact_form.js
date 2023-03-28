import React, {useState} from "react";
import {Alert, Container, Row, Col, Card, Form, Button, FormGroup, FloatingLabel} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './components.css';
export default function ContactForm() {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const re = /^[0-9\b]+$/;

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_3xupwqf', 'template_tsysrsj', e.target, 'MmKBPLfAJvZH6gRig');
    setShow(false);
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className='formCard'>
              <Card.Header className='p-3 formHeader'>
                <h4>Napisz do nas!</h4>
              </Card.Header>
              <Card.Body className='shadow'>
                <Form onSubmit={sendEmail}>
                  <Form.Group>
                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='mt-3'
                      type='email'
                      placeholder='E-mail*'
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      value={phoneNumber}
                      onChange={(e) => {
                        if (e.target.value === '' || re.test(e.target.value)) {
                        setPhoneNumber(e.target.value)
                        }}
                      }
                      className='mt-3'
                      placeholder='Numer telefonu (opcjonalnie)'
                    />
                  </Form.Group>
                  <FormGroup>
                  <FloatingLabel label='Treść wiadomości*'>
                    <Form.Control
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className='mt-3'
                      as='textarea'
                      required
                    />
                  </FloatingLabel>
                  </FormGroup>
                  <FormGroup className='mt-3'>
                    {show ? (
                      <Button
                        className='me-2'
                        variant='secondary'
                        size='sm'
                        type='submit'
                      >Wyślij</Button>
                    ) : (
                      <Alert variant='success'
                             className='formAlert'
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
