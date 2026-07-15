import { Container, Card, Accordion } from "react-bootstrap";

function Help() {
  return (
    <Container className="mt-4">

      {/* Page heading */}
      <h2 className="text-center mb-4">
        Help & Guide
      </h2>

      <Card className="help-card">
        <Card.Body>

          <p>
            Welcome to the Personal Event Planner. 
            This guide explains how to use the application
            and manage your events effectively.
          </p>

          <Accordion>

            {/* Navigation instructions */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How do I navigate the app?
              </Accordion.Header>

              <Accordion.Body>
                Use the navigation menu at the top of the
                page to access the Dashboard, Add Event,
                and Help sections.
              </Accordion.Body>
            </Accordion.Item>


            {/* Registration instructions */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How do I create an account?
              </Accordion.Header>

              <Accordion.Body>
                Go to the Register page and enter your
                name, email, username, and password.
                Make sure all fields are completed and
                your email address is valid.
              </Accordion.Body>
            </Accordion.Item>


            {/* Creating events */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How do I create an event?
              </Accordion.Header>

              <Accordion.Body>
                Open the Add Event page and provide the
                event name, date, time, description,
                and location. Click Save Event to add it
                to your Dashboard.
              </Accordion.Body>
            </Accordion.Item>


            {/* Editing events */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How do I edit an event?
              </Accordion.Header>

              <Accordion.Body>
                Go to your Dashboard and select the Edit
                button on the event you want to change.
                Update the information and save your
                changes.
              </Accordion.Body>
            </Accordion.Item>


            {/* Deleting events */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                How do I delete an event?
              </Accordion.Header>

              <Accordion.Body>
                On the Dashboard, select the Delete button
                next to the event you want to remove.
                The event will be removed immediately.
              </Accordion.Body>
            </Accordion.Item>


            {/* Tips */}
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Event organisation tips
              </Accordion.Header>

              <Accordion.Body>
                Keep your events organised by adding
                accurate dates, times, and locations.
                Update your events when details change
                and remove old events you no longer need.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>

        </Card.Body>
      </Card>

    </Container>
  );
}

export default Help;