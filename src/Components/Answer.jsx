export default function Answer({ key, text, isCorrect }) {
  function handleOnClick() {
    //TODO
  }

  return (
    <div className="Answer">
      {/* TODO: Talk with design team to verify that these are icons */}
      <img src="/" alt="Icon" />
      <button handleOnClick>{text}</button>
    </div>
  );
}
