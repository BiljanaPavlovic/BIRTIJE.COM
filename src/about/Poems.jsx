import React from "react";
import Poem1 from "./pubPoems/Poem1";
import Toasts from "./pubPoems/Toasts";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Quotes from "./Quotes";

export default function Poems() {
  return (
    <div>
      <Container>
        <Router>
          <Row>
            <Col>
            <Link to = "/about/poems/quotes">

              <img src="/img/citati.jpg" className="pub-img-nav" alt="slika" />
              <h3> Citati</h3>
            </Link>
            </Col>
            <Col>
            <Link to = "/about/poems/toasts">

              <img
                src="/img/zdravice.jpg"
                className="pub-img-nav"
                alt="slika"
                />
              <h3>Zdravice</h3>
                </Link>
            </Col>
            <Col>
            <Link to = "/about/poems/poem">

              <img src="/img/poezija.jpg" className="pub-img-nav" alt="slika" />
              <h3>Poezija</h3>
            </Link>
            </Col>
          </Row>

          <Route path="/about/poems/poem" component={Poem1} />
          <Route path="/about/poems/toasts" component={Toasts} />
          <Route path="/about/poems/quotes" component={Quotes} />
        </Router>
      </Container>
    </div>
  );
}
