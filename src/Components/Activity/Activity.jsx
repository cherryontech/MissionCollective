import "../../styles/Activity.css";
import { ActivityContextProvider, useActivityContext } from "../../Context/ActivityContext";
import Question from "./Question";
import QuestionFooter from "./QuestionFooter";
import QuestionHeader from "./QuestionHeader";
import ExitMissionModal from './ExitMissionModal';

export default function Activity() {
  return (
    <ActivityContextProvider>
      <ActivityContents />
    </ActivityContextProvider>
  );
}

function ActivityContents() {
  // This hook runs inside the provider
  const { showExitModal, setShowExitModal } = useActivityContext();

  return (
    <>
      {showExitModal && (
        <ExitMissionModal onClose={() => setShowExitModal(false)} />
      )}
      <QuestionHeader />
      <Question />
      <QuestionFooter />
    </>
  );
}
