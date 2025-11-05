import Footer from "./Footer";
import "../styles/HomePage.css";

const content = {
  heading1: "Building a Better Team, Together",
  heading2: "Why Team-Building Fails (And We Don't)",
  heading3: "Points with a Purpose",
  heading4: "What Teams Are Saying",
  heading5: "Ready to Build a Thriving Community?",
  button1: "Start a Team Mission",
  button2: "Start a Free Trial",
  button3: "Explore Missions",
};

export default function HomePage() {
  return (
    <div>
      <div className="section1">
        <h2>{content.heading1}</h2>
      </div>
      <div className="section2">
        <h2>{content.heading2}</h2>
      </div>
      <div className="section3">
        <h2>{content.heading3}</h2>
      </div>
      <div className="section4">
        <h2>{content.heading4}</h2>
      </div>
      <div className="section5">
        <h2>{content.heading5}</h2>
        <div className="buttonContainer">
          <button className="primaryButton">{content.button2}</button>
          <button className="ghostButton">{content.button3}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
