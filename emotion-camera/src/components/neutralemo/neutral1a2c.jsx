// components/neutral/Q3A2a3.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Neutral1a2c() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        How did spending quality time with someone contribute to your calm?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/neutral1a2c1")}>
            a) Felt supported/Connected.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/neutral1a2c1")}>
            b) Shared laughter/Enjoyment.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/neutral1a2c1")}>
            c) Distracted me from worries.
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f2f9ff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 30px;
          color: #2c3e50;
        }

        .option-list {
          list-style-type: none;
          padding: 0;
        }

        .option-list li {
          margin-bottom: 15px;
        }

        .option-list button {
          width: 100%;
          padding: 14px 20px;
          font-size: 1rem;
          background-color: #3797e6;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .option-list button:hover {
          background-color: #2f82c5;
          transform: scale(1.02);
        }

        .option-list button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}
