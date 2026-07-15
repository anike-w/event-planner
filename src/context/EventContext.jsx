import { createContext, useState } from "react";

// Create the Event Context
export const EventContext = createContext();

function EventProvider({ children }) {
  // Stores all events
  const [events, setEvents] = useState([]);

  // Adds a new event
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  // Updates an existing event
  const updateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  // Removes an event
  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;