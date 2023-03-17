import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function FooterElement({ icon, elementText }) {
  return (
    <Col md='3'
         sm='6'
         xs='12'
         style={{borderLeft: '1px solid white',
           borderRight: '1px solid white'}}>
      <Link to={'/contact-info'} style={{color: 'white', textDecoration: 'none'}}>
        {icon}
        <p>{elementText}</p>
      </Link>
    </Col>
  );
}