import React from "react";
import Text1 from "./pubhistory/Text1";
import Text2 from "./pubhistory/Text2";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Text3 from "./pubhistory/Text3";

export default function History() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              src="/img/tekst1/slika4.jpg"
              className="pub-img-nav"
              alt="slika"
            />
                        <p> Kafana kod ?</p>

          </Col>
          <Col>
            <img
              src="/img/tekst2/stariIzgled.jpg"
              className="pub-img-nav"
              alt="slika"
            />
            <p> Srpska kruna</p>
          </Col>
          <Col>
          <img
              src="/img/tekst3/natpisDardaneli.jpg"
              className="pub-img-nav"
              alt="slika"/>
              <p>Kafana ,,Dardaneli"</p>
              </Col>
        </Row>
      </Container>

      <Text1 />
      <Text2 />
      <Text3 />
    </div>
  );
}
