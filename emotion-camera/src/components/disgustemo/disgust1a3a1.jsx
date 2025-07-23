import React from "react";

export default function Disgust1a31() {
  return (
    <div className="question-container">
      <h2>Recommendation</h2>
      <ul>
        <li>Look for advocacy groups aligned with your values.</li>
        <li>Use social media to raise awareness respectfully and responsibly.</li>
        <li>Educate yourself on the issue to ensure informed action.</li>
        <li>Participate in community efforts, petitions, or campaigns.</li>
        <li>Support others who are already creating change.</li>
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
