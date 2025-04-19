import { useEffect, useRef, useState } from "react";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import './Quiz.css';
function Quiz({ onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setAnswers] = useState([]); // ✅ শুধু state আপডেট করার জন্য
  const [timeLeft, setTimeLeft] = useState(1800); // ⏱️ সময়
  const answersRef = useRef([]); // ✅ উত্তর সংরক্ষণের জন্য

  const handleAnswer = (selectedIndex) => {
    // বর্তমান প্রশ্নের উত্তর সেট করো
    answersRef.current[currentIndex] = selectedIndex;
    setAnswers([...answersRef.current]); // রিঅ্যাক্টকে বলি আপডেট হয়েছে

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(answersRef.current); // ✅ সব উত্তর সাবমিট
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onFinish(answersRef.current); // ✅ সময় শেষ হলে সাবমিট
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onFinish]); // ✅ dependency ঠিক আছে

  return (
    <div className="quiz">
      <div className="timerLeft">
          <Timer timeLeft={timeLeft} />
      </div>
      <div className="questioncard">
        <QuestionCard
          data={questions[currentIndex]}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}

export default Quiz;
