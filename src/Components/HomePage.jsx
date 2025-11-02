<<<<<<< HEAD
import Footer from "./Footer";

const content = {
  heading1: "Building a Better Team, Together",
  heading2: "Why Team-Building Fails (And We Don't)",
  heading3: "Points with a Purpose",
  heading4: "What Teams Are Saying",
  heading5: "Ready to Build a Thriving Community?",
};

export default function HomePage() {
  return (
    <div>
      <div>
        <h2>{content.heading1}</h2>
      </div>
      <div>
        <h2>{content.heading2}</h2>
      </div>
      <div>
        <h2>{content.heading3}</h2>
      </div>
      <div>
        <h2>{content.heading4}</h2>
      </div>
      <div>
        <h2>{content.heading5}</h2>
      </div>
      <Footer />
=======
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is just a placeholder page to test out routes setup.</p>
>>>>>>> 4526fc873e58569acf7785d180f916511c92278d
    </div>
  );
}
