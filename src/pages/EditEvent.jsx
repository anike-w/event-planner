import { useState, useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { EventContext } from "../context/EventContext";
import { useParams, useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEvent() {
  // Get event ID from URL
  const { id } = useParams();

  // Get events and update function
  const { events, updateEvent } = useContext(EventContext);

  // Find selected event
  const currentEvent = events.find(
    (event) => event.id === Number(id)
  );

  const navigate = useNavigate();

  // If event is not found
  if (!currentEvent) {
    return (
      <Container className="mt-4">
        <h3>Event not found.</h3>
      </Container>
    );
  }

  // Store event details
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

  // Save updated event
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

          <EventForm
            name={name}
            setName={setName}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            description={description}
            setDescription={setDescription}
            location={location}
            setLocation={setLocation}
            handleSubmit={handleSubmit}
            buttonText="Update Event"
            error={error}
          />

        </Card.Body>
      </Card>

    </Container>
  );
}

export default EditEvent;