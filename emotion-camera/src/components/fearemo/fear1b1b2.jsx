import React from "react";

export default function fear1b1b2() {
  return (
    <div className="recommendation-container">
      <h2>Recommendations</h2>
      <ul>
        <li>
          <strong>Mental Focus:</strong> If your anxiety feels more mental, redirect your thoughts to calming activities like listening to soft music, journaling, or guided meditation.
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
          color: #3c2c43ff;
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
          color: #291f2bff;
        }
      `}</style>
    </div>
  );
}
