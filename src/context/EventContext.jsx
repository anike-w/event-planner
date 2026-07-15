import { createContext, useState } from "react";

// Create the Event Context
export const EventContext = createContext();

function EventProvider({ children }) {
  // Stores all events
  const [events, setEvents] = useState([]);

  // Add a new event
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  // Update an existing event
  const updateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  // Delete an event
  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  // Find an event using its ID
  const getEventById = (id) => {
    return events.find((event) => event.id === Number(id));
  };

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        getEventById,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;