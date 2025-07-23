import React from "react";
import { useNavigate } from "react-router-dom";

export default function Surprise1b5() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q: How did this sudden feeling of vulnerability or danger manifest for you?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/surprise1b5a")}>
            Feeling unsafe or exposed
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b5b")}>
            Increased vigilance/Hyper-alertness
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b5c")}>
            Feeling helpless or powerless
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b5d")}>
            A strong urge to escape or hide
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b5e")}>
            Increased anxiety about future events
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
          list-style: none;
          padding: 0;
        }

        button {
          width: 100%;
          padding: 14px 20px;
          margin-bottom: 15px;
          font-size: 1rem;
          background-color: #a976a9;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
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
