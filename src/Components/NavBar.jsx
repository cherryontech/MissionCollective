import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/icons/logo.svg";
import "../styles/NavBar.css";
import NavUserSection from "./NavUserSection";

export default function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // TODO: Update to link to the dashboard after activity has been completed
  const handleLoginClick = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const { pathname } = useLocation();
  if (pathname === "/activity" || pathname.startsWith("/activity/"))
    return null;

  return (
    <nav>
      <div className="navElements">
        <div className="menu">
          <img src={logo} alt="logo" />

          {isLoggedIn ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/mission-hub"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Mission Hub
              </NavLink>
              <a className="inactiveLink" title="Coming Soon">
                Leaderboard
              </a>
              <a className="inactiveLink" title="Coming Soon">
                Your Team
              </a>
              <a className="inactiveLink" title="Coming Soon">
                Team Rewards
              </a>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Home
              </NavLink>
              <a className="inactiveLink" title="Coming Soon">
                How It Works
              </a>
              <a className="inactiveLink" title="Coming Soon">
                Explore Missions
              </a>
              <a className="inactiveLink" title="Coming Soon">
                Pricing
              </a>
              <a className="inactiveLink" title="Coming Soon">
                About Us
              </a>
            </>
          )}
        </div>

        <div className="userInfo">
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
