import React from "react";
import Form from "react-bootstrap/Form";

export default function DashBoard() {
  return (
    <div>
      <h2>Dashboard za unosenje recenzija</h2>
      <p>
        Ovo se pojavljuje kada je clan zirija ulogovan i hoce da napise svoju
        recenziju.
      </p>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
          <Form.Control as="select">
            <option>Mornar</option>
            <option>Sunce</option>
            <option>Zora</option>
            <option>Ana</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
      <button className="btn-about">Save</button>
      <hr />
    </div>
  );
}
