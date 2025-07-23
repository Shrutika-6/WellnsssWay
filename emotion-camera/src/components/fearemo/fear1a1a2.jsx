import React from "react";

export default function Fear1a1a2() {
  return (
    <div className="recommendations-container">
    
      <ul>
        <li>Try progressive muscle relaxation — tense and release each muscle group</li>
        <li>Do light stretches for your neck, shoulders, and back</li>
        <li>Take a short walk to help release built-up energy</li>
        <li>Do a few shoulder rolls or gentle yoga poses</li>
        <li>Pause and take a few deep breaths with each stretch</li>
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
