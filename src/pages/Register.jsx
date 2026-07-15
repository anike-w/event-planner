import { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

function Register() {
  // State variables store the user's input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Stores validation error messages
  const [error, setError] = useState("");

  // Handles the registration form submission
  const handleRegister = (e) => {
    e.preventDefault();

    // Check that all fields have been completed
    if (!name || !email || !username || !password) {
      setError("Please complete all fields.");
      return;
    }

    // Validate the email format
    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear any previous error
    setError("");

    // Temporary success message
    alert("Registration successful!");
  };

  return (
    // Container keeps the form centred on the page
    <Container className="d-flex justify-content-center align-items-center">
      {/* Registration card */}
      <Card className="register-card">
        <Card.Body>
          {/* Page heading */}
          <h2 className="text-center mb-4">Create Account</h2>

          {/* Display validation errors */}
          {error && <Alert variant="danger">{error}</Alert>}

          {/* Registration form */}
          <Form onSubmit={handleRegister}>
            {/* Name input */}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            {/* Email input */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            {/* Username input */}
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            {/* Password input */}
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {/* Register button */}
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