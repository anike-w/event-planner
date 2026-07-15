import { useState, useContext } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { EventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";


function AddEvent() {
  // Access the addEvent function from Event Context
  const { addEvent } = useContext(EventContext);

  // Used to navigate back to the Dashboard
  const navigate = useNavigate();

  // State variables store the event details
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  // Stores validation errors
  const [error, setError] = useState("");

  // Handles the event form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check that all fields have been completed
    if (!name || !date || !time || !description || !location) {
      setError("Please complete all fields.");
      return;
    }

    // Create a new event object
    const newEvent = {
      id: Date.now(),
      name,
      date,
      time,
      description,
      location,
    };

    // Add the event to Context
    addEvent(newEvent);

    // Clear any previous errors
    setError("");

    // Return to the Dashboard
    navigate("/dashboard");
  };

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card className="register-card">
        <Card.Body>
          {/* Page heading */}
          <h2 className="text-center mb-4">Add Event</h2>

          {/* Display validation errors */}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* Event name */}
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the event name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            {/* Event date */}
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            {/* Event time */}
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>

            {/* Event description */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter a short description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            {/* Event location */}
            <Form.Group className="mb-4">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the event location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            {/* Save button */}
            <div className="d-grid">
              <Button type="submit" className="register-btn">
                Save Event
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddEvent;