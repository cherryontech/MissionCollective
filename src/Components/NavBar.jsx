import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <Link to="/">Home</Link>
      <a href="">How It Works</a>
      <Link to="/activity">Explore Missions</Link>
      <a href="">Pricing</a>
      <a href="">About Us</a>
      <button>Log In</button>
    </nav>
  );
}
