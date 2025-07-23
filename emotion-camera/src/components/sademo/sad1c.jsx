import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sad1c() {
  const navigate = useNavigate();

  return (
    <div className="question-container">
      <h2>
        Q: I hear you, and it sounds like you're going through a lot right now.
        Have you had thoughts that you would be better off dead, or thoughts of
        hurting yourself?
      </h2>
      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/sad1c1")}>
            a) Yes, I've had those thoughts, and I have a plan or intent to act
            on them
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1c2")}>
            b) Yes, I've had those thoughts, but I don't have a plan or intent
            to act on them
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1c3")}>
            c) I've thought about it, but I know I wouldn't act on it
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1c4")}>
            d) No, absolutely not, I would never hurt myself
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
