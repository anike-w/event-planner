import { useContext } from "react";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import {
  NavLink,
  useNavigate,
} from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Header() {
 const {
  isLoggedIn,
  setIsLoggedIn,
} = useContext(UserContext);

  const navigate = useNavigate();

  // Logout the current user
 const handleLogout = () => {
  setIsLoggedIn(false);
  navigate("/login");
};

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

            <Nav.Link
              as={NavLink}
              to="/dashboard"
            >
              Dashboard
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/add-event"
            >
              Add Event
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/help"
            >
              Help
            </Nav.Link>

            {isLoggedIn && (
              <Nav.Link onClick={handleLogout}>
                Logout
              </Nav.Link>
            )}

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;