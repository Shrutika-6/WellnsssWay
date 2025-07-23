import React from "react";

const ResultSection = ({ stableEmotion, onRedirect }) => (
  <>
    <p className="completion-message">Detection complete.</p>
    <button className="primary-button" onClick={onRedirect}>
      Analyse More
    </button>
  </>
);

export default ResultSection;
