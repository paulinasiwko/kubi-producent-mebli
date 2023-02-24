import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import './components.css'

export default function SocialFollow() {
  return (
    <div className='facebookSocial'>
      <a href='https://www.facebook.com/profile.php?id=100063485287584'>
        <FontAwesomeIcon icon={faFacebook} size='2x' />
      </a>
    </div>
  );
}