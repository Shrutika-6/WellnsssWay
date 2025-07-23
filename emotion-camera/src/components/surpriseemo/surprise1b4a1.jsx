import React from "react";

export default function Surprise1b4a1() {
  return (
    <div className="recommendation-container">
    
      <ul>
        <li>Write down what you remember — even fragmented thoughts can help make sense of the situation.</li>
        <li>Talk to a supportive friend, family member, or therapist to organize your thoughts.</li>
        <li>Revisit the event after some time — a calmer mind may spot details missed during the initial shock.</li>
        <li>Give yourself grace — clarity doesn't always come immediately, and that is okay.</li>
        <li>Consider journaling as a safe outlet to unpack your emotions and improve clarity over time.</li>
      </ul>

      <style jsx>{`
        .recommendation-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background-color: #ffffff;
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
          line-height: 1.6;
        }

        ul {
          padding-left: 20px;
        }

        li {
          font-size: 1.05rem;
          color: #555;
          margin-bottom: 12px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
