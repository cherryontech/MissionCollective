import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Activity from "./Components/Activity/Activity";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import MissionHub from "./Components/MissionHub";
import ResultsPage from "./Components/Results/ResultsPage";
import { UserContextProvider } from "./Context/UserContext";
import Dashboard from "./Components/Dashboard/Dashboard";
import ScrollTopPage from "./Components/ScrollTopPage";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <ScrollTopPage />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/mission-hub" element={<MissionHub />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
