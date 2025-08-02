import React from "react";
import EmotionCounts from "./EmotionCounts";

const DetectionStatus = ({ emotionCounts, detectionTime }) => (
  <>
    <h4 className="progress-indicator">
      Analyzing: {detectionTime}/10 seconds
    </h4>
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${(detectionTime / 10) * 100}%` }}
      ></div>
    </div>
    <EmotionCounts counts={emotionCounts} />
  </>
);

export default DetectionStatus;
