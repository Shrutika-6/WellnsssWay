// components/neutral/neutral1a1.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Neutral1a1() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q: What aspects of your life do you think contribute to this consistent
        sense of balance?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/neutral1a1a")}>
            a) Healthy routines/Lifestyle (e.g., good sleep, balanced diet, exercise).
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/neutral1a1b")}>
            b) A generally peaceful environment (e.g., low stress, supportive relationships).
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/neutral1a1c")}>
            c) A positive mindset/Perspective (e.g., gratitude, acceptance).
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 30px;
          color: #333;
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
          background-color: #a976a9;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .option-list button:hover {
          background-color: #8a5b8d;
          transform: scale(1.02);
        }

        .option-list button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}
