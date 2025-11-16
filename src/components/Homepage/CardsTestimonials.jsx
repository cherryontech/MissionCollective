export default function CardsTestimonials({ profile, name, text, rating }) {
  return (
    <div className="card">
      <div className="card-header-section3">
        <img src={profile} alt={`${name} profile picture`} />
        <span className="profile-title">{name}</span>
      </div>
      <p>{text}</p>
      <div className="rating">
        <img src={rating} alt="star rating icon" />
      </div>
    </div>
  );
}
