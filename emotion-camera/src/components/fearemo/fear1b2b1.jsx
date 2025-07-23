import React from "react";

export default function Fear1b2b1() {
  return (
    <div className="recommendation-container">

      <p>
        Pushing through can be exhausting. While resilience is good, consider if      addressing the anxiety directly might offer more relief. You might try:
      </p>
      <ul>
        <li>Practicing mindfulness to acknowledge the anxiety without judgment</li>
        <li>  Identifying the root causes of your anxiety through journaling or reflection</li>
        <li>Talking to someone you trust about your thoughts and feelings</li>
        <li>Seeking guidance from a therapist to explore deeper patterns</li>
      </ul>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", sans-serif;
        }

        

        p {
          font-size: 1.1rem;
          margin-bottom: 20px;
          color: #333;
        }

        ul {
          padding-left: 20px;
          list-style-type: disc;
          color: #555;
        }

        li {
          margin-bottom: 12px;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
