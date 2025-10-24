import { CULTURE_QUESTIONS } from "../data/cultureQuestions";
import { useActivityContext } from "../Context/ActivityContext";
import AnswersContainer from "./AnswersContainer";
import LearnMoreModal from "./LearnMoreModal";
//TODO: Figure out how to use relative paths instead of importing images
import image1 from "../assets/images/quiz1/1.jpg";
import image2 from "../assets/images/quiz1/2.jpg";
import image3 from "../assets/images/quiz1/3.jpg";
import image4 from "../assets/images/quiz1/4.jpg";
import image5 from "../assets/images/quiz1/5.jpg";
import image6 from "../assets/images/quiz1/6.png";
import image7 from "../assets/images/quiz1/7.jpg";
import image8 from "../assets/images/quiz1/8.jpg";
import image9 from "../assets/images/quiz1/9.jpg";
import image10 from "../assets/images/quiz1/10.jpg";

export function getImageSrc(id) {
  const imageID = id + 1;
  switch (imageID) {
    case 1:
      return image1;
    case 2:
      return image2;
    case 3:
      return image3;
    case 4:
      return image4;
    case 5:
      return image5;
    case 6:
      return image6;
    case 7:
      return image7;
    case 8:
      return image8;
    case 9:
      return image9;
    case 10:
      return image10;
    default:
      return;
  }
}

export default function Question() {
  const { currentQuestionID, setCurrentQuestionID, answer, updateAnswerMap } =
    useActivityContext();
  const currentQuestion = CULTURE_QUESTIONS[currentQuestionID];

  function handlePreviousQuestionOnClick() {
    if (currentQuestionID != 0) {
      setCurrentQuestionID(currentQuestionID - 1);
    }
  }

  function handleConfirmAnswerOnClick() {
    updateAnswerMap((prev) => ({
      ...prev,
      [currentQuestionID]: answer,
    }));
  }

  function handleSkipOnClick() {
    if (currentQuestionID != 9) {
      setCurrentQuestionID(currentQuestionID + 1);
    }
  }

  return (
    <div className="Question">
      <div className="QuestionContainer">
        <p>{currentQuestion.questionText}</p>
        <img
          src={getImageSrc(currentQuestionID)}
          alt={currentQuestion.altText}
        ></img>
        <AnswersContainer />
      </div>
      <div className="QuestionNavigation">
        <button
          className={
            currentQuestionID == 0 ? "grayButton disabledButton" : "grayButton"
          }
          onClick={handlePreviousQuestionOnClick}
        >
          Previous Question ⤺
        </button>
        <button
          className={answer ? "" : "disabledButton"}
          onClick={handleConfirmAnswerOnClick}
        >
          Confirm Answer ➝
        </button>
        <button
          className={
            currentQuestionID == 9
              ? "buttonAsLink disabledButton"
              : "buttonAsLink"
          }
          onClick={handleSkipOnClick}
        >
          Skip For Now
        </button>
      </div>
      <LearnMoreModal />
    </div>
  );
}
