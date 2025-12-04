import Attributions from "./Attributions";
import ResultsDisplay from "./ResultsDisplay";
import "../../styles/ResultsPage.css";

export default function ResultsPage() {
  return (
    <main>
      <div className="resultsPage">
        <ResultsDisplay />
        <Attributions />
      </div>
    </main>
  );
}
