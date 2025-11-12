import "../styles/HomePage.css";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Section1 />
        <Section3 />
      </main>
      <Footer />
    </>
  );
}
