import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function UsersComment() {
  const [counter, setCounter] = useState(0);
  const [negativCounter, setNegativCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setNegativCounter(negativCounter - 1);
  };
  return (
    <div>
      <p>Ovo je kratki komentar koji ostavlja korisnik.</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
        recusandae ad aperiam rerum soluta sint dignissimos blanditiis
        accusantium odit vero?
      </p>
      <Container>
  <Row>
    <Col> <h3>{counter}</h3>
      <button className="btn-like" onClick={increase}>
        <img src="/img/like.png" alt="krigla" />
      </button></Col>
    <Col><h3>{negativCounter}</h3>
      <button className="btn-like" onClick={decrease}>
        <img src="/img/dislajk.png" alt="krigla" />
      </button>
      <hr /></Col>
  </Row>
  
</Container>
     
      
      <p>Napišite nam svoj komentar ako ste posetili ovu birtiju</p>
      <input type="text" placeholder="Vase ime"></input> <br />
      <input type="text" placeholder="Komentar"></input>
    </div>
  );
}
