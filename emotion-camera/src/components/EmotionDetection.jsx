// components/EmotionDetection.jsx
import React, { useRef, useEffect, useState } from "react";
import EmotionVideo from "./EmotionVideo";
import DetectionStatus from "./DetectionStatus";
import StartButton from "./StartButton";
import ResultSection from "./ResultSection";
import { useNavigate } from "react-router-dom";

function EmotionDetection() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [currentEmotion, setCurrentEmotion] = useState("Detecting...");
  const [stableEmotion, setStableEmotion] = useState(null);
  const [emotionCounts, setEmotionCounts] = useState({
    angry: 0,
    disgust: 0,
    fear: 0,
    happy: 0,
    sad: 0,
    surprise: 0,
    neutral: 0,
  });
  const emotionCountsRef = useRef(emotionCounts);

  const [detectionTime, setDetectionTime] = useState(0);
  const [isDetecting, setIsDetecting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Webcam error:", err);
        setCurrentEmotion("Webcam access denied");
      });
  }, []);

  useEffect(() => {
    let interval;
    if (isDetecting) {
      interval = setInterval(() => {
        captureAndSendFrame();
        setDetectionTime((prev) => {
          const newTime = prev + 1;
          if (newTime >= 10) {
            finishDetection();
            return 10;
          }
          return newTime;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDetecting]);

  const captureAndSendFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, 48, 48);
    const imageData = canvas.toDataURL("image/jpeg");

    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: imageData }),
    })
      .then((res) => res.json())
      .then((data) => {
        const detectedEmotion = data.emotion?.toLowerCase() || "neutral";
        setCurrentEmotion(detectedEmotion);
        setEmotionCounts((prev) => {
          const updated = {
            ...prev,
            [detectedEmotion]: prev[detectedEmotion] + 1,
          };
          emotionCountsRef.current = updated;
          return updated;
        });
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setCurrentEmotion("Error connecting to server");
      });
  };

  const finishDetection = () => {
    setIsDetecting(false);
    const localCounts = { ...emotionCountsRef.current };
    let maxEmotion = "neutral";
    let maxCount = 0;
    for (const [emotion, count] of Object.entries(localCounts)) {
      if (count > maxCount) {
        maxCount = count;
        maxEmotion = emotion;
      }
    }
    setStableEmotion(maxEmotion);
    setCurrentEmotion(maxEmotion);
  };

  const handleStartDetection = () => {
    setHasStarted(true);
    setIsDetecting(true);
    setDetectionTime(0);
    setEmotionCounts({
      angry: 0,
      disgust: 0,
      fear: 0,
      happy: 0,
      sad: 0,
      surprise: 0,
      neutral: 0,
    });
    setCurrentEmotion("Detecting...");
    setStableEmotion(null);
  };

  const navigate = useNavigate();

  const redirectToEmotionPage = () => {
    if (stableEmotion) {
      navigate(`/${stableEmotion}`);
    }
  };

  return (
    <div>
      <h1 className="app-title">Emotion Detection & Support</h1>
      <EmotionVideo videoRef={videoRef} canvasRef={canvasRef} />

      {!hasStarted ? (
        <StartButton onClick={handleStartDetection} />
      ) : (
        <div className="results-container">
          <h3 className="current-emotion">
            Current Emotion:{" "}
            <span className="emotion-value">
              {isDetecting ? currentEmotion : stableEmotion}
            </span>
          </h3>

          {isDetecting ? (
            <DetectionStatus
              emotionCounts={emotionCounts}
              detectionTime={detectionTime}
            />
          ) : (
            stableEmotion && (
              <ResultSection
                stableEmotion={stableEmotion}
                onRedirect={redirectToEmotionPage}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default EmotionDetection;
