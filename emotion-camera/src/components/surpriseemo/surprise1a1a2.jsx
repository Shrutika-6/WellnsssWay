// components/RecommendationSharingJoy.jsx
import React from "react";

export default function Surprise1a1a2() {
  return (
    <div className="recommendations-container">
    
      <ul>
        
        <li>Let others feel your happiness — it strengthens connection</li>
        <li>Celebrate your moment with a photo, post, or a happy dance</li>
        <li>Write about the experience in a journal to reflect later</li>
        <li>Know that joy shared is joy multiplied</li>
      </ul>
    

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #e6f7ff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }


        ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 20px;
        }

        ul li {
          font-size: 1.1rem;
          margin-bottom: 12px;
        }

      `}</style>
    </div>
  );
}
