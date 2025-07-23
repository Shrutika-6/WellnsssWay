import React from "react";

export default function Happy3a2() {
  return (
    <div className="recommendations-container">
      <h2>Appreciate calm: It's good to appreciate calm days.</h2>
      <h2>Sometimes, the absence of strong emotions can be a form of peace.</h2>
      <h2>Stillness can be grounding — embrace it fully.</h2>

      <style jsx>{`
        .recommendations-container {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          background: #f0fdf4;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          color: #2e2e2e;
        }
      `}</style>
    </div>
  );
}
