import { useState, useContext } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Register() {
  // Access the user context
  const { setUser } = useContext(UserContext);

  // Used to redirect the user after registration
  const navigate = useNavigate();

  // State variables store the user's input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Stores validation errors
  const [error, setError] = useState("");

  // Handles the registration form
  const handleRegister = (e) => {
    e.preventDefault();

    // Check that all fields have been completed
    if (!name || !email || !username || !password) {
      setError("Please complete all fields.");
      return;
    }

    // Validate email format
    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Save the user's information in Context
    setUser({
      name,
      email,
      username,
      password,
    });

    // Clear any previous errors
    setError("");

    // Redirect to the Login page
    navigate("/login");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card className="register-card">
        <Card.Body>

          {/* Page heading */}
          <h2 className="text-center mb-4">Create Account</h2>

          {/* Display validation errors */}
          {error && <Alert variant="danger">{error}</Alert>}

          {/* Registration form */}
          <Form onSubmit={handleRegister}>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid">
              <Button type="submit" className="register-btn">
                Register
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;