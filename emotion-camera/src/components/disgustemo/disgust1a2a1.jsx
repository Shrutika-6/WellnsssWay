import React from "react";

export default function Disgust1a2a1() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>
      
      <ul>
        <li>Decide what kind of interaction you're comfortable with going forward.</li>
        <li>Communicate your boundaries calmly and clearly, if needed.</li>
        <li>Protect your peace by limiting contact if the behavior continues.</li>
        <li>Remember that setting boundaries is a form of self-respect, not rejection.</li>
        <li>It's okay to reevaluate boundaries over time as the situation changes.</li>
        <li>Prioritize your emotional well-being — it's valid and important.</li>
      </ul>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background-color: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.6rem;
          color: #333;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.1rem;
          margin-bottom: 20px;
          color: #444;
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin-bottom: 10px;
          font-size: 1rem;
          color: #555;
        }
      `}</style>
    </div>
  );
}
