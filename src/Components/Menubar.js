import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Menubar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to={"/services"} className="nav-link">
                Services
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to={"/form"} className="nav-link">
                Forms
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to={"/productpage"} className="nav-link">
                ProductsPage
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to={"/effects"} className="nav-link">
                Effects
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to={"/cart"} className="nav-link">
                Cart
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
