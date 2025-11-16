import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Activity from "./components/Activity/Activity";
import HomePage from "./Components/Homepage/HomePage";
import NavBar from "./Components/NavBar";
import MissionHub from "./Components/MissionHub";

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
