import "../styles/HomePage.css";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";
import "../styles/HomePage.css";

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
        <Section0 />
        <Section1 />
        <Section2 />
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
