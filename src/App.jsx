import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import Help from "./pages/Help";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
  <Header />

  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/add-event" element={<AddEvent />} />
    <Route path="/help" element={<Help />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;