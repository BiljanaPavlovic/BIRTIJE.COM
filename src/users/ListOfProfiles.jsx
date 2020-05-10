import React from "react";
import ShortProfile from "./ShortProfile";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function ListOfProfiles() {
  return (
    <div className = 'short-profile-list'>
      <Container>
        <Row md={4}>
          <Col>
           
            <ShortProfile name="Jovke" />
          </Col>
          <Col xs={6}>
           
            <ShortProfile name="Mire" />
          </Col>
          <Col>
           
            <ShortProfile name="Dzoni" />
          </Col>
        </Row>
        <Row md={4}>
          <Col>
           
            <ShortProfile name="Glomi" />
          </Col>
          <Col xs={6}>
           
            <ShortProfile name="Boki" />
          </Col>
          <Col>
           
            <ShortProfile name="Djeka" />
          </Col>
        </Row>
        <Row md={4}>
          <Col>
           
            <ShortProfile name="Mina" />
          </Col>
          <Col xs={6}>
           
            <ShortProfile name="Sava" />
          </Col>
          <Col>
           
            <ShortProfile name="JovanaP" />
          </Col>
        </Row>
        <Row md={4}>
          <Col>
           
            <ShortProfile name="Bilja" />
          </Col>
          <Col xs={6}>
           
            <ShortProfile name="Marina" />
          </Col>
          <Col>
           
            <ShortProfile name="Aleksandra" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
