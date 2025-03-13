import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Components/Quiz";
import BirthdayWishes from "./Components/BirthdayWishes";
import WhyILoveYou from "./Components/Why";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>🎉 Happiest Birthday 🎉</h1>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/wishes" element={<BirthdayWishes />} />
          <Route path="/why" element={<WhyILoveYou />} />
          <Route path="/" element={
            <div className="home">
              <p>Welcome! Choose your fun activity:</p>
              <a href="/quiz" className="link">Take the Birthday Quiz</a>
              <br />
              <a href="/wishes" className="link">Generate Birthday Wishes</a>
              <br />
              <a href="/why" className="link">Why I Love You</a>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
