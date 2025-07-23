import React from "react";

export default function Sad1a1b1() {
  return (
    <div className="recommendation-page">
      <h2>Here are some suggestions that might help:</h2>
      <ol className="recommendation-list">
        <li>You must cope with your problems and move on with life.</li>
        <li>Try reaching out to a friend.</li>
        <li>Talk to someone close.</li>
        <li>
          Please contact us if you feel not so sure about your situation. <br />
          📞 <strong>Contact: +91-9928907039</strong>
        </li>
      </ol>

      <style jsx>{`
        .recommendation-page {
          max-width: 750px;
          margin: 70px auto;
          padding: 45px;
          background-color: #fff6fb;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.7rem;
          margin-bottom: 25px;
          color: #3a3a3a;
        }

        .recommendation-list {
          text-align: left;
          font-size: 1.15rem;
          padding-left: 1.2rem;
          line-height: 1.8;
          color: #444;
        }

        .recommendation-list li {
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
}
