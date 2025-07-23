"use client";

import { useState } from "react";

export default function MindfulExercises() {
  const [activeExercise, setActiveExercise] = useState(null);

  const exercises = [
    {
      id: 1,
      title: "Deep Breathing",
      duration: "5-10 minutes",
      icon: "🌬",
      description:
        "Focus on slow, deep breaths. Inhale for 4 counts, hold for 4, exhale for 6. This activates your parasympathetic nervous system and reduces stress.",
      steps: [
        "Sit comfortably with your back straight",
        "Place one hand on chest, one on belly",
        "Breathe in slowly through your nose",
        "Feel your belly rise more than your chest",
        "Exhale slowly through your mouth",
      ],
    },
    {
      id: 2,
      title: "Body Scan Meditation",
      duration: "10-20 minutes",
      icon: "🧘‍♀",
      description:
        "Systematically focus on different parts of your body, releasing tension and increasing awareness of physical sensations.",
      steps: [
        "Lie down comfortably",
        "Start from your toes",
        "Notice sensations without judgment",
        "Move slowly up your body",
        "End at the top of your head",
      ],
    },
    {
      id: 3,
      title: "5-4-3-2-1 Grounding",
      duration: "3-5 minutes",
      icon: "🌟",
      description:
        "Use your senses to ground yourself in the present moment. Perfect for anxiety and overwhelming situations.",
      steps: [
        "5 things you can see",
        "4 things you can touch",
        "3 things you can hear",
        "2 things you can smell",
        "1 thing you can taste",
      ],
    },
    {
      id: 4,
      title: "Loving-Kindness Meditation",
      duration: "10-15 minutes",
      icon: "💝",
      description:
        "Cultivate compassion and love for yourself and others through repeated positive intentions and wishes.",
      steps: [
        "Start with yourself: 'May I be happy'",
        "Extend to loved ones",
        "Include neutral people",
        "Embrace difficult relationships",
        "Expand to all beings",
      ],
    },
    {
      id: 5,
      title: "Mindful Walking",
      duration: "10-30 minutes",
      icon: "🚶‍♀",
      description:
        "Transform ordinary walking into a meditative practice by focusing on each step and your surroundings.",
      steps: [
        "Walk slower than usual",
        "Feel your feet touching the ground",
        "Notice your surroundings",
        "Coordinate with your breathing",
        "Return attention when mind wanders",
      ],
    },
    {
      id: 6,
      title: "Progressive Muscle Relaxation",
      duration: "15-20 minutes",
      icon: "💪",
      description:
        "Systematically tense and release different muscle groups to achieve deep physical and mental relaxation.",
      steps: [
        "Start with your toes",
        "Tense muscles for 5 seconds",
        "Release and notice the relaxation",
        "Move up through your body",
        "End with your face and scalp",
      ],
    },
    {
      id: 7,
      title: "Mindful Eating",
      duration: "15-30 minutes",
      icon: "🍎",
      description:
        "Transform mealtime into a meditation by eating slowly and paying attention to all aspects of the food.",
      steps: [
        "Choose a small portion",
        "Observe colors, textures, smells",
        "Chew slowly and thoroughly",
        "Notice flavors changing",
        "Feel gratitude for the nourishment",
      ],
    },
    {
      id: 8,
      title: "Visualization Meditation",
      duration: "10-20 minutes",
      icon: "🌅",
      description:
        "Use guided imagery to create peaceful mental scenes that promote relaxation and positive emotions.",
      steps: [
        "Find a comfortable position",
        "Close your eyes and breathe deeply",
        "Imagine a peaceful place",
        "Engage all your senses",
        "Stay present in your visualization",
      ],
    },
    {
      id: 9,
      title: "Gratitude Practice",
      duration: "5-10 minutes",
      icon: "🙏",
      description:
        "Cultivate appreciation and positive emotions by focusing on things you're grateful for in your life.",
      steps: [
        "Think of 3-5 things you're grateful for",
        "Feel the emotion, not just think it",
        "Include small everyday things",
        "Appreciate people in your life",
        "Notice how gratitude feels in your body",
      ],
    },
    {
      id: 10,
      title: "Mindful Listening",
      duration: "5-15 minutes",
      icon: "👂",
      description:
        "Develop deeper awareness by focusing entirely on sounds around you without judgment or analysis.",
      steps: [
        "Sit quietly and close your eyes",
        "Notice sounds near and far",
        "Don't label or judge sounds",
        "When mind wanders, return to listening",
        "Include the sound of silence",
      ],
    },
    {
      id: 11,
      title: "Breath Counting",
      duration: "5-15 minutes",
      icon: "🔢",
      description:
        "A simple yet powerful technique that combines breath awareness with gentle mental focus through counting.",
      steps: [
        "Count each exhale from 1 to 10",
        "Start over when you reach 10",
        "If you lose count, start at 1",
        "Don't judge yourself for losing track",
        "Focus only on the counting and breathing",
      ],
    },
    {
      id: 12,
      title: "Present Moment Awareness",
      duration: "5-20 minutes",
      icon: "⏰",
      description:
        "Simply observe whatever arises in your awareness without trying to change or fix anything.",
      steps: [
        "Sit comfortably and breathe naturally",
        "Notice thoughts, feelings, sensations",
        "Observe without getting caught up",
        "Return to breath as an anchor",
        "Accept whatever you experience",
      ],
    },
  ];

  return (
    <div className="mindful-container">
      <div className="header-section">
        <h1 className="main-title">Mindful Exercises</h1>
        <p className="subtitle">
          Discover inner peace through these beautiful mindfulness practices
        </p>
      </div>

      <div className="exercises-grid">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className={`exercise-card ${
              activeExercise === exercise.id ? "active" : ""
            }`}
            onClick={() =>
              setActiveExercise(
                activeExercise === exercise.id ? null : exercise.id
              )
            }
          >
            <div className="card-header">
              <span className="exercise-icon">{exercise.icon}</span>
              <div className="card-title-section">
                <h3 className="exercise-title">{exercise.title}</h3>
                <span className="exercise-duration">{exercise.duration}</span>
              </div>
            </div>

            <p className="exercise-description">{exercise.description}</p>

            {activeExercise === exercise.id && (
              <div className="exercise-steps">
                <h4 className="steps-title">How to practice:</h4>
                <ul className="steps-list">
                  {exercise.steps.map((step, index) => (
                    <li key={index} className="step-item">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="card-footer">
              <span className="expand-text">
                {activeExercise === exercise.id
                  ? "Click to collapse"
                  : "Click to expand"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .mindful-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .header-section {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInDown 0.8s ease-out;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 300;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .exercises-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .exercise-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border: 2px solid transparent;
          backdrop-filter: blur(10px);
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .exercise-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .exercise-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .exercise-card:nth-child(3) {
          animation-delay: 0.3s;
        }
        .exercise-card:nth-child(4) {
          animation-delay: 0.4s;
        }
        .exercise-card:nth-child(5) {
          animation-delay: 0.5s;
        }
        .exercise-card:nth-child(6) {
          animation-delay: 0.6s;
        }
        .exercise-card:nth-child(7) {
          animation-delay: 0.7s;
        }
        .exercise-card:nth-child(8) {
          animation-delay: 0.8s;
        }
        .exercise-card:nth-child(9) {
          animation-delay: 0.9s;
        }
        .exercise-card:nth-child(10) {
          animation-delay: 1s;
        }
        .exercise-card:nth-child(11) {
          animation-delay: 1.1s;
        }
        .exercise-card:nth-child(12) {
          animation-delay: 1.2s;
        }

        .exercise-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .exercise-card.active {
          transform: translateY(-5px);
          box-shadow: 0 25px 70px rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.5);
          background: rgba(255, 255, 255, 0.98);
        }

        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .exercise-icon {
          font-size: 2.5rem;
          margin-right: 1rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .card-title-section {
          flex: 1;
        }

        .exercise-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .exercise-duration {
          font-size: 0.9rem;
          color: #667eea;
          font-weight: 500;
          background: rgba(102, 126, 234, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
        }

        .exercise-description {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .exercise-steps {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 2px solid rgba(102, 126, 234, 0.1);
          animation: slideDown 0.3s ease-out;
        }

        .steps-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .steps-list {
          list-style: none;
          padding: 0;
        }

        .step-item {
          padding: 0.8rem 0;
          padding-left: 2rem;
          position: relative;
          color: #4a5568;
          line-height: 1.5;
          border-bottom: 1px solid rgba(102, 126, 234, 0.05);
        }

        .step-item:last-child {
          border-bottom: none;
        }

        .step-item::before {
          content: "✨";
          position: absolute;
          left: 0;
          top: 0.8rem;
          font-size: 0.9rem;
        }

        .card-footer {
          margin-top: 1.5rem;
          text-align: center;
        }

        .expand-text {
          font-size: 0.85rem;
          color: #667eea;
          font-weight: 500;
          opacity: 0.8;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        @media (max-width: 768px) {
          .mindful-container {
            padding: 1rem;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .exercises-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .exercise-card {
            padding: 1.5rem;
          }

          .exercise-icon {
            font-size: 2rem;
          }

          .exercise-title {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .exercise-card {
            padding: 1.2rem;
          }

          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .exercise-icon {
            font-size: 1.8rem;
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
}
