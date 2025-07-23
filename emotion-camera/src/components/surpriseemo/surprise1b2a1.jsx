import React from "react";

export default function Surprise1b2a1() {
  return (
    <div className="recommendation-container">

      <ul className="tips-list">
        <li>Reflect on how the situation resolved positively.</li>
        <li>Recognize that being frozen is a normal response to overwhelming events.</li>
        <li>Express gratitude for any external help or fortunate outcomes.</li>
        <li>Prepare mentally for future unexpected moments—resilience builds over time.</li>
        <li>Do not blame yourself for your initial reaction—your body was protecting you.</li>
      </ul>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .tips-list {
          list-style: disc;
          padding-left: 20px;
          color: #444;
        }

        .tips-list li {
          margin-bottom: 12px;
        }
      `}</style>
    </div>
  );
}
