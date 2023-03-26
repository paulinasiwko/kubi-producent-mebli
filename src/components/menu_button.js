import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function MenuButton({ href, buttonText }) {
  return (
    <NavLink
      variant='light'
      as={Link}
      to={href}
      style={{margin: '10px',
        color: 'black',
        backgroundColor: 'white',
        borderBottom: '1px solid grey',
        textDecoration: 'underline white'}}
    >{buttonText}</NavLink>
  );
}