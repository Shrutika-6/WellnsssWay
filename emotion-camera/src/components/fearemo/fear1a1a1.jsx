import React from "react";

export default function Fear1a1a1() {
  return (
    <div className="recommendations-container">

      <ul>
        <li>Inhale deeply through your nose for 4 seconds</li>
        <li>Hold your breath gently for 4 seconds</li>
        <li>Exhale slowly through your mouth for 6 seconds</li>
        <li>Repeat this cycle for 1-2 minutes</li>
        <li>Focus on the feeling of the breath leaving your body</li>
      </ul>
      

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #e6f7ff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #3a3a3a;
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
