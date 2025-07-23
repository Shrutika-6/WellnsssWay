import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/emotion-detection");
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={{ ...styles.card, animation: "fadeIn 1s ease-out" }}>
          <h1 style={styles.heading}> Welcome to Emotion Detection</h1>
          <p style={styles.description}>
            Understand your emotions using real-time camera-based detection
            and explore calming strategies that truly help.
          </p>
          <p style={styles.quote}>
            “Feelings are much like waves, we can't stop them from coming but
            we can choose which one to surf.” - Jonatan Mårtensson
          </p>
          <button onClick={handleStart} style={styles.button}>
            Start Detection 
          </button>
        </div>

        {/* Info Cards Section */}
        <div style={styles.infoSection}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                ...styles.infoCard,
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                animation: `fadeIn 1s ease ${index * 0.2}s both`,
              }}
            >
              <div style={styles.infoCardOverlay}>
                <h3 style={styles.infoHeading}>{card.title}</h3>
                <p style={styles.infoSub}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Keyframes for fade-in animation */}
        <style>
          {`
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </div>
    </div>
  );
}

const cards = [
  {
    title: "🎥 Real-Time Emotion Tracking",
    description:
      "Harness facial expression detection to uncover how you're really feeling in the moment.",
    
  },
  {
    title: "🧘 Calming Techniques",
    description:
      "Personalized breathing, grounding, and mindfulness tools tailored to your current emotional state.",
    
  },
  {
    title: "📊 Progress Insights",
    description:
      "Visualize how your emotions evolve over time and track your emotional well-being journey.",
    
  },
  {
    title: "🤖 Smart Recommendations",
    description:
      "Get emotion-specific coping strategies based on live analysis to help you feel better faster.",
  
  },
];

// 🎨 Styles
const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflowY: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    minHeight: "100vh",
    padding: "60px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
  },
  card: {
    
    backgroundColor: "rgba(32, 27, 27, 0.95)",
    backgroundBlendMode: "overlay",
    overflow: "hidden",
  
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "800px",
    width: "90%",
    textAlign: "center",
    marginBottom: "50px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    color: "#333",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#e8dcdcff",
  },
  description: {
    fontSize: "1.2rem",
    color: "#b6b4b4ff",
    marginBottom: "15px",
  },
  quote: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "#b6b4b4ff",
    marginBottom: "30px",
  },
  button: {
    padding: "14px 28px",
    fontSize: "1.1rem",
    backgroundColor: "#b36c87ff",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "0.3s",
  },
  infoSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    maxWidth: "1200px",
    marginBottom: "40px",
  },
  infoCard: {
    borderRadius: "15px",
    padding: "20px",
    width: "280px",
    height: "240px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    position: "relative",
    backgroundBlendMode: "overlay",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    overflow: "hidden",
    opacity: 0,
  },
  infoCardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  infoHeading: {
    fontSize: "1.3rem",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  infoSub: {
    fontSize: "0.95rem",
  },
};
