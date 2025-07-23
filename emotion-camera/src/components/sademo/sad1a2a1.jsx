import React from "react";

export default function Sad1a2a1() {
  return (
    <div className="recommendation-page">
      <h2>That's good to hear.</h2>
      <p>
        Even a little relief matters. Here are some things that may help you
        further:
      </p>
      <ul className="recommendation-list">
        <li>Keep expressing yourself to those you trust.</li>
        <li>Maintain a journal to vent and reflect.</li>
        <li>Consider light activities like music, art, or nature walks.</li>
        <li>Talk to a counselor if it feels too heavy.</li>
      </ul>

      <style jsx>{`
        .recommendation-page {
          max-width: 750px;
          margin: 70px auto;
          padding: 45px;
          background-color: #f6f1fb;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.8rem;
          color: #4a4a4a;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 25px;
        }

        .recommendation-list {
          list-style: disc inside;
          text-align: left;
          max-width: 600px;
          margin: 0 auto;
          padding-left: 0;
        }

        .recommendation-list li {
          font-size: 1.05rem;
          color: #333;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
}
