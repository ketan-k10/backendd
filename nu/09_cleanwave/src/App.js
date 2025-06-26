import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import EventsPage from "./pages/EventsPage"
import DashboardPage from "./pages/DashboardPage"
import ProfilePage from "./pages/ProfilePage"
import OrganizerPage from "./pages/OrganizerPage"
import WasteLoggingPage from "./pages/WasteLoggingPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/organizer" element={<OrganizerPage />} />
          <Route path="/waste-logging" element={<WasteLoggingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
