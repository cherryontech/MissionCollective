import "../Activity.css";
import { ActivityContextProvider } from "../Context/ActivityContext";
import Question from "./Question";
import QuestionFooter from "./QuestionFooter";
import QuestionHeader from "./QuestionHeader";
import QuestionNavigation from "./QuestionNavigation";

export default function Activity() {
  return (
    <ActivityContextProvider>
      <QuestionHeader />
      <Question />
      <QuestionNavigation />
      <QuestionFooter />
    </ActivityContextProvider>
  );
}
