import React from "react";

export default function Disgust1a3b1() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>
      <ul>
        <li>Identify and label your emotions clearly.</li>
        <li>Journaling can help you process complex feelings.</li>
        <li>Talk to someone you trust or seek professional help if needed.</li>
        <li>Engage in calming activities like deep breathing or nature walks.</li>
        <li>Remember, emotional awareness is the first step to emotional strength.</li>
      </ul>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #333;
        }

        h3 {
          font-size: 1.3rem;
          margin-top: 30px;
          margin-bottom: 15px;
          color: #555;
        }

        p {
          font-size: 1.1rem;
          color: #444;
          line-height: 1.6;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        li {
          font-size: 1rem;
          color: #444;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
