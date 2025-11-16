import CardsSteps from "./CardsSteps.jsx";
import { MISSIONSTEPS } from "../../data/homepageData.js";

export default function Section1() {
  return (
    <section className="section1">
      <div className="homepage-container">
        <h2>
          Why Team-Building Fails <span>(And We Don't)</span>
        </h2>
        <p className="connection-text">
          <span>Real Connection in 3 Simple Steps: </span>
          Mission Collective is built on the belief that genuine connection
          requires learning and respect. We provide the structure, your team
          builds the trust.
        </p>
        <div className="card-container">
          {MISSIONSTEPS.map((card) => (
            <CardsSteps
              key={card.id}
              id={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
