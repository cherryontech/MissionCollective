import highFive from "../assets/images/homepage/coworkers-high-fiving.webp";
import { Link } from "react-router-dom";

export default function Section0() {
  return (
    <section className="section0">
      <div className="homepage-container">
        <div className="section0-heading">
          <h1>Building a Better Team, Together</h1>
          <p>
            True collaboration starts with understanding, and we’re here to 
            help you build that deeper connection.
          </p>
        </div>
        <div className="section0-content">
          <img src={highFive} alt="coworkers-high-fiving"></img>
          <div className="section0-text">
            <p>
              <span className="bold">Mission Collective </span> replaces dry 
              team-building with purpose-driven fun. Our dedicated virtual 
              space helps modern teams genuinely connect through positive, 
              gamified trivia and collaborative challenges. Discover diverse 
              personal backgrounds in a low-pressure environment, transforming 
              your group into a <span className="italic"> thriving</span> 
              community.
            </p>
            <Link to="/mission-hub">
            <button className="primaryButton" >Start a Team Mission</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}