import { Form, Button, Alert } from "react-bootstrap";

function EventForm({
  name,
  setName,
  date,
  setDate,
  time,
  setTime,
  description,
  setDescription,
  location,
  setLocation,
  handleSubmit,
  buttonText,
  error,
}) {
  return (
    <Form onSubmit={handleSubmit}>

      {/* Display validation errors */}
      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}

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
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Location</Form.Label>
        <Form.Control
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>

      <div className="d-grid">
        <Button type="submit" className="register-btn">
          {buttonText}
        </Button>
      </div>

    </Form>
  );
}

export default EventForm;