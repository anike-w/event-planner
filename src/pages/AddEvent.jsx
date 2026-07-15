import { useState, useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { EventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";

function AddEvent() {
  // Access addEvent from Context
  const { addEvent } = useContext(EventContext);

  // Navigate back to dashboard
  const navigate = useNavigate();

  // Event form state
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  // Validation error
  const [error, setError] = useState("");

  // Save new event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date || !time || !description || !location) {
      setError("Please complete all fields.");
      return;
    }

    const newEvent = {
      id: Date.now(),
      name,
      date,
      time,
      description,
      location,
    };

    addEvent(newEvent);

    navigate("/dashboard");
  };

  return (
    <Container className="d-flex justify-content-center mt-4">

      <Card className="register-card">
        <Card.Body>

          <h2 className="text-center mb-4">
            Add Event
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
            buttonText="Save Event"
            error={error}
          />

        </Card.Body>
      </Card>

    </Container>
  );
}

export default AddEvent;