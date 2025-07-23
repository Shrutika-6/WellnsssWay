import React from "react";

export default function Sad1c1() {
  return (
    <div
      style={{
        backgroundColor: "#fff0f0",
        border: "2px solid red",
        borderRadius: "10px",
        padding: "2rem",
        margin: "2rem auto",
        maxWidth: "600px",
        fontFamily: "Segoe UI, sans-serif",
        color: "#3b3b3b",
        lineHeight: "1.6",
      }}
    >
      <h2 style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
        🚨 STOP! Your safety is the most important thing right now.
      </h2>

      <p>
        It sounds like you're in a lot of pain, and you're having thoughts of
        ending it all.
        <strong>
          {" "}
          Please know that you are not alone, and there is immediate help
          available.
        </strong>
      </p>

      <h3>📞 Please reach out for help now:</h3>
      <ul>
        <li>
          <strong>
            Dial <span style={{ color: "red" }}>112</span>
          </strong>{" "}
          for Emergency Services (Police/Ambulance) in India.
        </li>
        <li>
          <strong>National Tele Mental Health Programme (Tele-MANAS):</strong>{" "}
          Call <span style={{ color: "red" }}>14416</span> (24/7 Mental Health
          Support).
        </li>
        <li>
          <strong>AASRA Suicide Prevention Helpline:</strong> +91-9820466726
          (24/7)
        </li>
        <li>Go to the nearest hospital emergency room immediately.</li>
        <li>Talk to a trusted friend, family member, or colleague.</li>
      </ul>

      <p style={{ fontWeight: "bold", color: "#c40000" }}>
        We urge you to use one of these resources right now. You are valuable,
        and these feelings can be overcome with help.
      </p>
    </div>
  );
}
