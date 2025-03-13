import React, { useState, useEffect } from 'react';
import './Why.css';

const WhyILoveYou = () => {
  // Initialize with default reasons
  const [reasons, setReasons] = useState([
    "You always know how to make me laugh!",
    "You're my rock and I can always count on you.",
    "You're the most caring person I know.",
    "Your smile is my favorite thing in the world.",
    "You are my moon in the night sky.",
    "You're so creative and always have the best ideas!"
  ]);

  // Store the random reason that stays constant during the page session
  const [randomReason, setRandomReason] = useState('');

  const [userReason, setUserReason] = useState('');
  const [message, setMessage] = useState('');

  // Set the random reason only once when the component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    setRandomReason(reasons[randomIndex]);
  }, []); // This effect only runs once when the component first loads

  // Handle new reason submission
  const handleSubmit = () => {
    if (userReason.trim() !== '') {
      setReasons([...reasons, userReason]); // Add the new reason to the list
      setMessage('Thank you for sharing a reason!');
      setUserReason(''); // Clear the input field
    } else {
      setMessage('Please enter a reason before submitting.');
    }
  };

  return (
    <div className="why-i-love-you-container">
      <h2>Why I Love You 💖</h2>
      <div className="reason-display">
        <p>{randomReason}</p> {/* Random reason stays constant until page refresh */}
      </div>

      <h3>Share your own reason:</h3>
      <textarea
        value={userReason}
        onChange={(e) => setUserReason(e.target.value)}
        placeholder="Write a reason why you love someone..."
      ></textarea>
      <div className="button-container">
        <button onClick={handleSubmit}>Submit Reason</button>
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default WhyILoveYou;
