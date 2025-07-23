import React from "react";

export default function Fear1b1a1() {
  return (
    <div className="recommendation-container">
      <h2>Recommendations</h2>
      <ul className="recommendation-list">
        <li>
          Reinforce Coping: It's great your methods are effective. Continue to apply them to manage this stressor.
        </li>
        <li>
          Stress Management: Explore stress management techniques like mindfulness, journaling, or talking to a trusted friend about the stressor.
        </li>
      </ul>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f8f9fa;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 25px;
          color: #2c3e50;
        }

        .recommendation-list {
          list-style-type: disc;
          padding-left: 20px;
        }

        .recommendation-list li {
          margin-bottom: 20px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #333;
        }

        strong {
          color: #34495e;
        }
      `}</style>
    </div>
  );
}
