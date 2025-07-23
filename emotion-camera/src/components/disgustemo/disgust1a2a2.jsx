import React from "react";

export default function Disgust1a2a2() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>
      <ul>
        <li>Being able to separate a person from their behavior reflects emotional intelligence.</li>
        <li>Communicate openly if something bothers you, when appropriate.</li>
        <li>It's okay to care about someone and hold them accountable at the same time.</li>
        <li>Revisit your feelings if they change — insight often grows over time.</li>
        <li>This balance supports both compassion and self-protection.</li>
      </ul>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background-color: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.6rem;
          color: #333;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.1rem;
          margin-bottom: 20px;
          color: #444;
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin-bottom: 10px;
          font-size: 1rem;
          color: #555;
        }
      `}</style>
    </div>
  );
}
