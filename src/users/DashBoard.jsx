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
          <Form.Label>Unesi svoj mejl</Form.Label>
          <Form.Control type="email" className = 'input-dashboard' placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Izaberi naziv kafane</Form.Label>
          <Form.Control className = 'input-dashboard' as="select">
            <option>Mornar</option>
            <option>Sunce</option>
            <option>Zora</option>
            <option>Ana</option>
           
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Unesi svoju recenziju</Form.Label>
          <Form.Control as="textarea" className = 'input-dashboard' rows="3" />
        </Form.Group>
      </Form>
      <button className="btn-about">Save</button>
      <hr />
    </div>
  );
}
