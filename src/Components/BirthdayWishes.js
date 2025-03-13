import React, { useState } from "react";
import "./BirthdayWishes.css";

const BirthdayWishes = () => {
  const messages = [
    "Happy Birthday! May your day be more fun than your last birthday party!",
    "You're not getting older, you're just becoming a classic!",
    "Happy Birthday to someone who brightens every room they walk into!",
    "Wishing you a birthday as beautiful, incredible, and unique as you are!",
    "May your birthday be filled with laughter, love, and all the things that make you smile!",
    "On your special day, I wish you endless joy and the best things life has to offer!"
  ];

  const [message, setMessage] = useState("");

  const generateMessage = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  };

  return (
    <div className="wishes-container">
      <h2>Birthday Wishes Generator</h2>
      <div className="message-container">
        <p>{message || "Click the button to get a birthday wish!"}</p>
      </div>
      <div className="button-container">
        <button onClick={generateMessage}>Generate Birthday Wish</button>
      </div>
    </div>
  );
};

export default BirthdayWishes;