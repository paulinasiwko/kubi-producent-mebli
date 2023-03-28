import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './components.css';

export default function MenuButton({ href, buttonText }) {
  return (
    <NavLink
      variant='light'
      as={Link}
      to={href}
      className='menuButton'>{buttonText}</NavLink>
  );
}