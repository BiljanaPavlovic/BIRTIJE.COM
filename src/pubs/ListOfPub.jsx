import React from "react";
import PubShort from "./PubShort";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function ListOfPub() {

  //list of all pubs with list of all data that is passing in other components
  
  return (
    <div>
      <h2>Lista kafana</h2>

      <Container>
        <Row>
          <Col>
            <PubShort
              name="Mornar"
              slika="https://i2.wp.com/www.pivo.rs/wp-content/uploads/2014/08/mornar1.jpg"
              opis="Stara beogradska kafan u kojoj se mozete opustiti uz razgovor sa prijateljima i probati nešto od specijaliteta domaće kuhinje "
              adress="Dečanska 2 Beograd"
              desctiption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam "
            />
          </Col>

          <Col>
            <PubShort
              name="Sunce"
              slika="https://www.u-beogradu.com/uploads/2015/10/restoran-sunce-beograd-11-823x420.jpg"
              opis="Stara kafana na odličnom mestu... "
              adress="Dečanska 1 Beograd"
              desctiption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam "
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PubShort
              name="Zora"
              slika="https://www.vostok.rs/sajt/doc/black-turtle-6-zora_5.jpg"
              opis="Stara kafana sa dugom tradicijom ali renovirana. Možete probati piva različitih vrsta i ukusa. "
              adress="Makedonska 7 Beograd"
              desctiption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam "
            />
          </Col>
          <Col>
            <PubShort
              name="Kod Ane"
              slika="/img/birtija.jpg"
              opis="Prava birtija odlična uživo muzika. "
              adress="Sarajevska 26 Beograd"
              desctiption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
