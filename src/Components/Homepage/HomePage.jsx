import "../../styles/HomePage.css";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Footer from "../Footer";

export default function HomePage() {
  const content = {
    heading4: "Ready to Build a Thriving Community?",
    button0: "Start a Team Mission",
    button1: "Start a Free Trial",
    button2: "Explore Missions",
  };

  return (
    <>
      <main>
        <Section1 />
        <Section3 />
        <div className="section4">
          <h2>{content.heading4}</h2>
          <div className="buttonContainer">
            <button className="primaryButton">{content.button1}</button>
            <button className="ghostButton">{content.button2}</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
