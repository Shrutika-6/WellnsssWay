import React from "react";

export default function Disgust1a3a2() {
  return (
    <div className="question-container">
      <h2>Recommendation</h2>
      <ul>
        <li>Take time to reflect on why you're choosing to disengage.</li>
        <li>Set clear personal boundaries that protect your peace of mind.</li>
        <li>Let go of guilt—choosing not to engage can still be principled.</li>
        <li>Redirect your energy toward causes or spaces that align with your ethics.</li>
        <li>Talk to someone you trust if you feel conflicted or emotionally drained.</li>
      </ul>

      <style jsx>{`
        .question-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #fff;
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
          color: #444;
          margin-bottom: 20px;
        }

        ul {
          padding-left: 20px;
          color: #555;
        }

        li {
          margin-bottom: 10px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
