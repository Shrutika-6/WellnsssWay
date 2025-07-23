import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sad1d() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2 className="question-text">
        Q: Thank you for clarifying. Sometimes facial expressions can be
        misleading. How would you describe your current feeling then?
      </h2>
      <ul className="option-list">
        <li>
          <button
            onClick={() => navigate("/sad1a1a")}
            className="option-button"
          >
            a) Neutral/Fine
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a2")} className="option-button">
            b) Tired
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a1")} className="option-button">
            c) Stressed/Anxious
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-container {
          max-width: 850px;
          margin: 100px auto;
          padding: 50px;
          background-color: #fdf6fd;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          text-align: center;
        }

        .question-text {
          font-size: 1.8rem;
          margin-bottom: 30px;
          color: #4a4a4a;
        }

        .option-list {
          list-style-type: none;
          padding: 0;
        }

        .option-button {
          display: block;
          width: 90%;
          max-width: 700px;
          margin: 15px auto;
          padding: 18px 24px;
          background-color: #a976a9;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .option-button:hover {
          background-color: #8c5b8e;
        }
      `}</style>
    </div>
  );
}
