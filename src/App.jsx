import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Activity from "./Components/Activity/Activity";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import MissionHub from "./Components/MissionHub";
import MissionBriefingModal from "./Components/MissionBriefingModal";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/mission-hub" element={<MissionHub />} />
          <Route path="/mission-briefing" element={<MissionBriefingModal />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
