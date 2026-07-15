# Personal Event Planner

A React + Vite web application that allows users to create, organise, and manage personal or professional events such as appointments, meetings, and social gatherings.

The application provides a simple dashboard where users can view upcoming events, add new events, edit existing events, and remove events when they are no longer needed.

---

## Features

### User Management
- Create an account with:
  - Name
  - Email
  - Username
  - Password
- Form validation to ensure required fields are completed.
- User login functionality.
- Personalised dashboard welcome message.

### Event Management
- Add new events with:
  - Event name
  - Date
  - Time
  - Description
  - Location
- Display events dynamically using React's `map()` method.
- Edit existing event details.
- Delete events from the dashboard.
- Instant state updates using React Context API.

### Additional Features
- Fixed navigation header.
- Help section with user instructions.
- Responsive design for desktop and mobile screens.
- Pastel pink themed user interface.

---

## Technologies Used

- React
- Vite
- JavaScript
- JSX
- React Router
- React Bootstrap
- Context API
- CSS
- Git and GitHub for version control

---

## Installation and Setup

Follow these steps to run the application locally.

### 1. Clone the repository

```bash
git clone https://github.com/anike-w/event-planner.git
```

### 2. Navigate into the project folder

```bash
cd event-planner
```

### 3. Install project dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will open using the local URL provided by Vite.

---

## How To Use The Application

1. Register a new account by entering your personal details.
2. Login using your account information.
3. Access the dashboard to view upcoming events.
4. Select "Add Event" to create a new event.
5. Use the edit button to update event information.
6. Use the delete button to remove events.
7. Visit the Help section for additional guidance.

---

## Project Structure

```
src
│
├── components
│   ├── Header.jsx
│   ├── EventCard.jsx
│   └── EventForm.jsx
│
├── context
│   ├── UserContext.jsx
│   └── EventContext.jsx
│
├── pages
│   ├── Register.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── AddEvent.jsx
│   ├── EditEvent.jsx
│   └── Help.jsx
│
├── App.jsx
└── main.jsx
```

---

## Version Control

Git was used throughout the development process to track changes and manage different versions of the application.

The project was committed regularly and pushed to GitHub to maintain a clear development history.

---

## Future Improvements

Possible future improvements include:

- Adding a database to permanently store user accounts and events.
- Adding calendar integration.
- Adding event reminders and notifications.
- Improving authentication security.

---

## Author

Created as a React + Vite capstone project.