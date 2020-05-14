import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export default function Navigation() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        bg="light"
        fixed="top"
      >
        <Navbar.Brand href="/">Pocetna strana</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">O kafanama</Nav.Link>
          <Nav.Link href="/pubList">Kafane</Nav.Link>
          <Nav.Link href="/profileList">Ziri</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
