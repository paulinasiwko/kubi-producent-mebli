import React from 'react';
import './gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import AdditionalNavigationMenu from "../components/additional_navigation_menu";
import GallerySelect from "../components/gallery_select";

export default function GalleryPage() {
  return (
    <>
      <NavigationMenu />
      <AdditionalNavigationMenu menuText={'Galeria'} />
      <GallerySelect firstCard={'Kuchnie'} secondCard={'Szafy i garderoby'} thirdCard={'Łazienki'} />
    </>
  );
}