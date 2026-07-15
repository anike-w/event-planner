import { useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { EventContext } from "../context/EventContext";

function Dashboard() {
  // Access the logged-in user
  const { user } = useContext(UserContext);

  // Access the events from Context
  const { events } = useContext(EventContext);

  return (
    <Container className="mt-4">

      {/* Welcome message */}
      <h2 className="mb-4">
        Welcome{user ? `, ${user.name}` : ""}!
      </h2>

      <h4 className="mb-3">Upcoming Events</h4>

      {/* Display a message if no events have been created */}
      {events.length === 0 ? (
        <Card className="p-4 text-center">
          <p>No events have been added yet.</p>
        </Card>
      ) : (
        // Display every event using the map() method
        events.map((event) => (
          <Card key={event.id} className="event-card mb-3">
            <Card.Body>
              <h5>{event.name}</h5>

              <p>
                <strong>Date:</strong> {event.date}
              </p>

              <p>
                <strong>Time:</strong> {event.time}
              </p>

              <p>
                <strong>Location:</strong> {event.location}
              </p>

              <p>{event.description}</p>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Dashboard;
