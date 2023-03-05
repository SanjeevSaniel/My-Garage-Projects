import React from "react";
import Logo from "../images/genie.png";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";

const NavbarComponent = () => {
  // const cart = 0;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="mb-3"
      sticky
    >
      <Container fluid>
        <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
          <img style={{ width: "50px" }} src={Logo} alt="" /> genie
        </Navbar.Brand>

        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
                <img style={{ width: "50px" }} src={Logo} alt="" /> genie
              </Navbar.Brand>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav id="responsive-navbar-nav">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#signin">Sign in</Nav.Link>
              <Nav.Link href="#cart">
                <Badge pill bg="primary" style={{ borderRadius: "100%" }}>
                  1
                </Badge>
                Cart
              </Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
