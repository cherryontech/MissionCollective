import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/icons/logo.svg";
import "../styles/NavBar.css";
import NavUserSection from "./NavUserSection";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // TODO: Update to link to the dashboard after activity has been completed
  const handleLoginClick = () => {
    setIsLoggedIn(true);
    navigate("/mission-hub");
  };

  return (
    <nav>
      <div className="navElements">
        <div className="menu">
          <img src={logo} alt="logo" />
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Home
          </NavLink>
          <a
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            title="Coming Soon"
          >
            How It Works
          </a>
          <a
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            title="Coming Soon"
          >
            Explore Missions
          </a>
          <a
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            title="Coming Soon"
          >
            Pricing
          </a>
          <a
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            title="Coming Soon"
          >
            About Us
          </a>
        </div>
        <div>
          {isLoggedIn ? (
            <NavUserSection />
          ) : (
            <button onClick={handleLoginClick} className="loginButton">
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
