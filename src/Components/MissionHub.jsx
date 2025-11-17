import Footer from "./Footer";
import MissionHubCard from "./MissionHubCard";
import { cardContent } from "../data/missionHubCards";

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
      <Footer />
    </div>
  );
}
