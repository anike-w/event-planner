import { useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { EventContext } from "../context/EventContext";
import EventCard from "../components/EventCard";

function Dashboard() {
  // Get logged-in user details
  const { user } = useContext(UserContext);

  // Get events and delete function
  const { events, deleteEvent } = useContext(EventContext);

  return (
    <Container className="mt-4">

      {/* Welcome message */}
      <h2 className="text-center mb-4">
        Welcome{user ? `, ${user.name}` : ""}!
      </h2>

      <h4 className="mb-3">
        Upcoming Events
      </h4>

      {/* Show message if there are no events */}
      {events.length === 0 ? (
        <Card className="p-4 text-center">
          <p>
            No events have been added yet.
          </p>
        </Card>
      ) : (

        // Display events dynamically using map()
        events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))

      )}

    </Container>
  );
}

export default Dashboard;