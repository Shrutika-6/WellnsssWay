// components/EmotionVideo.jsx
import React, { useEffect } from "react";

function EmotionVideo({ videoRef, canvasRef, isDetecting }) {
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => console.error("Video play error:", err));
    }
  }, [videoRef]);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className={`video-feed ${isDetecting ? "detecting" : ""}`}
      />
      <canvas
        ref={canvasRef}
        className="hidden-canvas"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default EmotionVideo;
