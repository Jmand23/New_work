import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom"; // HashRouter for GitHub Pages
import Quiz from "./Components/Quiz";
import BirthdayWishes from "./Components/BirthdayWishes"; // Assuming you have this component
import WhyILoveYou from "./Components/Why"; // Assuming you have this component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>🎉 Happiest Birthday my Boo Bear! 🎉</h1>
        <h3>Still you are my 11:11 wish ✨</h3>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/wishes" element={<BirthdayWishes />} />
          <Route path="/why" element={<WhyILoveYou />} />
          <Route
            path="/"
            element={
              <div className="home">
                <p>Welcome! Choose your fun activity:</p>
                <Link to="/quiz" className="link">
                  Take the Birthday Quiz
                </Link>
                <br />
                <Link to="/wishes" className="link">
                  Generate Birthday Wishes
                </Link>
                <br />
                <Link to="/why" className="link">
                  Why I Love You
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
