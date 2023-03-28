import React from 'react';
import './about_company.css'
import NavigationMenu from "../components/main_navigation_menu";
import {Container, Col, Row } from 'react-bootstrap';
import Footer from "../components/footer";
import AboutCompanyParagraph from "../components/about_company_paragraph";
import Separator from "../components/separator";
export default function AboutCompany() {
  return (
    <>
      <NavigationMenu />
      <Container fluid>
        <Row>
          <Col sm='12' md='3'
               className='h1'>
            <h1>O firmie</h1>
          </Col>
            <Col sm='12' md='9'
                 className='d-block pageBackgroundPhoto'>
              <div className='aboutCompanyTransbox'>
                <AboutCompanyParagraph paragraph={'Firma "KUBI - Producent mebli" funkcjonuje i nieustannie się rozwija od 2020 roku.'} />
                <Separator />
                <AboutCompanyParagraph paragraph={'Jesteśmy rodzinną firmą z Jegłownika, która świadczy usługi stolarskie na terenie całej Polski.\n' +
                    '                  Zajmujemy się wszelkiego rodzaju meblami pod wymiar tj. zabudowy kuchenne, szafy, garderoby, meble pokojowe, meble sypialniane i RTV.\n' +
                    '                  Na swoim koncie mamy ogrom zakończonych projektów, a o naszym sukcesie świadczą setki zadowolonych klientów.\n' +
                    '                  Naszą pracę wykonujemy solidnie i z niezwykłą starannością.'} />
                <Separator />
                <AboutCompanyParagraph paragraph={'Do produkcji naszych mebli używamy najlepszej jakości materiałów oraz akcesoriów meblowych.\n' +
                    '                  Wkładamy dużo pracy i serca, by nasi klienci byli spokojni i przede wszystkim zadowoleni z naszych usług, ponieważ Państwa satysfakcja jest dla nas\n' +
                    '                  najważniejsza.'} />
                <Separator />
                <AboutCompanyParagraph paragraph={'Jesteś zainteresowany/a? Skontaktuj się z nami! Chętnie odpowiemy na państwa pytania i rozwiejemy wszelkie wątpliwości :)'} />
                <p className='signature'>- Jakub Podufalski</p>
              </div>
            </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}