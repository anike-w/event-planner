import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      className="header"
      sticky="top"
    >
      <Container>

        <Navbar.Brand as={NavLink} to="/dashboard">
          Event Planner
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">

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