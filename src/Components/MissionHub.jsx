import Footer from "./Footer";
import MissionHubCard from "./MissionHubCard";
import { cardContent } from "../data/missionHubCards";
import "../styles/MissionHub.css";

const content = {
  heading: "Launch Your Next Mission",
  subheading:
    "Choose an activity to collaborate with your team and unlock shared rewards.",
};

export default function MissionHub() {
  return (
    <>
      <div className="missionHub">
        <h1 className="heading">{content.heading}</h1>
        <p className="subheading">{content.subheading}</p>
        <div className="missionCards">
          {cardContent.map(
            ({
              id,
              icon,
              alt,
              headline,
              body,
              minutes,
              points,
              numCompleted,
            }) => (
              <MissionHubCard
                key={id}
                id={id}
                icon={icon}
                alt={alt}
                headline={headline}
                body={body}
                minutes={minutes}
                points={points}
                numCompleted={numCompleted}
              />
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
