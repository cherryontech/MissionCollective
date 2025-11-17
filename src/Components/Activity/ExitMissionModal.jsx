import { useActivityContext } from "../../Context/ActivityContext";
import { useNavigate } from "react-router-dom";
import ExitArrow from "../../assets/icons/exit-arrow.svg";

export default function ExitMissionModal({ onClose }) {
  const {
    setAnswer,
    setCurrentQuestionID,
    setTotalScore,
    updateAnswerMap,
    setShowExitModal,
  } = useActivityContext();

  const navigate = useNavigate();

  function handleConfirmExit() {
    // close modal
    setShowExitModal(false);

    // reset activity state
    setAnswer(null);
    setCurrentQuestionID(0);
    setTotalScore(0);
    updateAnswerMap({ 0: null,1: null,2: null,3: null,4: null,5: null,6: null,7: null,8: null,9: null });

    // navigate back to mission hub
    navigate("/mission-hub");
  }

  return (
    <div className="ExitMissionModalOverlayer">
      <div className="ExitMissionModalContainer">
        <h2>Wait! Are you sure you want to exit?</h2>
        <p>
          Your points will not be applied, and your team is counting on your
          perspective to unlock this reward. Keep in mind that you’ll get fresh
          questions next time.
        </p>
        <div className="ButtonContainer">
          <div className="BackButton">
            <button onClick={onClose}>No, Go Back</button>
            <svg></svg>
          </div>
          <div className="ExitButton">
            <button onClick={handleConfirmExit}>Yes, Exit Mission</button>
            <svg src={ExitArrow} alt="exit-arrow"></svg>
          </div>
        </div>

      </div>
    </div>
  );
}