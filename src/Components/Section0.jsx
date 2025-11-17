import highFive from "../assets/images/homepage/coworkers-high-fiving.webp";

export default function Section0() {
  return (
    <section className="section0">
      <div className="homepage-container">
        <div className="section0-heading">
          <h1>Building A Better Team, Together</h1>
          <p>
            True collaboration starts with understanding, and we’re here to 
            help you build that deeper connection.
          </p>
        </div>
        <div className="section0-content">
          <img src={highFive} alt="coworkers-high-fiving"></img>
          <div className="section0-text">
            <p>
              <span>Mission Collective </span>
              replaces dry team-building with purpose-driven fun. Our dedicated 
              virtual space helps modern teams genuinely connect through positive, 
              gamified trivia and collaborative challenges. Discover diverse 
              personal backgrounds in a low-pressure environment, transforming your 
              group into a thriving community. Start a Team Mission
            </p>
            <button>Start a Team Mission</button>
          </div>
        </div>
      </div>
    </section>
  );
}