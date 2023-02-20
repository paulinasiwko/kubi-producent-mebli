import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from "./app/app";
//import AboutCompany from "./about_company/about_company.js";


// React Bootstrap Configuration

import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ContactInfo from "./contact_info/contact_info";

//import GalleryPage from "./gallery/main_gallery";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactInfo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
