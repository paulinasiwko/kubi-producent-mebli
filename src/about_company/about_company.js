import React from 'react';
import './about_company.css';
import NavigationMenu from "../components/main_navigation_menu";
import AdditionalNavigationMenu from "../components/additional_navigation_menu";

export default function AboutCompany() {
  return (
    <>
      <NavigationMenu />
      <AdditionalNavigationMenu menuText={'O firmie'} />
    </>
  );
}