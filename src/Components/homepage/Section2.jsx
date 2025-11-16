import groupCollab from "../../assets/images/homepage/group-collab.webp";

export default function Section2() {
  return (
    <section className="section2">
      <div className="homepage-container">
        <h2>
          Points with a Purpose
        </h2>
        <div className="img-section-content">
          <img src={groupCollab} alt="coworkers-collaborating"></img>
          <p className="connection-text">
            <span>Mission Collective </span>
            points are always earned for the whole team. Use them to fund a 
            collective reward that matters, like a shared training course, a 
            team lunch, or a donation to a group-chosen charity. The 
            possibilities are endless! 
          </p>
        </div>
      </div>
    </section>
  );
}