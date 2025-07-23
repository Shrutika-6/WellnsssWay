import React from "react";

export default function Neutral1a1a1() {
  return (
    <div className="recommendations-container">
      <h2>Here are some mindful balance-maintaining tips:</h2>
      <ul>
        <li>Do something relaxing like reading</li>
        <li>Check in with your emotions quietly</li>
        <li>Listen to your favorite music</li>
        <li>Take a mindful walk</li>
        <li>Drink some water and take a deep breath</li>
      </ul>
      <p>Maintaining balance is a strength — keep nurturing it!</p>

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #e6f7ff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #3a3a3a;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 20px;
        }

        ul li {
          font-size: 1.1rem;
          margin-bottom: 12px;
        }

        p {
          font-size: 1rem;
          color: #555;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
