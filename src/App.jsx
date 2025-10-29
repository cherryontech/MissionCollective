import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Activity from "./Components/Activity";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
