import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EventCard({ event, deleteEvent }) {
  const navigate = useNavigate();

  return (
    <Card className="event-card mb-3">
      <Card.Body>

        {/* Event information */}
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

        <p>
          {event.description}
        </p>

        {/* Edit and delete buttons */}
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
  );
}

export default EventCard;