import React from "react";
import { useNavigate } from "react-router-dom";

export default function Surprise1b4d() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q: Did you eventually figure out what to do, or did you rely on others for guidance?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/surprise1b4a1")}>
            I figured it out myself.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b4d1")}>
            I relied on others for guidance.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b2a1")}>
            I'm still unsure what to do.
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
          font-size: 1.6rem;
          color: #333;
          margin-bottom: 30px;
        }

        .option-list {
          list-style-type: none;
          padding: 0;
        }

        .option-list li {
          margin-bottom: 20px;
        }

        .option-list button {
          width: 100%;
          padding: 14px 20px;
          font-size: 1rem;
          background-color: #a976a9;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.1s ease;
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
