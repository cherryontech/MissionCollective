import AttributionCard from "./AttributionCard";
import { ATTRIBUTIONS } from "../../data/attributions.js";

export default function Attributions() {
  return (
    <div>
      <h2>Attributions & Resources</h2>
      <div className="attributionCards">
        {ATTRIBUTIONS.map(({ id, imageSrc, altText }) => (
          <AttributionCard key={id} imageSrc={imageSrc} altText={altText} />
        ))}
      </div>
    </div>
  );
}
