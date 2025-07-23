import React from "react";

export default function Happy3a1() {
  return (
    <div className="recommendations-container">
      <h2>A stable, neutral state is a sign of balance.</h2>
      <h2>Continue to maintain your well-being practices.</h2>
      <h2>Small habits each day build long-term resilience.</h2>
      <h2>Celebrate your emotional steadiness — it's strength.</h2>

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #fff5fa;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          color: #4a4a4a;
        }
      `}</style>
    </div>
  );
}
