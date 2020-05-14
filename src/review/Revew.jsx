import React, {useState} from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Revew() {
    const [counter, setCounter] = useState(0);
    const [negativCounter, setNegativCounter] = useState(0);


    const increase= () => {
        setCounter(counter+1)
    }
    const decrease = () => {
        setNegativCounter(negativCounter - 1);
      };

    return (
        <div className = 'revew'>
            <p>Ovo je siri komentar koji ostavlja ziri za svaku birtiju/</p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Cum quo eos ut architecto, ipsum facere reiciendis officiis 
                 repudiandae quisquam neque veritatis tempora. Impedit voluptatem
                 boriosam ducimus, et commodi illo perspiciatis.
                </p>
                <Container>
  <Row>
    <Col> <h3>{counter}</h3>
      <button className="btn-like" onClick={increase}>
        <img src="/img/like.png" className="btn-like" alt="krigla" />
      </button></Col>
    <Col><h3>{negativCounter}</h3>
      <button className="btn-like" onClick={decrease}>
        <img src="/img/dislajk.png" className="btn-like" alt="krigla" />
      </button>
      </Col>
  </Row>
  
</Container>
                
        </div>
    )
}
