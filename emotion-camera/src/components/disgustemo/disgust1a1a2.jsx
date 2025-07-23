import React from "react";

export default function Disgust1a1a2() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>
      <p>
        
        <ul>
          <li>Notice your body's cues (like wrinkling your nose or stepping back) without judgment.</li>
          <li>Engage your senses in a grounding activity—touch something soothing, smell something pleasant, or sip water.</li>
          <li>Shift your mental focus to something neutral or calming—music, imagery, or a breathing exercise.</li>
          <li>Remind yourself: Disgust is a protective response. It's okay to take space from discomfort.</li>
          <li>Try labeling what caused the feeling (e.g., “That smell felt off”) to process it more consciously.</li>
        </ul>
      </p>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #333;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
        }

        ul {
          padding-left: 20px;
          margin-top: 10px;
        }

        li {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
}
