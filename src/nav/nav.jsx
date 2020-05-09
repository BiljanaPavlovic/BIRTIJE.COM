import React from 'react'
import Nav from 'react-bootstrap/Nav'

export default function Navigation() {
  
  
    return (
        <>
        
        <Nav className="justify-content-end nav" activeKey="/home">
        <Nav.Item>
            <Nav.Link href="/home"><img src='./img/krigle.png' height = '25px' width = '30px' alt = 'logo' /></Nav.Link>
          </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/home">BIRTIJE.COM</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    );
  }