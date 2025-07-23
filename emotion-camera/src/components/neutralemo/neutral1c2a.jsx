import React from "react";

export default function Neutral1c2a() {
  return (
    <div className="recommendations-container">
      <h2>Understanding Emotional Detachment</h2>

      <section>
        <h3>Possible Insights & Ways Forward</h3>
        <ul>
          <li>
            <strong>“Yes, it feels like a way to cope with stress/overwhelm”</strong><br />
            <em>Coping mechanism:</em> Detachment can be a protective response to stress. Explore other coping mechanisms like deep breathing or talking to someone.
          </li>
          <li>
            <strong>“No, it just happens, no clear reason”</strong><br />
            <em>Self-awareness:</em> If there's no clear reason, try observing when it occurs. Sometimes, subtle triggers can be identified through journaling.
          </li>
          <li>
            <strong>“I feel disconnected from my feelings”</strong><br />
            <em>Emotional connection:</em> If you feel disconnected, try a body scan meditation to reconnect with physical sensations, which can sometimes lead to emotional awareness.
          </li>
        </ul>
      </section>

      <p>Emotional detachment can be confusing or frustrating, but it is also a message from your body and mind. Small practices in awareness and self-care can gently bring you back to emotional clarity.</p>

      <style jsx>{`
        .recommendations-container {
          max-width: 800px;
          margin: 50px auto;
          padding: 40px;
          background: #f3e5f5;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #4a148c;
        }

        h2 {
          text-align: center;
          font-size: 1.8rem;
          margin-bottom: 25px;
          color: #6a1b9a;
        }

        h3 {
          font-size: 1.3rem;
          color: #8e24aa;
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
          color: #4a148c;
        }
      `}</style>
    </div>
  );
}
