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

function Login() {
  const { user, setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!user) {
      setError("Please register an account first.");
      return;
    }

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
    <Container className="d-flex justify-content-center align-items-center mt-4">
      <Card className="register-card">
        <Card.Body>

          <h2 className="text-center mb-4">
            Login
          </h2>

          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

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

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/">
              Register here
            </Link>
          </p>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;