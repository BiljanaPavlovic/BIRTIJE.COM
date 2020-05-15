import React, { useState, useContext } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { CommentList, CommentContext } from "./commentList";
import singleComment from "./singleComment";

export default function UsersComment() {
  const [counter, setCounter] = useState(0);
  const [negativCounter, setNegativCounter] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, commentList] = useContext(CommentContext);

  const uptadeName = (e) => {
    setName(e.target.value);
  };

  const uptadeComment = (e) => {
    setComment(e.target.value);
  };

  const addComment = (e) => {
    e.preventDefault();
    CommentList((prevComments) => [
      {
        name: name,
        comment: comment,
      },
    ]);
  };

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setNegativCounter(negativCounter - 1);
  };
  console.log(CommentList)
  return (
    <div className="comment">
      <p>Napišite nam svoj komentar ako ste posetili ovu birtiju</p>
      {comments.map(comment => (
        <CommentList
          name={name}
          comments={comment}
          
        />
      ))}

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


      <form onSubmit={addComment}>
        <input
          type="text"
          className = 'input-comment'
          placeholder="Vase ime"
          name="name"
          value={name}
          onChange={uptadeName}
        />
        <br />
        <input
          type="text"
          className = 'input-comment'
          name="comment"
          value={comment}
          onChange={uptadeComment}
          placeholder="Komentar"
        /><br/>
        <button className="btn-about">Posalji</button>
      </form>
    </div>
  );
}
