import React, { useContext } from "react";
import Logo from "../images/genie.png";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../App";

const NavbarComponent = () => {
  const [cart] = useContext(CartContext);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="mb-3"
      fixed="top"
      // style={{ alignItems: "center" }}
    >
      <Container fluid>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Navbar.Brand style={{ fontSize: "30px" }}>
            <img style={{ width: "50px" }} src={Logo} alt="" /> genie
          </Navbar.Brand>
        </Link>

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
              <NavLink
                to={"/signin"}
                style={{
                  margin: "10px",
                  textDecoration: "none",
                  color: "grey",
                }}
              >
                Sign in
              </NavLink>

              <NavLink
                to={"/cart"}
                style={{
                  margin: "10px",
                  textDecoration: "none",
                  color: "grey",
                }}
              >
                <Badge
                  pill
                  bg="primary"
                  style={{ borderRadius: "100%", marginRight: "5px" }}
                >
                  {cart.length}
                </Badge>
                Cart
              </NavLink>

              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
