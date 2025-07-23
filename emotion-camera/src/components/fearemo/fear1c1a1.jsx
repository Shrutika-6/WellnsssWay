import React from "react";

export default function Fear1c1a1() {
  return (
    <div className="recommendation-container">
      <h2>Recommendations</h2>

      <div className="recommendation-box">
        <p>
          Consistent healthy routines are a strong foundation for calm. Keep nurturing these aspects.
        </p>
      </div>

      <div className="recommendation-box">
        <p>
          Cultivating a positive mindset helps maintain inner peace. Keep practicing gratitude or acceptance.
        </p>
      </div>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f0f4ff;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          color: #1a203eff;
        }

        .recommendation-box {
          background-color: #ffffff;
          border-left: 6px solid #8c9eff;
          padding: 20px 25px;
          margin-bottom: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .recommendation-box p {
          font-size: 1rem;
          color: #333333;
          line-height: 1.6;
        }

        .recommendation-box strong {
          color: #3949ab;
        }
      `}</style>
    </div>
  );
}
