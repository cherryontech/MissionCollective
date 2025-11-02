import "../styles/HomePage.css";
import correctLight from "../assets/icons/correctLight.svg";

export default function HomePage() {
  return (
    <>
      {/* Part 3 Section */}
      <section className="part3-homepage">
        <h1>
          Why Team-Building Fails <span>(And We Don't)</span>
        </h1>
        <p>
          <span className="font-bold">Real Connection in 3 Simple Steps:</span>
          Mission Collective is built on the belief that genuine connection
          requires learning and respect. We provide the structure, your team
          builds the trust.
        </p>
        <div className="card-container">
          <div className="card">
            <div className="card-header-section3">
              <span>1</span>
              <img src={correctLight} alt="correct icon" />
            </div>
            <h2>Start a Mission</h2>
            <p>
              A teammate selects a quick, gamified mission from the Mission Hub,
              choosing a high-impact activity to kick off the collaborative fun.
            </p>
          </div>
          <div className="card">
            <div className="card-header-section3">
              <span>2</span>
              <img
                src={correctLight}
                alt="correct icon"
                className="card-icon"
              />
            </div>
            <h2>Collaborate & Learn</h2>
            <p>
              Each team member answers questions, learns something new about the
              topic or each other, and earns points for their contribution.
            </p>
          </div>
          <div className="card">
            <div className="card-header-section3">
              <span>3</span>
              <img
                src={correctLight}
                alt="correct icon"
                className="card-icon"
              />
            </div>
            <h2>Thrive, Together</h2>
            <p>
              Points are converted into shared team rewards, such as a donation
              goal, training budget, or a group activity.
            </p>
          </div>
        </div>
      </section>

      {/* Part 5 section */}

      <section className="part5-homepage">
        <h1>What Teams Are Saying</h1>
        <div className="card-container">
          <div className="card">
            <div className="card-header-section5">
              <img src={correctLight} alt="correct icon" />
              <span className="profile-title">Valerie, UX Designer</span>
            </div>
            <p>
              “I love that it doesn't take much time, and I can do it when it
              works for me. It's the first team activity where I felt like I
              wasn't being judged or put on the spot. Finally, a team activity
              that isn't awkward!”
            </p>
            <div className="rating">
              <img src={correctLight} alt="correct icon" />
            </div>
          </div>
          <div className="card">
            <div className="card-header-section5">
              <img src={correctLight} alt="correct icon" />
              <span className="profile-title">Lucas, Project Manager</span>
            </div>
            <p>
              “It's the first team tool that feels authentic. Earning points for
              a shared training budget makes team-building feel valuable, like a
              direct investment in our skills.”
            </p>
            <div className="rating">
              <img src={correctLight} alt="correct icon" />
            </div>
          </div>
          <div className="card">
            <div className="card-header-section5">
              <img src={correctLight} alt="correct icon" />
              <span className="profile-title">Patrick, Engineer</span>
            </div>
            <p>
              “Since we focused on a team goal, not individual bragging rights,
              it made me feel like my small contribution was moving the whole
              team forward. It genuinely feels like we're working together to
              improve our connection.”
            </p>
            <div className="rating">
              <img src={correctLight} alt="correct icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
