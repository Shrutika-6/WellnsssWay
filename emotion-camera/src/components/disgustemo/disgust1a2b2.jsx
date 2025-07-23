import React from "react";

export default function Disgust1a2b2() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>
      <ul>
        <li>Take time to journal or reflect on what triggered your disgust — clarity helps release tension.</li>
        <li>Talk to a trusted friend or counselor to express your thoughts in a safe space.</li>
        <li>Engage in calming activities like walking, mindfulness, or deep breathing to reset emotionally.</li>
        <li>Remind yourself that stepping back can also be a form of self-respect and emotional intelligence.</li>
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

        p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: #444;
        }

        ul {
          padding-left: 20px;
          color: #555;
        }

        ul li {
          margin-bottom: 10px;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
