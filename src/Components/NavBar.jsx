import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import "../styles/NavBar.css";
import NavUserSection from "./NavUserSection";
import LoginModal from "./LoginModal";
import { useUserContext } from "../Context/UserContext";

export default function NavBar() {
  const { showLoginModal, setShowLoginModal, isLoggedIn } = useUserContext();
  const { pathname } = useLocation();

  const hideOnActivity =
    pathname === "/activity" || pathname.startsWith("/activity/");

  const hideOnResults =
    pathname === "/results" || pathname.startsWith("/results/");

  if (hideOnActivity || hideOnResults) return null;

  function handleLoginClick() {
    setShowLoginModal(true);
  }

  return (
    <nav>
      {showLoginModal ? <LoginModal /> : <></>}
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
              <NavLink
                to="/results"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Team Rewards
              </NavLink>
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
