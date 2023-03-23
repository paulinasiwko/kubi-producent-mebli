import React from 'react';
import './about_company.css'
import NavigationMenu from "../components/main_navigation_menu";
import {Container, Col, Row } from 'react-bootstrap';
import Footer from "../components/footer";
export default function AboutCompany() {
  return (
    <>
      <NavigationMenu />
      <Container fluid>
        <Row>
          <Col sm='12'
               md='3'
               style={{color:'white',
                 backgroundColor: 'grey',
                 fontWeight: 'bold',
                 textAlign: 'center',
                 padding: '10% 0'}}>
            <h1>O firmie</h1>
          </Col>
            <Col sm='12'
                 md='9'
                 className='d-block pageBackgroundPhoto'>
              <div style={{display: 'block',
                border: '1px solid grey',
                margin: '30px 10%',
                backgroundColor: 'rgb(211, 211, 211, 0.8)'}}>
                <p style={{fontStyle: 'italic',
                  margin: '30px',
                  textAlign: 'center'}}>
                  Firma "KUBI - Producent mebli" funkcjonuje i nieustannie się rozwija od 2020 roku.
                </p>
                <div style={{borderBottom: '1px solid white',
                  margin: '0 20%'}} />
                <p style={{fontStyle: 'italic',
                  margin: '30px',
                  textAlign: 'center'}}>
                  Jesteśmy rodzinną firmą z Jegłownika, która świadczy usługi stolarskie na terenie całej Polski.
                  Zajmujemy się wszelkiego rodzaju meblami pod wymiar tj. zabudowy kuchenne, szafy, garderoby, meble pokojowe, meble sypialniane i RTV.
                  Na swoim koncie mamy ogrom zakończonych projektów, a o naszym sukcesie świadczą setki zadowolonych klientów.
                  Naszą pracę wykonujemy solidnie i z niezwykłą starannością.
                </p>
                <div style={{borderBottom: '1px solid white',
                  margin: '0 20%'}} />
                <p style={{fontStyle: 'italic',
                  margin: '30px',
                  textAlign: 'center'}}>
                  Do produkcji naszych mebli używamy najlepszej jakości materiałów oraz akcesoriów meblowych.
                  Wkładamy dużo pracy i serca, by nasi klienci byli spokojni i przede wszystkim zadowoleni z naszych usług, ponieważ Państwa satysfakcja jest dla nas
                  najważniejsza.
                </p>
                <div style={{borderBottom: '1px solid white',
                  margin: '0 20%'}} />
                <p style={{fontStyle: 'italic',
                  margin: '30px',
                  textAlign: 'center'}}>
                  Jesteś zainteresowany/a? Skontaktuj się z nami! Chętnie odpowiemy na państwa pytania i rozwiejemy wszelkie wątpliwości :)
                </p>
                <p style={{textAlign: 'right',
                  fontWeight: 'bold',
                  margin: '30px 10% 30px 0'}}>- Jakub Podufalski</p>
              </div>
            </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}