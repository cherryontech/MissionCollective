import "../styles/MissionBriefingModal.css";

export default function MissionBriefingModal() {
  return (
    <div className="MissionBriefingModalOverlayer">
      <div className="MissionBriefingModalContainer">
        <div>
          <img></img>
          <h3>Different Cultures Trivia</h3>
          <p>Ready to explore and earn points?</p>
        </div>
        <div>
          <h4>How it works:</h4>
          <ol>
            <li>Collaborate to explore global traditions and customs.</li>
            <li>Learn interesting facts along the way.</li>
            <li>Secure points for your team reward.</li>
          </ol>
        </div>
        <div>
          <button>Go Back</button>
          <button>Let's Start</button>
        </div>
      </div>
    </div>
  );
}
