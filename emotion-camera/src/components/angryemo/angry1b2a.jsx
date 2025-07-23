// components/angry/AngryRecs.jsx
import React from "react";

export default function Angry1b2a() {
  return (
    <div className="recommendation-page">
      <p>
        It's natural to feel upset when things are outside our control,
        especially when it impacts something important. While you can't change
        the past or the situation itself, focusing on how you can manage your
        reaction or mitigate future impact might bring some peace.
      </p>
      <ul>
        <li> Take deep breaths — inhale through your nose, exhale slowly.</li>
        <li> Go for a short walk or move around to release tension.</li>
        <li> Write down your thoughts instead of reacting impulsively.</li>
        <li>
          Use the 5-second rule before responding to frustrating situations.
        </li>
      </ul>
      <style jsx>{`
        .recommendation-page {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #ffecec;
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
          margin-top: 20px;
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
