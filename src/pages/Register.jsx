import { useState, useContext } from "react";
import {
  Form,
  Button,
  Container,
  Card,
  Alert,
} from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  // Access the user context
  const {
    setUser,
    setIsLoggedIn,
  } = useContext(UserContext);

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

    // Check that all fields have been been completed
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

    // Save the user's information
    setUser({
      name,
      email,
      username,
      password,
    });

    // Automatically log the user in
    setIsLoggedIn(true);

    // Clear any previous errors
    setError("");

    // Go straight to the Dashboard
    navigate("/dashboard");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-4">
      <Card className="register-card">
        <Card.Body>

          <h2 className="text-center mb-4">
            Create Account
          </h2>

          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

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
              <Button
                type="submit"
                className="register-btn"
              >
                Register
              </Button>
            </div>

          </Form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login">
              Log in here
            </Link>
          </p>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;