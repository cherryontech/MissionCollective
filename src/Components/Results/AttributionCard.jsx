export default function AttributionCard({
  imageSrc,
  altText,
  attribution,
  resource,
}) {
  return (
    <div>
      <img src={imageSrc} alt={altText} />
      <p>{attribution}</p>
      <p>{resource}</p>
    </div>
  );
}
