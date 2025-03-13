import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      question: "If I'm lost where would you probably find me?",
      options: ["Mall", "Cafe", "Library", "Garden"],
      answer: "Library"
    },
    {
      question: "What is my go-to vacation?",
      options: ["Beach", "Hill-station", "Rain-forest", "Temple"], // Fixed empty string issue
      answer: "Beach"
    },
    {
      question: "What's my favorite food?",
      options: ["Pizza", "Rice-Rasam", "Burgers", "Maggie"],
      answer: "Maggie"
    }
  ];

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finished, setFinished] = useState(false);

  // Use the useNavigate hook to navigate programmatically
  const navigate = useNavigate();

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const getResult = () => {
    if (score === questions.length) return "You are a true birthday genius!";
    if (score === 0) return "Better luck next time!";
    return "Great job! You know yourself well!";
  };

  const handleTryAgain = () => {
    // Redirect to the quiz page when the user clicks "Try Again"
    setFinished(false);
    setScore(0);
    setCurrentQuestion(0);
    navigate("/quiz");
  };

  return (
    <div className="quiz-container">
      <h2>Birthday Quiz</h2>
      {!finished ? (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result">
          <p>Your Score: {score} / {questions.length}</p>
          <p>{getResult()}</p>
          {/* Use a button to trigger the function for retrying */}
          <button onClick={handleTryAgain} className="link">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
