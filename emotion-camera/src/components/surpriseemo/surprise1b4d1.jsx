import React from "react";

export default function Surprise1b4d1() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>
      
      <ul>
        <li>Reach out to someone you trust to talk through your confusion.</li>
        <li>Let others help you break down situations into smaller, clearer steps.</li>
        <li>Consider joining a support group or speaking with a counselor.</li>
        <li>Practice accepting help without guilt—it builds connection and healing.</li>
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

        h2 {
          font-size: 1.6rem;
          color: #333;
          margin-bottom: 20px;
        }


        ul {
          padding-left: 20px;
        }

        li {
          margin-bottom: 10px;
          line-height: 1.6;
          color: #555;
        }
      `}</style>
    </div>
  );
}
