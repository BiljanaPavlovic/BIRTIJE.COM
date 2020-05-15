import React from "react";
import ShortProfile from "./ShortProfile";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function ListOfProfiles() {
  return (
    <div className="short-profile-list">
      <Container>
        <Row md={4}>
          <Col>
            <ShortProfile
              name="Jovke"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description="Lorem ipsum doloreLorem Ipsum is simply dummy text of the printing and typesetting industr"
            />
          </Col>
          <Col xs={6}>
            <ShortProfile
              name="Mire"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
          <Col>
            <ShortProfile
              name="Dzoni"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
        </Row>
        <Row md={4}>
          <Col>
            <ShortProfile
              name="Glomi"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
          <Col xs={6}>
            <ShortProfile
              name="Boki"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
          <Col>
            <ShortProfile
              name="Djeka"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
        </Row>
        <Row md={4}>
          <Col>
            <ShortProfile
              name="Mina"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
          <Col xs={6}>
            <ShortProfile
              name="Sava"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
          <Col>
            <ShortProfile
              name="JovanaP"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
        </Row>
        <Row md={4}>
          <Col>
            <ShortProfile
              name="Bilja"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
          <Col xs={6}>
            <ShortProfile
              name="Marina"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
          <Col>
            <ShortProfile
              name="Aleksandra"
              slika1="/img/smajli1.jpg"
              slika2="/img/smajli.jpg"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
