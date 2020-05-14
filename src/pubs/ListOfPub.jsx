import React from "react";
import PubShort from "./PubShort";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function ListOfPub() {
  
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {" "}
            <PubShort
              name="Mornar"
              slika="https://i2.wp.com/www.pivo.rs/wp-content/uploads/2014/08/mornar1.jpg"
              opis="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
            />{" "}
          </Col>

          <Col>
            {" "}
            <PubShort
              name="Sunce"
              slika="https://www.u-beogradu.com/uploads/2015/10/restoran-sunce-beograd-11-823x420.jpg"
              opis="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <PubShort
              name="Zora"
              slika="https://www.vostok.rs/sajt/doc/black-turtle-6-zora_5.jpg"
              opis="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
            />
          </Col>
          <Col>
            {" "}
            <PubShort
              name="Ana"
              slika="/img/birtija.jpg"
              opis="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
