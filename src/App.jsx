import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Activity from "./Components/Activity";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
