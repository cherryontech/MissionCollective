import ExitArrow from "../../assets/icons/exit-arrow";

export default function ExitMissionModal() {
  return (
    <div className="ExitMissionModalOverlayer">
      <div className="ExitMissionModalContainer">
        <h2>Wait! Are you sure you want to exit?</h2>
        <p>Your points will not be applied, and your team is counting on your 
          perspective to unlock this reward. Keep in mind that you’ll get fresh 
          questions next time.
        </p>
        <div className="ButtonContainer">
          <div className="BackButton">
            <button>No, Go Back</button>
            <svg></svg>
          </div>
          <div className="ExitButton">
            <button>Yes, Exit Mission</button>
            <svg src= {ExitArrow} alt="exit-arrow"></svg>
          </div>
        </div>

      </div>
    </div>
  );
    
}