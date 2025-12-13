import "../styles/LoginModal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import closeIcon from "../assets/icons/closeIcon.svg";

export default function LoginModal() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setShowLoginModal } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email && password) {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      navigate("/dashboard");
    }
  }

  function handleClose() {
    setShowLoginModal(false);
  }

  return (
    <div className="loginModalOverlayer">
      <div className="loginModal">
        <button onClick={handleClose} className="iconButton">
          <img src={closeIcon} alt="close-icon" />
        </button>
        <h2>Welcome, Collaborator!</h2>
        <p>
          Ready to connect? Enter your email to begin your mission. This is a
          private, secure space designed for you and your teammates. Your
          mission of connection starts here.
        </p>
        <form>
          <div className="input">
            <label>Email</label>
            <input
              name="Email"
              type="text"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Password</label>
            <input
              name="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="loginNav">
          <a>Forgot your password?</a>
          <button onClick={handleLogin}>Log In</button>
          <p>
            Don't have an account yet? <a>Sign up here!</a>
          </p>
        </div>
      </div>
    </div>
  );
}
