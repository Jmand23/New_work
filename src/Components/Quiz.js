import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      question: "What's my favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
      answer: "Blue"
    },
    {
      question: "When is my birthday?",
      options: ["January 1", "March 15", "August 22", "December 25"],
      answer: "March 15"
    },
    {
      question: "What's my favorite food?",
      options: ["Pizza", "Sushi", "Burgers", "Pasta"],
      answer: "Sushi"
    }
  ];

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finished, setFinished] = useState(false);

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
              </
