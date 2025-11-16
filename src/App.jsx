import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Activity from "./components/activity/Activity";
import HomePage from "./components/homepage/HomePage";
import NavBar from "./components/NavBar";
import MissionHub from "./components/MissionHub";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/mission-hub" element={<MissionHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
