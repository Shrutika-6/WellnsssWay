import React from "react";

export default function Surprise1a2a2() {
  return (
    <div className="recommendations-container">


      <ul>
        <li>Take a quiet moment to reflect on what they did and how it made you feel.</li>
        <li>Write a short note or message of appreciation—even if you do not send it.</li>
        <li>Notice how often others support or uplift you in small ways.</li>
        <li>Consider sharing your feelings with someone you trust.</li>
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
          font-size: 1.05rem;
          margin-bottom: 12px;
        }
      `}</style>
    </div>
  );
}
