import React from "react";

export default function Angry2a1b1() {
  return (
    <div className="recommendation-page">
      <h2>Cognitive reframing: </h2>
      <p>It's great you have healthy distractions!</p>
      <p>
        Excellent! Stepping back and seeing the bigger picture is a powerful
        cognitive reframing technique to reduce the impact of minor annoyances
      </p>

      <style jsx>{`
        .recommendation-page {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #eef7ff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          color: #333;
          margin-bottom: 15px;
        }

        p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 20px;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 20px;
        }

        ul li {
          font-size: 1.1rem;
          margin-bottom: 12px;
          color: #444;
        }
      `}</style>
    </div>
  );
}
