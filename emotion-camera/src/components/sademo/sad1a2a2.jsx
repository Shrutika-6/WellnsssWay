import React from "react";

export default function Sad1a2a2() {
  return (
    <div className="recommendation-page">
      <h2>
        Healing does take effort, and you're doing well by acknowledging it.
      </h2>
      <ul className="recommendation-list">
        <li>Allow yourself space to feel and recover—there’s no rush.</li>
        <li>Try short meditative or mindful breathing sessions.</li>
        <li>Reach out to a supportive friend or mentor.</li>
        <li>Speak to a therapist to unpack your thoughts with guidance.</li>
      </ul>

      <style jsx>{`
        .recommendation-page {
          max-width: 750px;
          margin: 70px auto;
          padding: 45px;
          background-color: #fdf3f7;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.8rem;
          color: #4a4a4a;
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
