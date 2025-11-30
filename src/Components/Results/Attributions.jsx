import AttributionCard from "./AttributionCard";
import { ATTRIBUTIONS } from "../../data/attributions.js";

export default function Attributions() {
  return (
    <div>
      <h2>Attributions & Resources</h2>
      <div className="attributionCards">
        {ATTRIBUTIONS.map(
          ({ id, imageSrc, altText, attribution, resource }) => (
            <AttributionCard
              key={id}
              imageSrc={imageSrc}
              altText={altText}
              attribution={attribution}
              resource={resource}
            />
          )
        )}
      </div>
    </div>
  );
}
