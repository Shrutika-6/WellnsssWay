// components/EmotionDetection.jsx
import React, { useRef, useEffect, useState, useCallback } from "react";
import EmotionVideo from "./EmotionVideo";
import DetectionStatus from "./DetectionStatus";
import StartButton from "./StartButton";
import ResultSection from "./ResultSection";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function EmotionDetection() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const { user } = useAuth();

  const [currentEmotion, setCurrentEmotion] = useState("Waiting to start...");
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
  const [error, setError] = useState(null);

  // Clean up stream on unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  // Initialize webcam
  useEffect(() => {
    const initWebcam = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: "user",
          },
          audio: false,
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Webcam error:", err);
        setError("Webcam access denied or not available");
      }
    };

    initWebcam();
  }, []);

  // Detection logic
  const captureAndSendFrame = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    // Ensure proper canvas dimensions
    canvas.width = 640; // Fixed dimensions
    canvas.height = 480;

    const context = canvas.getContext("2d");

    // Disable image smoothing for sharper images
    context.imageSmoothingEnabled = false;

    // Draw video frame
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    try {
      // Use PNG for lossless compression
      const imageData = canvas.toDataURL("image/png");

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageData }),
      });
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
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

      // Rest of your code...
    } catch (err) {
      console.error("Detection error:", err);
    }
  }, []);

  // const captureAndSendFrame = useCallback(async () => {
  //   if (!videoRef.current || !canvasRef.current) return;

  //   const video = videoRef.current;
  //   const canvas = canvasRef.current;

  //   // Set canvas size to match video feed
  //   canvas.width = video.videoWidth;
  //   canvas.height = video.videoHeight;

  //   const context = canvas.getContext("2d");
  //   context.drawImage(video, 0, 0, canvas.width, canvas.height);

  //   try {
  //     // Convert to JPEG with lower quality for faster transfer
  //     const imageData = canvas.toDataURL("image/png");

  //     const response = await fetch("http://127.0.0.1:5000/predict", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ image: imageData }),
  //     });

  //     if (!response.ok) throw new Error("Network response was not ok");

  //     const data = await response.json();
  //     const detectedEmotion = data.emotion?.toLowerCase() || "neutral";

  //     setCurrentEmotion(detectedEmotion);
  //     setEmotionCounts((prev) => {
  //       const updated = {
  //         ...prev,
  //         [detectedEmotion]: prev[detectedEmotion] + 1,
  //       };
  //       emotionCountsRef.current = updated;
  //       return updated;
  //     });
  //   } catch (err) {
  //     console.error("Detection error:", err);
  //     setCurrentEmotion("Detection error");
  //   }
  // }, []);

  // Timer effect
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
      }, 1000); // Adjust interval if needed (e.g., 1500ms)
    }
    return () => clearInterval(interval);
  }, [isDetecting, captureAndSendFrame]);

  const finishDetection = useCallback(async () => {
    setIsDetecting(false);
    const counts = emotionCountsRef.current;
    const maxEmotion = Object.entries(counts).reduce(
      (max, [emotion, count]) => (count > max.count ? { emotion, count } : max),
      { emotion: "neutral", count: 0 }
    ).emotion;

    setStableEmotion(maxEmotion);
    setCurrentEmotion(maxEmotion);

    // Save to backend
    if (user && user._id) {
      try {
        const response = await fetch('http://localhost:3001/api/emotions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            userId: user._id,
            emotion: maxEmotion
          })
        });

        if (!response.ok) {
          console.error('Failed to save emotion');
        }
      } catch (err) {
        console.error('Error saving emotion:', err);
      }
    }
  }, [user]); // Add user to dependencies if using auth context

  const handleStartDetection = useCallback(() => {
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
    setError(null);
  }, []);

  const navigate = useNavigate();

  const redirectToEmotionPage = useCallback(() => {
    if (stableEmotion) {
      navigate(`/${stableEmotion}`);
    }
  }, [stableEmotion, navigate]);

  return (
    <div className="emotion-detection-container">
      <h1 className="app-title">Emotion Detection & Support</h1>

      {error && <div className="error-message">{error}</div>}

      <EmotionVideo
        videoRef={videoRef}
        canvasRef={canvasRef}
        isDetecting={isDetecting}
      />

      {!hasStarted ? (
        <StartButton onClick={handleStartDetection} disabled={!!error} />
      ) : (
        <div className="results-container">
          <h3 className="current-emotion">
            Current Emotion:{" "}
            <span className={`emotion-value ${currentEmotion.toLowerCase()}`}>
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
