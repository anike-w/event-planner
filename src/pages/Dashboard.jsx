import { useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { EventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  // Access the logged-in user
  const { user } = useContext(UserContext);

  // Access the event data and delete function
  const { events, deleteEvent } = useContext(EventContext);

  // Used to navigate to the edit page
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      {/* Welcome message */}
      <h2 className="mb-4">
        Welcome{user ? `, ${user.name}` : ""}!
      </h2>

      <h4 className="mb-3">Upcoming Events</h4>

      {events.length === 0 ? (
        <Card className="p-4 text-center">
          <p>No events have been added yet.</p>
        </Card>
      ) : (
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

              {/* Event action buttons */}
              <div className="d-flex gap-2">
                <Button
                  variant="outline-secondary"
                  onClick={() => navigate(`/edit-event/${event.id}`)}
                >
                  Edit
                </Button>

                <Button
                  variant="outline-danger"
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Dashboard;