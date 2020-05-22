import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";


export default function SingleComment({ name, comment }) {
  const [counter, setCounter] = useState(0);
  const [negativCounter, setNegativCounter] = useState(0);

//function for like btn

  const increase = () => {
    setCounter(counter + 1);
  };

  //function for dislike btn

  const decrease = () => {
    setNegativCounter(negativCounter - 1);
  };


  


  //form for single comment
  return (
    <div className = 'single-comment'>
      <h6>Ime: {name}</h6>
      <p>Komentar: {comment}</p>
      
      <Container>
        <Row>
          <Col>
            
            <h3>{counter}</h3>
            <button className="btn-like" onClick={increase}>
              <img className="btn-like" src="/img/like.png" alt="krigla" />
            </button>
          </Col>
          <Col>
            <h3>{negativCounter}</h3>
            <button className="btn-like" onClick={decrease}>
              <img src="/img/dislajk.png" className="btn-like" alt="krigla" />
            </button>
          </Col>
        </Row>
     </Container>
    </div>
  );
}
