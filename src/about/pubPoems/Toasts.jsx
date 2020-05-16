import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';



export default function Toasts() {
  return (
    <div>
      <Container>
      <Image src="/img/zdravicaNaslovna.jpg" fluid />
        <h2>Srpske narodne zdravice</h2>
        <Row>
          <Col>
            <img src="/img/vinoCasa.png" alt="Casa vina" />
            <h4>U dobri čas od objeda</h4>
            <p>
              "Sve s časom dobrijem a mirom božijem, da pijemo u dobri čas od
              objeda, da se namjeri dobri čas na objedu i po objedu, našemu
              bratu domaćinu i ko je u njegovom poštenom domu!"
            </p>
          </Col>
          <Col>
            <img src="/img/vinoCasa.png" alt="Casa vina" />
            <img src="/img/vinoCasa.png" alt="Casa vina" />
            <h4>U bolji čas od objeda</h4>
            <p>
              "Pismo u dobri čas, a sad ćemo i u bolji; dobri pomagali a bolji
              priskakali našemu bratu domaćinu i ko je na njegovom poštenom
              objedu."
            </p>
            <p>
              Poslije ove zdravice ustaje se u slavu, pa pošto sveštenik svrši
              svoje onda se, dok još svi gologlavi stoje na nogama, napija:
            </p>
          </Col>
          <Col>
            <img src="/img/vinoCasa.png" alt="Casa vina" />
            <img src="/img/vinoCasa.png" alt="Casa vina" />
            <img src="/img/vinoCasa.png" alt="Casa vina" />
            <h4>U slavu božju</h4>
            <p>
              "Pismo u dobri i u bolji čas, a sad ćemo u prelijepu slavu božju.
              Da nam pomože bog i lijepa slava božja? Koji god u slavu božju
              ustajao, te je spominjao, i njoj se molio, njemu i pomogla duši i
              tijelu; koji li je zaboravljao il' u strahu, il' u stidu, il' u
              svome sagrješeniju, te je ne spomenuo, bog i lijepa slava božja
              njega ne zaboravila, no bila mu najbolja pomotnjica duši i
              tijelu!"
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
