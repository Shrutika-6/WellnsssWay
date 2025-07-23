import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sad1a2() {
  const navigate = useNavigate();

  return (
    <div className="question-page">
      <h2>
        Q: Is there anything specific that might have triggered this feeling,
        even if it feels minor?
      </h2>

      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/sad1a2a")}>
            a) Yes, a minor setback/disappointment.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a2b")}>
            b) Not really, it just appeared.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a2c")}>
            c) I'd rather not say.
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-page {
          max-width: 750px;
          margin: 70px auto;
          padding: 45px;
          background-color: #f2f8ff;
          border-radius: 20px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.7rem;
          color: #333;
          margin-bottom: 30px;
        }

        .option-list {
          list-style: none;
          padding: 0;
        }

        .option-list li {
          margin-bottom: 18px;
        }

        .option-list button {
          font-size: 1.1rem;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          background-color: #a976a9;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s;
          width: 100%;
          max-width: 400px;
        }

        .option-list button:hover {
          background-color: #8f5a95;
        }
      `}</style>
    </div>
  );
}
