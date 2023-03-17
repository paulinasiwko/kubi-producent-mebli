import React from 'react';
import { NavLink } from 'react-bootstrap';

export default function MenuButton({ href, buttonText }) {
  return (
    <NavLink
      variant='light'
      href={href}
      style={{margin: '10px',
        color: 'black',
        backgroundColor: 'white',
        borderBottom: '1px solid grey',
        textDecoration: 'underline white'}}
    >{buttonText}</NavLink>
  );
}