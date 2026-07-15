import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "#F8C8DC" }}
    >
      <Container>
        <Navbar.Brand>🌸 Event Planner</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Register
            </Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>

            <Nav.Link as={NavLink} to="/dashboard">
              Dashboard
            </Nav.Link>

            <Nav.Link as={NavLink} to="/add-event">
              Add Event
            </Nav.Link>

            <Nav.Link as={NavLink} to="/help">
              Help
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;