import CardsTestimonials from "./CardsTestimonials.jsx";
import { TESTIMONIALS } from "../../data/homepageData.js";

export default function Section3() {
  return (
    <section className="section3">
      <div className="homepage-container">
        <h2>What Teams Are Saying</h2>
        <div className="card-container">
          {TESTIMONIALS.map((testimonial) => (
            <CardsTestimonials
              key={testimonial.id}
              profile={testimonial.profile}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
