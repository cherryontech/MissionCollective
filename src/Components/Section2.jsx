import groupCollab from "../assets/images/homepage/group-collab.webp";
import StarCircle from "../assets/icons/starCircle.svg";

export default function Section2() {
  return (
    <section className="section2">
      <div className="homepage-container">
        <div className="section2-content">
          <img src={groupCollab} alt="coworkers-collaborating"></img>
          <div className="section2-text">
            <h2> Points with a Purpose </h2>
            <p>
              <span>Mission Collective </span> points are always earned for the 
              whole team. Use them to fund a collective reward that matters, 
              like a shared training course, a team lunch, or a donation to a 
              group-chosen charity. The possibilities are endless! 
            </p>
            <img src={StarCircle} alt="star-icon"></img>         
          </div>
        </div>
      </div>
    </section>
  );
}