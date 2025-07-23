import React from "react";
import { useNavigate } from "react-router-dom";

export default function Neutral1c3() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        When it's common, does this detachment affect your daily life or relationships?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/neutral1c3a")}>
            a) Yes, it makes connecting with others difficult.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/neutral1c3a")}>
            b) Yes, it makes me feel unmotivated or numb.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/neutral1c3a")}>
            c) No, I function fine, it's just how I am.
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #fefae0;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 30px;
          color: #bc6c25;
        }

        .option-list {
          list-style-type: none;
          padding: 0;
        }

        .option-list li {
          margin-bottom: 16px;
        }

        .option-list button {
          width: 100%;
          padding: 14px 20px;
          font-size: 1rem;
          background-color: #dda15e;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .option-list button:hover {
          background-color: #bc6c25;
          transform: scale(1.02);
        }

        .option-list button:active {
          transform: scale(0.97);
        }
      `}</style>
    </div>
  );
}
