import React from "react";
import { useNavigate } from "react-router-dom";

export default function Surprise1b3b() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q: Did the gasping or shortness of breath make you feel panicky or unable to think clearly?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/fear1a1a1")}>
            Yes, I felt panicky.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/fear1c1b1")}>
            Yes, I couldn't think clearly.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b3b1")}>
            No, it was just a physical reaction.
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          color: #333;
          font-size: 1.6rem;
          margin-bottom: 30px;
        }

        .option-list {
          list-style: none;
          padding: 0;
        }

        .option-list li {
          margin-bottom: 16px;
        }

        button {
          width: 100%;
          padding: 14px 20px;
          font-size: 1rem;
          background-color: #a976a9;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        button:hover {
          background-color: #8a5b8d;
          transform: scale(1.02);
        }

        button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}
