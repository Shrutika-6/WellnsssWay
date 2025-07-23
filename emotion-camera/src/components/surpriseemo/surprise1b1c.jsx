import React from "react";
import { useNavigate } from "react-router-dom";

export default function Surprise1b1c() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q: When you try to move on, do you feel like you've fully processed
        the event, or is it more of a suppression?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/surprise1a1a3")}>
            a) I feel I've processed it enough.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1a1a1")}>
            b) It feels more like suppression.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/surprise1b1a1")}>
            c) I'm not sure, it's hard to tell.
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
          color: #333;
          margin-bottom: 30px;
        }

        .option-list {
          list-style: none;
          padding: 0;
        }

        .option-list li {
          margin-bottom: 20px;
        }

        button {
          width: 100%;
          padding: 14px 20px;
          font-size: 1rem;
          background-color: #a976a9;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.2s, background-color 0.2s;
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
