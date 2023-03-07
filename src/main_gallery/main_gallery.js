import React from 'react';
import NavigationMenu from "../components/main_navigation_menu";
import GallerySelect from "../components/gallery_select";
import Footer from "../components/footer";
import {Col, Container, Row} from "react-bootstrap";

export default function GalleryPage() {
  return (
    <>
      <NavigationMenu />
      <Container style={{position: 'absolute', maxWidth: '100%'}}>
        <Row style={{backgroundColor: 'grey'}}>
          <Col xs='12' sm='12'>
            <h1 className='mt-4' style={{color: 'white', textAlign: 'center'}}>Galeria</h1>
            <p className='mt-4' style={{color: 'white', textAlign: 'center', margin: '0 60px'}}>
              Kuchnia to miejsce, w którym spędzamy większość czasu – tu przygotowujemy posiłki, jemy, ale też bardzo często po prostu siedzimy przy kawie i rozmawiamy z rodziną. Można zatem śmiało powiedzieć, że jest to pomieszczenie, które powinno być najbardziej reprezentatywne i urządzone w taki sposób, aby każdy z domowników i gości czuł się tu dobrze. Meble kuchenne to pierwszy i najważniejszy z aspektów przy urządzaniu tego wnętrza. Meble kuchenne powinny być wykonane z trwałego materiału oraz wyróżniać się nieskazitelnym wyglądem.
            </p>
            <div style={{borderBottom: '1px solid white', margin: '30px 20%'}} />
          </Col>
        </Row>
        <GallerySelect
          firstCard={'Kuchnie'}
          secondCard={'Szafy i garderoby'}
          thirdCard={'Łazienki'}
          fourthCard={'Meble pokojowe i RTV'}
          />
        <Footer />
      </Container>
      <Container fluid style={{maxWidth: '100%'}}>
        <Row style={{backgroundColor: 'grey', height: '450px'}} />
      </Container>
    </>
  );
}