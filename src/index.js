import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error_page";
import AboutCompany from "./about_company/about_company.js";
import GalleryPage from "./gallery/main_gallery";
import HomePage from "./home_page/home_page";
import ContactInfo from "./contact_info/contact_info";


// React Bootstrap Configuration

import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about-company',
    element: <AboutCompany />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/contact-info',
    element: <ContactInfo />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

