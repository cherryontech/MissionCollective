import { NavLink, Link } from "react-router-dom";
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
        <div className="userInfo">
          <Link to="/mission-hub">
            <button className="loginButton">Log In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
