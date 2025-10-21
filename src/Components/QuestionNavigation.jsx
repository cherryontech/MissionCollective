export default function QuestionNavigation() {
  function handlePreviousQuestionOnClick() {
    // TODO
  }

  function handleConfirmAnswerOnClick() {
    // TODO
  }

  function handleSkipOnClick() {
    // TODO
  }

  return (
    <div className="QuestionNavigation">
      <button onClick={handlePreviousQuestionOnClick}>Previous Question</button>
      <button onClick={handleSkipOnClick}>Confirm Answer</button>
      <button onClick={handleSkipOnClick}>Skip For Now</button>
    </div>
  );
}
