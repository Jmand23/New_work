import React, { useState } from 'react';
import './Why.css';

const WhyILoveYou = () => {
  const [reasons, setReasons] = useState([
    "You always know how to make me laugh!",
    "You bring out the best in everyone around you.",
    "You're the kindest person I've ever met.",
    "Your smile is my favorite thing in the world.",
    "You have an amazing sense of humor.",
    "You're so creative and always have the best ideas!"
  ]);
  const [userReason, setUserReason] = useState('');
  const [message, setMessage] = useState('');

  // Randomly select a reason
  const randomReason = reasons[Math.floor(Math.random() * reasons.length)];

  // Handle new reason submission
  const handleSubmit = () => {
    if (userReason.trim() !== '') {
      setReasons([...reasons, userReason]);
      setMessage('Thank you for sharing a reason!');
      setUserReason('');
    } else {
      setMessage('Please enter a reason before submitting.');
    }
  };

  return (
    <div className="why-i-love-you-container">
      <h2>Why I Love You 💖</h2>
      <div className="reason-display">
        <p>{randomReason}</p>
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