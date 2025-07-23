import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sad1a2() {
  const navigate = useNavigate();

  return (
    <div className="question-page">
      <h2>
        Q: I understand. Sometimes small setbacks can have a bigger impact than
        we expect. Have you had a chance to process or talk about it?
      </h2>

      <ul className="option-list">
        <li>
          <button onClick={() => navigate("/sad1a2a1")}>
            a) Yes, it helped a little
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a2a2")}>
            b) A little, but it takes effort.
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/sad1a2a3")}>
            c) No, but maybe I should.
          </button>
        </li>
      </ul>

      <style jsx>{`
        .question-page {
          max-width: 750px;
          margin: 70px auto;
          padding: 45px;
          background-color: #fff5f9;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
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
          margin-bottom: 20px;
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
          max-width: 420px;
        }

        .option-list button:hover {
          background-color: #905e94;
        }
      `}</style>
    </div>
  );
}
