import React from "react";

export default function Angry3a() {
  return (
    <div className="recommendation-page">
      <h2>You mentioned feeling a little confused.</h2>
      <p>
        It's okay to not have all the answers. Confusion is often a sign that
        you're trying to make sense of your thoughts and emotions — that’s a
        good thing.
      </p>
      <ul>
        <li> Take a moment to pause and breathe deeply.</li>
        <li>
          {" "}
          Try writing down what’s on your mind. It can help untangle thoughts.
        </li>
        <li> Talk to a trusted person for clarity or just to be heard.</li>
        <li>
          {" "}
          Give yourself time — not everything needs to be solved at once.
        </li>
      </ul>
      <p>You’re doing your best, and that’s enough right now.</p>

      <style jsx>{`
        .recommendation-page {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #eef7ff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          color: #333;
          margin-bottom: 15px;
        }

        p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 20px;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 20px;
        }

        ul li {
          font-size: 1.1rem;
          margin-bottom: 12px;
          color: #444;
        }
      `}</style>
    </div>
  );
}
