import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div style={{marginRight: '10px'}}>
      <a href='https://www.facebook.com/profile.php?id=100063485287584'>
        <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
      </a>
    </div>
  );
}