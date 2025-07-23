import React from "react";

export default function Surprise1a2a1() {
  return (
    <div className="recommendations-container">

      <ul>
        <li>Feeling appreciated is a cornerstone of strong relationships. Continue to nurture these connections.</li>
        <li>Reach out and express your gratitude directly.</li>
        <li>Spend quality time together to deepen your bond.</li>
        <li>Do something thoughtful in return to keep the appreciation cycle going.</li>
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


        ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 20px;
        }

        ul li {
          font-size: 1.05rem;
          margin-bottom: 12px;
        }
      `}</style>
    </div>
  );
}
