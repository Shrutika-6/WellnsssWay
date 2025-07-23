import React from "react";

export default function Fear1a1b1() {
  return (
    <div className="recommendations-container">

      <ul>
        <li>Look around and name 5 things you see</li>
        <li>Listen for 4 different sounds</li>
        <li>Notice 3 things you can physically feel (e.g., chair, clothes)</li>
        <li>Take one small, meaningful action to anchor yourself</li>
      </ul>     
      <ul>
        <li>Be kind to yourself — acknowledge the difficulty</li>
        <li>Use deep breathing to calm your body and mind</li>
        <li>Try journaling or expressing your emotions safely</li>
        <li>Take a short break or do something comforting</li>
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
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
