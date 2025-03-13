import React, { useState } from "react";
import "./BirthdayWishes.css";

const BirthdayWishes = () => {
  const messages = [
    "Happy Birthday! Here's to a year of adventure, joy, and success!",
    "You're not getting older, you're just becoming a classic!",
    "May your birthday be filled with sunshine, smiles, laughter, and love!",
    "Wishing you a day filled with love, joy, and lots of special moments!",
    "May your birthday be filled with laughter, love, and all the things that make you smile!",
    "On your special day, I wish you endless joy and the best things life has to offer!",
    "May your birthday be the start of a year filled with good fortune, great health, and much happiness."
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
