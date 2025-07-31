"use client";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/emotion-detection");
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        {/* Main Hero Card - Resized and Enhanced */}
        <div style={{ ...styles.card, animation: "fadeIn 1s ease-out" }}>
          <h1 style={styles.heading}>Welcome to Wellness Way </h1>
          <p style={styles.description}>
            Understand your emotions using real-time camera-based detection and
            explore calming strategies that truly help.
          </p>
          <p style={styles.quote}>
            {
              "“Our feelings are our most genuine paths to knowledge.” — Audre Lorde"
            }
          </p>
          <button
            onClick={handleStart}
            style={styles.button}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                styles.button.backgroundColor)
            }
          >
            Start Detection
          </button>
        </div>

        {/* Info Cards Section */}
        <div style={styles.infoSection}>
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.path}
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                opacity: 0,
                animation: `fadeIn 1s ease ${index * 0.2}s both`,
                ...styles.infoCard,
                backgroundImage: `url(${
                  card.image ||
                  "/placeholder.svg?height=240&width=280&text=Card+Image"
                })`,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform =
                  styles.infoCardHover.transform)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = styles.infoCard.transform)
              }
            >
              <div style={styles.infoCardOverlay}>
                <h3 style={styles.infoHeading}>{card.title}</h3>
                <p style={styles.infoSub}>{card.description}</p>
              </div>
            </Link>
          ))}
        </div>

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
    title: "🎥Emotion Tracking",
    description:
      "Harness facial expression detection to uncover how you're really feeling in the moment. This tool uses your camera to analyze your emotions and provide insights into your emotional state",
    image: "/placeholder.svg?height=240&width=280&text=Emotion+Tracking",
    path: "/emotion-detection",
  },
  {
    title: "📊 Insights",
    description:
      "Take a moment to reconnect with yourself. Explore calming breathing techniques, gentle body scans, and grounding practices to help reduce stress, increase focus, and bring balance to your emotions.",
    image: "/placeholder.svg?height=240&width=280&text=Progress+Insights",
    path: "/insights",
  },
  {
    title: "🛠️About us",
    description:
      "Discover how we aim to empower individual to understand and manage their emotions effectively. Learn about our mission. vision and the team behind Wellnesss Way",
    image: "/placeholder.svg?height=240&width=280&text=Smart+Recommendations",
    path: "/about_us", // Added path for redirection
  },
  {
    title: "🤖 Score Calculator",
    description:
      "This tool helps you understand your mental health status and guides you towards better emotional balance. It provides a quick assessment of your emotional well-being.",
    image: "/placeholder.svg?height=240&width=280&text=Calming+Techniques",
    path: "/calculator",
  },
];

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage:
      "url('/placeholder.svg?height=1080&width=1920&text=Abstract+Background')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflowY: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    minHeight: "100vh",
    padding: "60px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#f0f0f0",
  },
  card: {
    backgroundColor: "rgba(25, 25, 35, 0.9)",
    borderRadius: "16px",
    padding: "30px",
    maxWidth: "650px",
    width: "90%",
    textAlign: "center",
    marginBottom: "50px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
    color: "#f0f0f0",
    border: "none",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#ffffff",
    fontWeight: "900",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
  description: {
    fontSize: "1.1rem",
    color: "rgba(255, 255, 255, 0.85)",
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  quote: {
    fontSize: "1rem",
    fontStyle: "italic",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "30px",
    lineHeight: "1.5",
  },
  button: {
    padding: "14px 28px",
    fontSize: "1.1rem",
    backgroundColor: "#a13d9eff",
    color: "#fff",
    border: "none",
    borderRadius: "35px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    fontWeight: "700",
  },
  buttonHover: {
    backgroundColor: "#531f35ff",
    transform: "translateY(-2px)",
  },
  infoSection: {
    display: "flex",
    flexWrap: "nowrap",
    gap: "30px",
    justifyContent: "center",
    maxWidth: "1300px",
    marginBottom: "40px",
    overflowX: "auto",
    paddingBottom: "10px",
  },
  infoCard: {
    borderRadius: "15px",
    padding: "25px",
    minWidth: "280px",
    height: "260px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
    position: "relative",
    backgroundBlendMode: "overlay",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease",
    transform: "scale(1)",
  },
  infoCardHover: {
    transform: "scale(1.05)",
  },
  infoCardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: "25px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  infoHeading: {
    fontSize: "1.4rem",
    marginBottom: "12px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  infoSub: {
    fontSize: "1rem",
    color: "#e0e0e0",
    lineHeight: "1.5",
  },
};
