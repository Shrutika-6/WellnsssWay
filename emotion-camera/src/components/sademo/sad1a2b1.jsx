import React from "react";

export default function Sad1a1a() {
  return (
    <div className="recommendations-container">
      <h1>
        That's good to hear. Keep an eye on how you're feeling, and don't
        hesitate to reach out if things change.
      </h1>
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
          max-width: 750px;
          margin: 80px auto;
          padding: 45px;
          background-color: #f9f1fc;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h1 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 25px;
        }

        h2 {
          font-size: 1.5rem;
          color: #5e3572;
          margin-bottom: 20px;
        }

        ul {
          list-style: none;
          padding-left: 0;
          font-size: 1.1rem;
          color: #444;
          margin-bottom: 20px;
        }

        li {
          margin-bottom: 15px;
        }

        p {
          font-size: 1rem;
          color: #555;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
}
