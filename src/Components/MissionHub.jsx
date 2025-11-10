import Footer from "./Footer";

const content = {
  heading: "Launch Your Next Mission",
  subheading:
    "Choose an activity to collaborate with your team and unlock shared rewards",
};

export default function MissionHub() {
  return (
    <div>
      <h1>{content.heading}</h1>
      <p className="subtitle1">{content.subheading}</p>
      <div className="missionCards"></div>
      <Footer />
    </div>
  );
}
