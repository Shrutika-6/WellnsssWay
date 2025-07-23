import React from "react";

export default function Sad1a2a3() {
  return (
    <div className="recommendation-page">
      <h2>Talking can truly help.</h2>
      <p>When you're ready, here are some gentle ways to start:</p>
      <ul className="recommendation-list">
        <li>
          Share a small detail with someone you trust—it doesn’t have to be
          everything.
        </li>
        <li>Write it out in a journal first if saying it is too hard.</li>
        <li>Consider anonymous helplines or online therapy chat services.</li>
        <li>
          Your feelings are valid, and it's okay to seek help at your pace.
        </li>
      </ul>

      <style jsx>{`
        .recommendation-page {
          max-width: 750px;
          margin: 70px auto;
          padding: 45px;
          background-color: #f0f4ff;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 15px;
        }

        p {
          font-size: 1.1rem;
          color: #444;
          margin-bottom: 20px;
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
