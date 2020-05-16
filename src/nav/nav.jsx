import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";




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
          
          <Link to = "/about">
          <Nav.Link  className = 'nav' href ="/about" >O kafanama</Nav.Link>

          </Link>
          
          <Link to = "/pubList">
          <Nav.Link  className = 'nav' href = "/pubList" >Kafane</Nav.Link>

          </Link>
          
          <Link to  = "/profileList" >

          <Nav.Link className = 'nav' href = "/profileList"  >Žiri</Nav.Link>
          </Link>
          
        </Nav>
      </Navbar>
      

    </div>
  );
}
