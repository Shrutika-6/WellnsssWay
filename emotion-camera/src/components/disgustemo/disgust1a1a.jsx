import React from "react";
import { useNavigate } from "react-router-dom";

export default function Disgust1a1a() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q: What physical sensation are you noticing most with this feeling?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/disgust1a1a1")}>
            a) Slight nausea or an unpleasant taste/smell.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/disgust1a1a2")}>
            b) Wrinkling my nose or pulling away slightly.
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-container {
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
