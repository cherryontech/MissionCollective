import Footer from "./Footer";
import "../styles/HomePage.css";

const content = {
  heading0: "Building a Better Team, Together",
  heading1: "Why Team-Building Fails (And We Don't)",
  heading2: "Points with a Purpose",
  heading3: "What Teams Are Saying",
  heading4: "Ready to Build a Thriving Community?",
  button0: "Start a Team Mission",
  button1: "Start a Free Trial",
  button2: "Explore Missions",
};

export default function HomePage() {
  return (
    <div>
      <div className="section0">
        <h2>{content.heading0}</h2>
      </div>
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
        <div className="buttonContainer">
          <button className="primaryButton">{content.button1}</button>
          <button className="ghostButton">{content.button2}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
