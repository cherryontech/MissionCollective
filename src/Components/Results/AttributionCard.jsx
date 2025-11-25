export default function AttributionCard(imageSrc, altText) {
  return (
    <div>
      <img src={imageSrc} alt={altText} />
      <p>attribution</p>
      <p>source</p>
    </div>
  );
}
