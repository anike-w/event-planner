import { useState, useContext } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  // Access user information from Context
  const { user, setIsLoggedIn } = useContext(UserContext);

  // Used to navigate to the Dashboard after login
  const navigate = useNavigate();

  // State variables for the login form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Stores login error messages
  const [error, setError] = useState("");

  // Handles the login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Check if a user has registered
    if (!user) {
      setError("Please register an account first.");
      return;
    }

    // Check that the login details match the registered user
    if (
      username === user.username &&
      password === user.password
    ) {
      setIsLoggedIn(true);
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card className="register-card">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>

          {/* Display login errors */}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid">
              <Button type="submit" className="register-btn">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;