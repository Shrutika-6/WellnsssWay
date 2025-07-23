import React from "react";

export default function Surprise1b1a1() {
  return (
    <div className="recommendations-container">
      <ul>
        <li>Focus on small grounding tasks: hold a textured object, describe your surroundings, or take a deep breath.</li>
        <li>Limit overwhelming input (e.g., news, social media) while you recover from shock.</li>
        <li>If you're comfortable, talk to someone you trust—even if you don't fully understand what you're feeling yet.</li>
        <li>Write down your thoughts, even if they're scattered or don't make sense right away.</li>
        <li>Engage in light routines or self-care practices like stretching, drinking water, or taking a short walk.</li>
      </ul>
      

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f0f8ff; /* soft blue for calming tone */
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

        p {
          font-size: 1rem;
          color: #555;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
