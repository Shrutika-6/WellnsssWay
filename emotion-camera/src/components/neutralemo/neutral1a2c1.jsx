import React from "react";

export default function Neutral1a2c1() {
  return (
    <div className="recommendations-container">
      <h2>Social interactions have powerful emotional benefits:</h2>
      <ul>
        <li>Supportive connections are vital for well-being — keep nurturing those relationships.</li>
        <li>Laughter and shared enjoyment boost your mood — look for more joyful moments.</li>
        <li>Social time can be a healthy distraction — just remember to also care for underlying emotions when needed.</li>
      </ul>
      <p>Staying connected is key to emotional balance. You are doing something great for your mental health!</p>

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f3e5f5;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #6a1b9a;
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
