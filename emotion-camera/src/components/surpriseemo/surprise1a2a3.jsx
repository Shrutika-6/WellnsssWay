import React from "react";

export default function Surprise1a2a3() {
  return (
    <div className="recommendations-container">
      

      <ul>
        <li>
        It's okay to feel overwhelmed. You can express gratitude while also setting boundaries for your comfort. </li>
        <li>Say thank you in a way that feels natural to you—keep it simple.</li>
        <li>Let others know you appreciate them, even if you're not ready for deeper interaction.</li>
        <li>Take space if needed—your emotional boundaries are valid and important.</li>
        <li>Gratitude and boundaries can coexist. Honor your feelings and pace.</li>
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
