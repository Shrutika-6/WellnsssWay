import React from "react";

export default function Neutral1a1b1() {
  return (
    <div className="recommendations-container">
      <h2>You're doing great at maintaining emotional peace:</h2>
      <ul>
        <li>Setting boundaries is crucial for protecting your peace — keep practicing this skill!</li>
        <li>Nurturing supportive relationships creates a peaceful environment — value these connections.</li>
        <li>Identifying and minimizing stressors helps maintain your calm — great strategy!</li>
      </ul>
      <p>Protecting your peace is an act of strength. Keep cultivating your inner calm.</p>

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f0fff4;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #2f855a;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 20px;
        }

        ul li {
          font-size: 1.1rem;
          margin-bottom: 12px;
        }

        p {
          font-size: 1rem;
          color: #555;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
