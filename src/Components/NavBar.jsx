import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="navElements">
        <div className="menu">
          <img src={logo} alt="logo" />
          <Link to="/">Home</Link>
          <a href="">How It Works</a>
          <Link to="/activity">Explore Missions</Link>
          <a href="">Pricing</a>
          <a href="">About Us</a>
        </div>
        <div className="userInfo">
          <button className="loginButton">Log In</button>
        </div>
      </div>
    </nav>
  );
}
