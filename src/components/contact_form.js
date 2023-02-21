import React from "react";
import {Container, Row, Col, Card, Form, Button, FormGroup, FloatingLabel} from 'react-bootstrap';


export default function ContactForm() {
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
                <Form>
                  <Form.Group>
                    <Form.Control
                      className='mt-3'
                      type='email'
                      placeholder='E-mail'/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      className='mt-3'
                      type='phone number'
                      placeholder='Numer telefonu'/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      className='mt-3'
                      type='text'
                      placeholder='Temat wiadomości'/>
                  </Form.Group>
                  <FloatingLabel label='Treść wiadomości'>
                    <Form.Control
                      className='mt-3'
                      as='textarea'
                      placeholder='Treść wiadomości' />
                  </FloatingLabel>
                  <FormGroup className='mt-3'>
                    <Button
                      className='me-2'
                      variant='light'
                      size='sm'
                      type='submit'>Wyślij</Button>
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
