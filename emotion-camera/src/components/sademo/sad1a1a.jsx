import React from "react";

export default function Sad1a1a() {
  return (
    <div className="recommendations-container">
      <h2>Here are some gentle self-care ideas:</h2>
      <ul>
        <li> Listen to your favorite music</li>
        <li> Take a short walk outside</li>
        <li> Reach out to a friend or loved one</li>
        <li> Read something light or watch a feel-good video</li>
      </ul>
      <p>It's okay to take things slow — you're not alone </p>

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #fff5fa;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #4a4a4a;
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
