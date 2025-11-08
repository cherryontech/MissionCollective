import "../styles/HomePage.css";
import pinkDice from "../assets/icons/pinkDice.svg";
import pinkLoop from "../assets/icons/pinkLoop.svg";
import pinkPartner from "../assets/icons/pinkPartner.svg";
import stars from "../assets/icons/stars.svg";
import profileValerie from "../assets/profileValerie.png";
import profileLucas from "../assets/profileLucas.png";
import profilePatrick from "../assets/profilePatrick.png";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <main>
        {/* Section1 */}
        <section className="section1-homepage">
          <div className="homepage-container">
            <h1>
              Why Team-Building Fails <span>(And We Don't)</span>
            </h1>
            <p className="connection-text">
              <span className="font-bold">
                Real Connection in 3 Simple Steps:{" "}
              </span>
              Mission Collective is built on the belief that genuine connection
              requires learning and respect. We provide the structure, your team
              builds the trust.
            </p>
            <div className="card-container">
              <div className="card">
                <div className="card-header-section1">
                  <span>1</span>
                  <img src={pinkDice} alt="pink dice icon" />
                </div>
                <div className="card-body">
                  <h2>Start a Mission</h2>
                  <p>
                    A teammate selects a quick, gamified mission from the
                    Mission Hub, choosing a high-impact activity to kick off the
                    collaborative fun.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header-section1">
                  <span>2</span>
                  <img
                    src={pinkLoop}
                    alt="pink loop icon"
                    className="card-icon"
                  />
                </div>
                <div className="card-body">
                  <h2>Collaborate & Learn</h2>
                  <p>
                    Each team member answers questions, learns something new
                    about the topic or each other, and earns points for their
                    contribution.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header-section1">
                  <span>3</span>
                  <img
                    src={pinkPartner}
                    alt="pink partner icon"
                    className="card-icon"
                  />
                </div>
                <div className="card-body">
                  <h2>Thrive, Together</h2>
                  <p>
                    Points are converted into shared team rewards, such as a
                    donation goal, training budget, or a group activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section3 */}

        <section className="section3-homepage">
          <div className="homepage-container">
            <h1>What Teams Are Saying</h1>
            <div className="card-container">
              <div className="card">
                <div className="card-header-section3">
                  <img src={profileValerie} alt="Valerie profile picture" />
                  <span className="profile-title">Valerie, UX Designer</span>
                </div>
                <p>
                  "I love that it doesn't take much time, and I can do it when
                  it works for me. It's the first team activity where I felt
                  like I wasn't being judged or put on the spot. Finally, a team
                  activity that isn't awkward!"
                </p>
                <div className="rating">
                  <img src={stars} alt="star rating icon" />
                </div>
              </div>
              <div className="card">
                <div className="card-header-section3">
                  <img src={profileLucas} alt="Lucas profile icon" />
                  <span className="profile-title">Lucas, Project Manager</span>
                </div>
                <p>
                  "It's the first team tool that feels authentic. Earning points
                  for a shared training budget makes team-building feel
                  valuable, like a direct investment in our skills."
                </p>
                <div className="rating">
                  <img src={stars} alt="star rating icon" />
                </div>
              </div>
              <div className="card">
                <div className="card-header-section3">
                  <img src={profilePatrick} alt="Patrick profile icon" />
                  <span className="profile-title">Patrick, Engineer</span>
                </div>
                <p>
                  "Since we focused on a team goal, not individual bragging
                  rights, it made me feel like my small contribution was moving
                  the whole team forward. It genuinely feels like we're working
                  together to improve our connection."
                </p>
                <div className="rating">
                  <img src={stars} alt="star rating icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
