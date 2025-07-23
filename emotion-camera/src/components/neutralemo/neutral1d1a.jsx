import React from "react";

export default function Neutral1d1a() {
  return (
    <div className="recommendations-container">
      <h2>Understanding Your Fatigue</h2>

      <section>
        <h3>Reflection & Suggestions</h3>
        <ul>
          <li>
           
            <em>Rest, short-term fatigue:</em> Prioritize rest today. Sometimes, a good night's sleep is all that's needed to reset.
          </li>
          <li>
            
            <em>Sleep hygiene, medical check-up:</em> Persistent fatigue impacting daily life warrants attention. Review your sleep hygiene and consider consulting a doctor.
          </li>
          <li>
            <em>Energy management:</em> If fatigue is chronic, explore energy management strategies like pacing yourself and identifying energy drains.
          </li>
        </ul>
      </section>

      <p>
        Everyone gets tired sometimes, but consistent fatigue deserves care and awareness. A few simple habits or a quick check-in with a health professional could make a big difference.
      </p>

      <style jsx>{`
        .recommendations-container {
          max-width: 800px;
          margin: 50px auto;
          padding: 40px;
          background: #fff8e1;
          border-radius: 20px;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #6d4c41;
        }

        h2 {
          text-align: center;
          font-size: 1.8rem;
          margin-bottom: 25px;
          color: #ef6c00;
        }

        h3 {
          font-size: 1.3rem;
          color: #fb8c00;
          margin-bottom: 15px;
        }

        ul {
          list-style: disc;
          margin-left: 25px;
        }

        ul li {
          font-size: 1.1rem;
          margin-bottom: 20px;
        }

        p {
          text-align: center;
          margin-top: 30px;
          font-size: 1.05rem;
          color: #6d4c41;
        }
      `}</style>
    </div>
  );
}
