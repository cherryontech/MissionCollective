import "../styles/Activity.css";
import { ActivityContextProvider } from "../Context/ActivityContext";
import Question from "./Question";
import QuestionFooter from "./QuestionFooter";
import QuestionHeader from "./QuestionHeader";

export default function Activity() {
  return (
    <ActivityContextProvider>
      <div className="wrapper">
        <QuestionHeader />
        <Question />
        <QuestionFooter />
      </div>
    </ActivityContextProvider>
  );
}
