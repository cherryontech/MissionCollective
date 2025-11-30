export default function AttributionCard({
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
}) {
  return (
    <div className="attributionCard">
      <img src={imageSrc} alt={altText} />
      <div className="attributionText">
        <p>
          {attributionText1}
          <a href={attributionNameLink}>{attributionName}</a>
          {attributionText2}
          <a href={attributionLink1}>{attributionSource1}</a>
          <a href={attributionLink2}>{attributionSource2}</a>
        </p>
        <p>
          {resourceText}
          <a href={resourceLink}>{resourceName}</a>
        </p>
      </div>
    </div>
  );
}
