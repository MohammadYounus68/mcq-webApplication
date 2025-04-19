function QuestionCard({ data, onAnswer }) {
    return (
      <div>
        <h2>{data.question}</h2>
        <ul>
          {data.options.map((option, index) => (
            <li key={index}>
              <button onClick={() => onAnswer(index)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default QuestionCard;