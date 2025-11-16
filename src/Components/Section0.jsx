import highFive from "../assets/images/homepage/coworkers-high-fiving.webp";

export default function Section0() {
  return (
    <section className="section0">
      <div className="homepage-container">
        <h2>
          Building A Better Team, <span>Together</span>
        </h2>
        <div className="img-section-content">
          <img src={highFive} alt="coworkers-high-fiving"></img>
          <p className="connection-text">
            <span>Mission Collective </span>
            replaces dry team-building with purpose-driven fun. Our dedicated 
            virtual space helps modern teams genuinely connect through positive, 
            gamified trivia and collaborative challenges. Discover diverse 
            personal backgrounds in a low-pressure environment, transforming your 
            group into a thriving community. Start a Team Mission
          </p>
        </div>
      </div>
    </section>
  );
}