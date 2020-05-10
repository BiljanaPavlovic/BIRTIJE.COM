import React from 'react';
import Poem1 from './pubPoems/Poem1';
import Toasts from './pubPoems/Toasts';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Poems() {
    return (
        <div>
            <h2>Ovde ce se prikazivati pesme o kafanama.</h2>
            <Container>
        <Row>
          <Col>
            <img
              src="/img/citati.jpg"
              className="pub-img-nav"
              alt="slika"
            />
                        <p> Citati</p>

          </Col>
          <Col>
            <img
              src="/img/zdravice.jpg"
              className="pub-img-nav"
              alt="slika"
            />
            <p>Zdravice</p>
          </Col>
          <Col>
          <img
              src="/img/poezija.jpg"
              className="pub-img-nav"
              alt="slika"/>
              <p>Poezija</p>
              </Col>
        </Row>
      </Container>


           <Poem1 />
           <Toasts />
        </div>
    )
}
