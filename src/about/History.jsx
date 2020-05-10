import React from "react";
import Text1 from "./pubhistory/Text1";
import Text2 from "./pubhistory/Text2";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Text3 from "./pubhistory/Text3";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';



export default function History() {
  return (
    <div>
      <Container>
        <Router>

       
        <Row>

          <Col>
          <Link to =  '/about/history/text1'>
            <img
              src="/img/tekst1/slika4.jpg"
              className="pub-img-nav"
              alt="slika"
              />
              </Link>
                        <h3> Kafana kod ?</h3>

          </Col>

          <Col>
              <Link to =  '/about/history/text2'>
            <img
              src="/img/tekst2/stariIzgled.jpg"
              className="pub-img-nav"
              alt="slika"
              />
          </Link>
            <h3> Srpska kruna</h3>
          </Col>

          <Col>
          <Link to =  '/about/history/text3'>
          <img
              src="/img/tekst3/natpisDardaneli.jpg"
              className="pub-img-nav"
              alt="slika"/>
              </Link>
              <h3>Kafana ,,Dardaneli"</h3>
              </Col>
        </Row>

        <Route path = '/about/history/text1' component = {Text1} />
        <Route path = '/about/history/text2' component = {Text2} />
        <Route path = '/about/history/text3' component = {Text3} />

        </Router>
      </Container>



      
    </div>
  );
}
