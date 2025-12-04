import AttributionCard from "./AttributionCard";
import "../../styles/Attributions.css";
import { ATTRIBUTIONS } from "../../data/attributions.js";
import upArrow from "../../assets/icons/up_arrow.svg";
import downArrow from "../../assets/icons/down_arrow.svg";

export default function Attributions() {
  return (
    <div className="attributionsContainer">
      <div className="attributionsHeader">
        <h2>Attributions & Resources</h2>
        <img src={upArrow} alt="arrow icon" />
      </div>
      <div className="attributionCards">
        {ATTRIBUTIONS.map(
          ({
            id,
            imageSrc,
            altText,
            attributionText1,
            attributionName,
            attributionNameLink,
            attributionText2,
            attributionSource1,
            attributionLink1,
            attributionSource2,
            attributionLink2,
            resourceText,
            resourceName,
            resourceLink,
          }) => (
            <AttributionCard
              key={id}
              imageSrc={imageSrc}
              altText={altText}
              attributionText1={attributionText1}
              attributionName={attributionName}
              attributionNameLink={attributionNameLink}
              attributionText2={attributionText2}
              attributionSource1={attributionSource1}
              attributionLink1={attributionLink1}
              attributionSource2={attributionSource2}
              attributionLink2={attributionLink2}
              resourceText={resourceText}
              resourceName={resourceName}
              resourceLink={resourceLink}
            />
          )
        )}
      </div>
    </div>
  );
}
