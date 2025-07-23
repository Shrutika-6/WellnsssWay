import React from "react";
import { useNavigate } from "react-router-dom";

export default function Surprise1b() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q:When you say you were "surprised, in shock," what was the primary
        feeling or reaction you experienced?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/surprise1b1")}>
            a) A sense of disbelief/numbness.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b2")}>
            b) Feeling overwhelmed/frozen.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b3")}>
            c) Immediate physical reaction (e.g., heart pounding, gasping).
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b4")}>
            d) A mix of confusion and disorientation.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b5")}>
            e) A sudden feeling of vulnerability or danger.
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
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 25px;
          color: #333;
        }

        .option-list {
          list-style: none;
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
