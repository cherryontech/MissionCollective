import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import "../styles/NavBar.css";

export default function NavBar() {
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
            href=""
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            How It Works
          </a>
          <NavLink
            to="/activity"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Explore Missions
          </NavLink>
          <a
            href=""
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Pricing
          </a>
          <a
            href=""
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            About Us
          </a>
        </div>
        <div className="userInfo">
          <button className="loginButton">Log In</button>
        </div>
      </div>
    </nav>
  );
}
