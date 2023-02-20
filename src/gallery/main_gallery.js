import React from 'react';
import './main_gallery.css';
import NavigationMenu from "../components/main_navigation_menu";
import GallerySelect from "../components/gallery_select";

export default function GalleryPage() {
  return (
    <>
      <NavigationMenu />
      <h1 className='mt-4' style={{color: 'white', textAlign: 'center'}}>Galeria</h1>
      <p className='mt-4 paragraph' style={{color: 'white', textAlign: 'center'}}>
        Kuchnia to miejsce, w którym spędzamy większość czasu – tu przygotowujemy posiłki, jemy, ale też bardzo często po prostu siedzimy przy kawie i rozmawiamy z rodziną. Można zatem śmiało powiedzieć, że jest to pomieszczenie, które powinno być najbardziej reprezentatywne i urządzone w taki sposób, aby każdy z domowników i gości czuł się tu dobrze. Meble kuchenne to pierwszy i najważniejszy z aspektów przy urządzaniu tego wnętrza. Meble kuchenne powinny być wykonane z trwałego materiału oraz wyróżniać się nieskazitelnym wyglądem.
      </p>
      <div className='borderBottom'></div>
      <div className='gallerySelect'>
        <GallerySelect
          firstCard={'Kuchnie'}
          secondCard={'Szafy i garderoby'}
          thirdCard={'Łazienki'}
          fourthCard={'Meble pokojowe i RTV'}/>
      </div>
    </>
  );
}