import React from "react";

export default function Fear1c1b1() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>
      <div className="recommendation-box">
        <p>
          Resolving issues brings peace. Acknowledge your ability to tackle challenges.
        </p>
        <ul>
          <li>Recognize the effort it took to resolve that stressor—give yourself credit.</li>
          <li>Continue practicing techniques that helped, like problem-solving, communication, or self-reflection.</li>
          <li> Try to journal or track what helped you stay calm so you can revisit it when needed.</li>
          <li> Remember: Calm is a state you can return to—it is not just a lucky moment, but a skill.</li>
        </ul>
      </div>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f0f8ff;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.6rem;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 20px;
        }

        .recommendation-box {
          background: #ffffff;
          border-left: 6px solid #42a5f5;
          padding: 20px;
          border-radius: 10px;
        }

        .recommendation-box p {
          font-size: 1.15rem;
          color: #333;
          margin-bottom: 15px;
        }

        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        ul li {
          font-size: 1.05rem;
          color: #444;
          margin-bottom: 10px;
          padding-left: 1.2em;
          position: relative;
        }

        ul li::before {
        
          color: #42a5f5;
          position: absolute;
          left: 0;
        }
      `}</style>
    </div>
  );
}
