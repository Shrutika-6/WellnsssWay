import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sad1a2b() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q: Are you still able to engage in your usual activities without much
        difficulty?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/sad1a1a")}>a) Yes, mostly</button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a2b1")}>
            b) A little, but it takes effort
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-container {
          max-width: 750px;
          margin: 80px auto;
          padding: 45px;
          background-color: #f9f1fc;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 30px;
        }

        .option-list {
          list-style: none;
          padding: 0;
        }

        .option-list li {
          margin: 15px 0;
        }

        .option-list button {
          font-size: 1.1rem;
          padding: 12px 28px;
          border: none;
          border-radius: 8px;
          background-color: #a976a9;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .option-list button:hover {
          background-color: #8f5c93;
        }
      `}</style>
    </div>
  );
}
