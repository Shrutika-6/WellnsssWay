import React from "react";

export default function Neutral1a3a1() {
  return (
    <div className="recommendations-container">
      <h2>You're building a truly positive mindset:</h2>
      <ul>
        <li>Gratitude is a powerful practice — continue finding things to appreciate.</li>
        <li>Mindfulness keeps you present and grounded — keep up your practice.</li>
        <li>Acceptance is key to inner peace — focusing on what you can control is wise.</li>
      </ul>
      <p>These habits support lasting emotional well-being. Keep nurturing your mindset!</p>

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #fff8e1;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #8d6e63;
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
