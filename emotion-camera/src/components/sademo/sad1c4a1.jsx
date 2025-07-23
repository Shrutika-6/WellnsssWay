import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sad1c4a1() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q: How much are you feeling fatigued or having a significant loss of
        energy, making even small tasks feel like a huge effort?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/sad1a1a")}>a) Not at all</button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a1a")}>
            b) Somewhat, I'm more tired
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a1a")}>
            c) Significantly, I feel drained constantly
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a1a")}>
            d) Completely exhausted, can't do anything
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-container {
          max-width: 750px;
          margin: 80px auto;
          padding: 40px;
          background-color: #f5e9f7;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          color: #3c2a4d;
          margin-bottom: 30px;
          line-height: 1.5;
        }

        .option-list {
          list-style: none;
          padding-left: 0;
        }

        .option-list li {
          margin-bottom: 20px;
        }

        button {
          padding: 12px 26px;
          font-size: 1rem;
          background-color: #a976a9;
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        button:hover {
          background-color: #8c5696;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
