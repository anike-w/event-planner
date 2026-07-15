import { useState, useContext } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { EventContext } from "../context/EventContext";
import { useParams, useNavigate } from "react-router-dom";

function EditEvent() {
  // Get the event id from the URL
  const { id } = useParams();

  // Access events and update function
  const { events, updateEvent } = useContext(EventContext);

  // Find the event that needs editing
  const currentEvent = events.find(
    (event) => event.id === Number(id)
  );

  const navigate = useNavigate();

  // Store edited event details
  const [name, setName] = useState(currentEvent.name);
  const [date, setDate] = useState(currentEvent.date);
  const [time, setTime] = useState(currentEvent.time);
  const [description, setDescription] = useState(
    currentEvent.description
  );
  const [location, setLocation] = useState(
    currentEvent.location
  );

  const [error, setError] = useState("");

  // Update event details
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date || !time || !description || !location) {
      setError("Please complete all fields.");
      return;
    }

    const updatedEvent = {
      id: currentEvent.id,
      name,
      date,
      time,
      description,
      location,
    };

    updateEvent(updatedEvent);

    navigate("/dashboard");
  };

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card className="register-card">
        <Card.Body>

          <h2 className="text-center mb-4">
            Edit Event
          </h2>

          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Location</Form.Label>
              <Form.Control
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
              />
            </Form.Group>

            <div className="d-grid">
              <Button type="submit" className="register-btn">
                Update Event
              </Button>
            </div>

          </Form>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default EditEvent;