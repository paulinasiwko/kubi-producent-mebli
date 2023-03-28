import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './components.css';

export default function FooterElement({ icon, elementText }) {
  return (
    <Col md='3' sm='6' xs='12'
         className='footerElement'>
      <Link to={'/contact-info'}
            className='footerElementLink'>
        {icon}
        <p>{elementText}</p>
      </Link>
    </Col>
  );
}