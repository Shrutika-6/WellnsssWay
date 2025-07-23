import React from "react";

export default function Happy3b2() {
  return (
    <div className="recommendations-container">
      <h2>Nurture peaceful activities:</h2>
      <h2>
        These activities are excellent for promoting calm. Make sure to
        regularly carve out time for them.
      </h2>
      <h2>
        You deserve space for peace — it's a powerful form of self-care. 🌼
      </h2>

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f2fff2;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          color: #2e5339;
        }
      `}</style>
    </div>
  );
}
