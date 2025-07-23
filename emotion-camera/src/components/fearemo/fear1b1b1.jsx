import React from "react";

export default function Fear1b1b1() {
  return (
    <div className="recommendation-container">
      <h2>Recommendations</h2>
      <ul>
        <li>
          <strong>Body Awareness:</strong> Pay attention to physical cues like restlessness or tension. Try gentle stretching, a walk, or deep breathing.
        </li>

        
      </ul>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f7f4fa;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 25px;
          color: #1f1922ff;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        li {
          margin-bottom: 15px;
          line-height: 1.5;
          color: #333;
        }

        strong {
          color: #7a4c85;
        }
      `}</style>
    </div>
  );
}
