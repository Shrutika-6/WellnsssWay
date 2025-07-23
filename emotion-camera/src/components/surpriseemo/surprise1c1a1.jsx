import React from "react";

export default function Surprise1c1a1() {
  return (
    <div className="recommendation-container">
     
      <ul>
        <li> When in doubt, consult multiple sources — books, articles, or expert opinions can offer diverse perspectives.</li>
        <li>Break complex topics into smaller parts. Understanding piece by piece often makes the whole clearer.</li>
        <li> Trust your instincts — if something feels unclear, it is okay to pause and reassess your approach.</li>
        <li>Reflect on past experiences — which sources or people helped you gain clarity in the past?</li>
      </ul>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          font-size: 1.6rem;
          color: #333;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          font-size: 1rem;
          color: #444;
          margin-bottom: 12px;
          padding-left: 10px;
        }
      `}</style>
    </div>
  );
}
