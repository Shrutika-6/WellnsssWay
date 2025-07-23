import React from "react";

const EmotionVideo = ({ videoRef, canvasRef }) => (
  <div className="video-wrapper">
    <video ref={videoRef} className="video-element" autoPlay muted />
    <canvas ref={canvasRef} className="hidden-canvas" width="48" height="48" />
  </div>
);

export default EmotionVideo;
