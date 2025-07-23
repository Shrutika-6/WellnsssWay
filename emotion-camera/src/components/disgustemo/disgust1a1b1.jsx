import React from "react";

export default function Disgust1a1b1() {
  return (
    <div className="recommendation-container">
      <h2>Recommendations</h2>
      <ul>
        <li>Find a safe space to step away if needed.</li>
        <li>Take deep breaths as you shift your focus elsewhere.</li>
        <li>Engage with a calming scent, sound, or image.</li>
        <li>Remind yourself that your reaction is valid and protective.</li>
      </ul>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #333;
        }

        p {
          font-size: 1rem;
          margin-bottom: 20px;
          color: #444;
        }

        ul {
          padding-left: 20px;
          color: #555;
        }

        li {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
