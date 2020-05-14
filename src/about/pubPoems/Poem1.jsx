import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Poem1() {
  return (
    <div>
      <Image src="/img/pesme/DIS-2.jpg" fluid />
      <h3>Ne marim da pijem</h3>
      <Container>
        <Row>
          <Col>
            {" "}
            <p>Ne marim da pijem, al' sam pijan često.</p>
            <p>U graji, bez druga, sam, kraj pune čaše.</p>
            <p>Zaboravim zemlju, zaboravim mesto</p>
            <p>Na kome se jadi i poroci zbraše.</p>
            <br />
            <p>Ne marim da pijem. Al' kad priđe tako</p>
            <p>Svet mojih radosti, umoren, i moli</p>
            <p>Za mir, za spasenje, za smrt ili pak`o,</p>
            <p>Ja se svemu smejem pa me sve i boli.</p>
            <br />
            <p>I pritisne očaj, sam, bez moje volje,</p>
            <p>Ceo jedan život, i njime se kreće;</p>
            <p>Uzvik ga prolama: "Neće biti bolje,</p>
            <p>Nikad, nikad bolje, nikad biti neće."</p>
            <br />
          </Col>
          <Col>
            <p>I ja žalim sebe. Meni nije dano,</p>
            <p>Da ja imam zemlju bez ubogih ljudi,</p>
            <p>Oči plave, tople kao leto rano,</p>
            <p>Život u svetlosti bez mraka i studi.</p>
            <br />
            <p>I želeći da se zaklonim od srama,</p>
            <p>Pijem, i zaželim da sam pijan dovek;</p>
            <p>Tad ne vidim porok, društvo gde je čama,</p>
            <p>Tad ne vidim ni stid što sam i ja čovek.</p>
            <br />
            <h5>DIS</h5>
          </Col>
        </Row>
      </Container>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AlyoksHnBpI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Serbedzija"
      ></iframe>
    </div>
  );
}
