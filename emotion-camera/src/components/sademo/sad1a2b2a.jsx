import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sad1a2b2a() {
  const navigate = useNavigate();

  return (
    <div className="sad-message-container">
      <h2>
        It sounds like this sadness might be taking a little more out of you.{" "}
        <br />
        Remember to prioritize rest and doing things that genuinely bring you
        comfort, even if it's just for a short time.
      </h2>

      <button className="ok-button" onClick={() => navigate("/sad1a3")}>
        OK
      </button>

      <style jsx>{`
        .sad-message-container {
          max-width: 700px;
          margin: 100px auto;
          padding: 40px;
          background-color: #f8f1fa;
          border-radius: 18px;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.15);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
          color: #4a3665;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .ok-button {
          padding: 12px 28px;
          font-size: 1rem;
          background-color: #a976a9;
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .ok-button:hover {
          background-color: #944f94;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
