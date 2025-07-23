
import React from "react";

export default function Surprise1a1a1() {
  return (
    <div className="recommendations-container">
      <ul>
        <li>Take a moment to identify something you're excited to do</li>
        <li>Use this energy to start a creative task, hobby, or goal</li>
        <li>Break it into small steps and take action right now</li>
        <li>Let your enthusiasm guide your focus and flow</li>
        
      </ul>
      <p>
        That burst of energy is great! Channel it into something productive or
        creative to extend the positive feeling.
      </p>

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #fff7e6;
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
