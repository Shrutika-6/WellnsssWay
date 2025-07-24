import React from "react";

const EmotionVideo = ({ videoRef, canvasRef }) => (
  <div className="video-wrapper">
    <video ref={videoRef} className="video-element" autoPlay muted />
    <canvas ref={canvasRef} width="224" height="224" className="hidden-canvas"/>
  </div>
);

export default EmotionVideo;
