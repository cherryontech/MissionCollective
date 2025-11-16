import "../../styles/Activity.css";
import { ActivityContextProvider } from "../../Context/ActivityContext";
import Question from "./Question";
import QuestionFooter from "../activity/QuestionHeader";
import QuestionHeader from "../activity/QuestionFooter";

export default function Activity() {
  return (
    <ActivityContextProvider>
      <QuestionHeader />
      <Question />
      <QuestionFooter />
    </ActivityContextProvider>
  );
}

