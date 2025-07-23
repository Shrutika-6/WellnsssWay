import React from "react";

export default function Disgust1a2b1() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>

      <ul>
        <li>Reflect on your intentions before confronting — aim for clarity, not blame.</li>
        <li>Choose a calm moment for discussion, not when emotions are at their peak.</li>
        <li>Use specific examples rather than general accusations.</li>
        <li>Listen actively to the other person's response — confrontation is a two-way process.</li>
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
