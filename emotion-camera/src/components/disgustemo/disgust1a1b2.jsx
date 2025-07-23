import React from "react";

export default function Disgust1a1b2() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>

      <ul>
        <li>Inhale slowly through your nose, hold for a few seconds, and exhale through your mouth.</li>
        <li>Ground yourself by focusing on physical surroundings (e.g., the feel of an object in your hand).</li>
        <li>Distract your senses—look at a calming image, listen to soothing music, or hold a comforting object.</li>
        <li>Affirm to yourself: “This will pass. I am handling it step by step.”</li>
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
