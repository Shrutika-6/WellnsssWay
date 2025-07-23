import React from "react";

const EmotionCounts = ({ counts }) => (
  <div className="emotion-counts">
    {Object.entries(counts)
      .filter(([_, count]) => count > 0)
      .map(([emotion, count]) => (
        <div className="emotion-count-item" key={emotion}>
          <span className="emotion-name">{emotion}</span>
          <span className="emotion-count">{count}</span>
        </div>
      ))}
  </div>
);

export default EmotionCounts;
