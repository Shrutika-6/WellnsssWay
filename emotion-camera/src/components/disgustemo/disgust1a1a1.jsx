import React from "react";

export default function Disgust1a1a1() {
  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>

      <p>
        <ul>
          <li>Take a few slow, deep breaths to regulate your physical response.</li>
          <li>Try grounding techniques like touching a comforting texture or holding something warm or cool.</li>
          <li>Shift your focus to a neutral or positive distraction—such as nature sounds, soothing visuals, or music.</li>
          <li>Journal briefly about the experience to gain clarity and perspective.</li>
          <li>Drink water or chew gum to help neutralize lingering physical sensations.</li>
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
