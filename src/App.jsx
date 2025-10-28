import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Activity from "./Components/Activity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Activity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
