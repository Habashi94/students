import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>NC-Students</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/students">Students</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

