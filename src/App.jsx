import { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import './App.css';
function App() {
  const [screen, setScreen] = useState("home");
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <div>
      {screen === "home" && <Home onStart={() => setScreen("quiz")} />}
      {screen === "quiz" && (
        <Quiz
          onFinish={(answers) => {
            setUserAnswers(answers);
            setScreen("result");
          }}
        />
      )}
      {screen === "result" && <Result userAnswers={userAnswers} onRestart={() => setScreen("home")} />}
    </div>
  );
}

export default App;