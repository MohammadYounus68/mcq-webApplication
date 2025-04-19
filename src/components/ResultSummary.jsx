function ResultSummary({ questions, userAnswers }) {
    return (
      <div>
        <h3>Question Review:</h3>
        {questions.map((q, index) => (
          <div key={q.id}>
            <p><strong>Q{index + 1}:</strong> {q.question}</p>
            <p>Your Answer: {q.options[userAnswers[index]] || "Not answered"}</p>
            <p>Correct Answer: {q.options[q.answerIndex]}</p>
            <p><em>{q.explanation}</em></p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
  
  export default ResultSummary;
  