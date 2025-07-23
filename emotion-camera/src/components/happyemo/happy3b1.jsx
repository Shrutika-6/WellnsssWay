import React from "react";

export default function Happy3b1() {
  return (
    <div className="recommendations-container">
      <h2>
        Reinforce calming techniques: It's wonderful you have effective ways to
        find calm.
      </h2>
      <h2>Keep practicing these techniques regularly!</h2>
      <h2>Repetition builds resilience — your calm is your strength. 🌿</h2>

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #e6f7ff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          color: #2a2a2a;
        }
      `}</style>
    </div>
  );
}
