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
        fixed="top"
        className = 'nav'
      >
        <Navbar.Brand className = 'nav' href="/">Pocetna strana</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link  className = 'nav' href="/about">O kafanama</Nav.Link>
          <Nav.Link  className = 'nav' href="/pubList">Kafane</Nav.Link>
          <Nav.Link className = 'nav'  href="/profileList">Žiri</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
