import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import Help from "./pages/Help";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Fixed navigation header */}
      <Header />

      <Routes>
        {/* Registration page */}
        <Route path="/" element={<Register />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* User dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Create a new event */}
        <Route path="/add-event" element={<AddEvent />} />

        {/* Edit an existing event */}
        <Route path="/edit-event/:id" element={<EditEvent />} />

        {/* Help section */}
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
