import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sad1a3() {
  const navigate = useNavigate();

  return (
    <div className="question-page">
      <h2>
        Q: Sometimes a little self-care can help. Are you willing to take up
        some actions to boost your heart and mind to cope up and live to the
        fullest?
      </h2>

      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/sad1a1a")}>
            a) Yes, I want to.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a1a")}>
            b) Maybe, what do you suggest?
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-page {
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
