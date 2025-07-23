import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sad1a1() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q: Sometimes there are situations that you cannot escape but life is all
        about going along. You must try to heal. I can help you doing so. Would
        you like some suggestions to cope with?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/sad1a1a")}>a) Yes, please</button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a1a")}>
            b) I don't know, Maybe?
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a1b1")}>c) Not sure</button>
        </li>
      </ul>

      <style jsx>{`
        .question-container {
          max-width: 800px;
          margin: 60px auto;
          padding: 40px;
          background: #f0f8ff;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 30px;
          color: #333;
        }

        .option-list {
          list-style: none;
          padding: 0;
        }

        .option-list li {
          margin: 15px 0;
        }

        button {
          font-size: 1.1rem;
          padding: 12px 24px;
          border: none;
          border-radius: 10px;
          background-color: #a976a9;
          color: white;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        button:hover {
          background-color: #8d5e8d;
        }
      `}</style>
    </div>
  );
}
