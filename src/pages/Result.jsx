import questions from "../data/questions";
import ResultSummary from "../components/ResultSummary";

function Result({ userAnswers, onRestart }) {
  const score = userAnswers.reduce((acc, ans, index) => {
    return ans === questions[index].answerIndex ? acc + 1 : acc;
  }, 0);

  return (
    <div>
      <h2>Your Score: {score} / {questions.length}</h2>
      <ResultSummary questions={questions} userAnswers={userAnswers} />
      <button onClick={onRestart}>Try Again</button>
    </div>
  );
}

export default Result;