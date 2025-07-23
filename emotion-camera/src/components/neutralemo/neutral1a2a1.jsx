import React from "react";

export default function Neutral1a2a1() {
  return (
    <div className="recommendations-container">
      <h2>Here’s a reflection based on your calm activity:</h2>
      <ul>
        <li>
           Quiet activities like reading or music are great for calm. Make time for them regularly.
        </li>
        <li>
           Time in nature is incredibly calming. Continue to connect with the outdoors.
        </li>
        <li>
          Creative hobbies are wonderful for relaxation and self-expression. Keep nurturing your creativity.
        </li>
      </ul>
      <p>Your calm moments are valuable — keep creating space for them.</p>

      <style jsx>{`
        .recommendations-container {
          max-width: 750px;
          margin: 60px auto;
          padding: 40px;
          background: #f5fcff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 20px;
        }

        ul li {
          font-size: 1.1rem;
          margin-bottom: 15px;
          color: #34495e;
          text-align: left;
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
