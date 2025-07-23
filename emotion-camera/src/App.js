import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import EmotionDetection from "./components/EmotionDetection";
import MindfulExercises from "./components/MindfulExercises";

//SAD
import Sad from "./components/sad";
import Sad1a from "./components/sademo/sad1a";
import Sad1b from "./components/sademo/sad1b";
import Sad1c from "./components/sademo/sad1c";
import Sad1d from "./components/sademo/sad1d";
import Sad1a1 from "./components/sademo/sad1a1";
import Sad1a2 from "./components/sademo/sad1a2";
import Sad1a3 from "./components/sademo/sad1a3";
import Sad1a1a from "./components/sademo/sad1a1a";
import Sad1a1b from "./components/sademo/sad1a1b";
import Sad1a1b1 from "./components/sademo/sad1a1b1";
import Sad1a2a from "./components/sademo/sad1a2a";
import Sad1a2a1 from "./components/sademo/sad1a2a1";
import Sad1a2a2 from "./components/sademo/sad1a2a2";
import Sad1a2a3 from "./components/sademo/sad1a2a3";
import Sad1a2b from "./components/sademo/sad1a2b";
import Sad1a2b1 from "./components/sademo/sad1a2b1";
import Sad1a2c from "./components/sademo/sad1a2c";
import Sad1a2b2a from "./components/sademo/sad1a2b2a";
import Sad1b1 from "./components/sademo/sad1b1";
import Sad1b1a from "./components/sademo/sad1b1a";
import Sad1b1a1 from "./components/sademo/sad1b1a1";
import Sad1b2 from "./components/sademo/sad1b2";
import Sad1b2a from "./components/sademo/sad1b2a";
import Sad1b2b from "./components/sademo/sad1b2b";
import Sad1c1 from "./components/sademo/sad1c1";
import Sad1c2 from "./components/sademo/sad1c2";
import Sad1c3 from "./components/sademo/sad1c3";
import Sad1c4 from "./components/sademo/sad1c4";
import Sad1c2a from "./components/sademo/sad1c2a";
import Sad1c2a1 from "./components/sademo/sad1c2a1";
import Sad1c3a from "./components/sademo/sad1c3a";
import Sad1c3a1 from "./components/sademo/sad1c3a1";
import Sad1c3a1a from "./components/sademo/sad1c3a1a";
import Sad1c4a from "./components/sademo/sad1c4a";
import Sad1c4a1 from "./components/sademo/sad1c4a1";

//HAPPY
import Happy from "./components/happy";
import Happy1 from "./components/happyemo/happy1";
import Happy1a from "./components/happyemo/happy1a";
import Happy1a1 from "./components/happyemo/happy1a1";
import Happy1a2 from "./components/happyemo/happy1a2";
import Happy1b from "./components/happyemo/happy1b";
import Happy1b1 from "./components/happyemo/happy1b1";
import Happy1b2 from "./components/happyemo/happy1b2";
import Happy2 from "./components/happyemo/happy2";
import Happy2a from "./components/happyemo/happy2a";
import Happy2a1 from "./components/happyemo/happy2a1";
import Happy2a2 from "./components/happyemo/happy2a2";
import Happy2b from "./components/happyemo/happy2b";
import Happy2b1 from "./components/happyemo/happy2b1";
import Happy2b2 from "./components/happyemo/happy2b2";
import Happy3 from "./components/happyemo/happy3";
import Happy3a from "./components/happyemo/happy3a";
import Happy3a1 from "./components/happyemo/happy3a1";
import Happy3a2 from "./components/happyemo/happy3a2";
import Happy3b from "./components/happyemo/happy3b";
import Happy3b1 from "./components/happyemo/happy3b1";
import Happy3b2 from "./components/happyemo/happy3b2";

//NEUTRAL
import Neutral from "./components/neutral";
import Neutral1a from "./components/neutralemo/neutral1a";
import Neutral1a1 from "./components/neutralemo/neutral1a1";
import Neutral1a1a from "./components/neutralemo/neutral1a1a";
import Neutral1a1a1 from "./components/neutralemo/neutral1a1a1";
import Neutral1a1b from "./components/neutralemo/neutral1a1b";
import Neutral1a1b1 from "./components/neutralemo/neutral1a1b1";
import Neutral1a1c from "./components/neutralemo/neutral1a1c";
import Neutral1a1c1 from "./components/neutralemo/neutral1a1c1";
import Neutral1a2 from "./components/neutralemo/neutral1a2";
import Neutral1a2a from "./components/neutralemo/neutral1a2a";
import Neutral1a2a1 from "./components/neutralemo/neutral1a2a1";
import Neutral1a2b from "./components/neutralemo/neutral1a2b";
import Neutral1a2b1 from "./components/neutralemo/neutral1a2b1";
import Neutral1a2c from "./components/neutralemo/neutral1a2c";
import Neutral1a2c1 from "./components/neutralemo/neutral1a2c1";
import Neutral1b from "./components/neutralemo/neutral1b";
import Neutral1b1 from "./components/neutralemo/neutral1b1";
import Neutral1b1a from "./components/neutralemo/neutral1b1a";
import Neutral1b2 from "./components/neutralemo/neutral1b2";
import Neutral1b3 from "./components/neutralemo/neutral1b3";
import Neutral1b4 from "./components/neutralemo/neutral1b4";
import Neutral1b5 from "./components/neutralemo/neutral1b5";
import Neutral1c from "./components/neutralemo/neutral1c";
import Neutral1c1 from "./components/neutralemo/neutral1c1";
import Neutral1c1a from "./components/neutralemo/neutral1c1a";
import Neutral1c2 from "./components/neutralemo/neutral1c2";
import Neutral1c2a from "./components/neutralemo/neutral1c2a";
import Neutral1c3 from "./components/neutralemo/neutral1c3";
import Neutral1c3a from "./components/neutralemo/neutral1c3a";
import Neutral1d from "./components/neutralemo/neutral1d";
import Neutral1d1 from "./components/neutralemo/neutral1d1";
import Neutral1d1a from "./components/neutralemo/neutral1d1a";

//ANGRY
import Angry from "./components/angry";
import Angry3 from "./components/angryemo/angry3";
import Angry3a from "./components/angryemo/angry3a";
import Angry1 from "./components/angryemo/angry1";
import Angry1a from "./components/angryemo/angry1a";
import Angry1a1 from "./components/angryemo/angry1a1";
import Angry1a1a from "./components/angryemo/angry1a1a";
import Angry1a1b from "./components/angryemo/angry1a1b";
import Angry1a2 from "./components/angryemo/angry1a2";
import Angry1a3 from "./components/angryemo/angry1a3";
import Angry1a3a from "./components/angryemo/angry1a3a";
import Angry1b from "./components/angryemo/angry1b";
import Angry1b1 from "./components/angryemo/angry1b1";
import Angry1b2 from "./components/angryemo/angry1b2";
import Angry1b2a from "./components/angryemo/angry1b2a";
import Angry1c from "./components/angryemo/angry1c";
import Angry1c1 from "./components/angryemo/angry1c1";
import Angry1c1a from "./components/angryemo/angry1c1a";
import Angry1c2 from "./components/angryemo/angry1c2";
import Angry1c2a from "./components/angryemo/angry1c2a";
import Angry2 from "./components/angryemo/angry2";
import Angry2a from "./components/angryemo/angry2a";
import Angry2a1 from "./components/angryemo/angry2a1";
import Angry2a1a from "./components/angryemo/angry2a1a";
import Angry2a1a1 from "./components/angryemo/angry2a1a1";
import Angry2a1a2 from "./components/angryemo/angry2a1a2";
import Angry2a1b from "./components/angryemo/angry2a1b";
import Angry2a1b1 from "./components/angryemo/angry2a1b1";
import Angry2a1b2 from "./components/angryemo/angry2a1b2";
import Angry2a1c from "./components/angryemo/angry2a1c";
import Angry2a1c1 from "./components/angryemo/angry2a1c1";
import Angry2a1c2 from "./components/angryemo/angry2a1c2";
import Angry2a2 from "./components/angryemo/angry2a2";
import Angry2a2a from "./components/angryemo/angry2a2a";
import Angry2a2a1 from "./components/angryemo/angry2a2a1";
import Angry2a2a2 from "./components/angryemo/angry2a2a2";
import Angry2a2b from "./components/angryemo/angry2a2b";
import Angry2a2b1 from "./components/angryemo/angry2a2b1";
import Angry2a2b2 from "./components/angryemo/angry2a2b2";
import Angry2a2c from "./components/angryemo/angry2a2c";
import Angry2a3 from "./components/angryemo/angry2a3";
import Angry2a3a from "./components/angryemo/angry2a3a";
import Angry2a3a1 from "./components/angryemo/angry2a3a1";
import Angry2a3a2 from "./components/angryemo/angry2a3a2";
import Angry2a3b from "./components/angryemo/angry2a3b";
import Angry2a3b1 from "./components/angryemo/angry2a3b1";
import Angry2a3b2 from "./components/angryemo/angry2a3b2";
import Angry2a4 from "./components/angryemo/angry2a4";
import Angry2a4a from "./components/angryemo/angry2a4a";
import Angry2a4a1 from "./components/angryemo/angry2a4a1";
import Angry2a4a2 from "./components/angryemo/angry2a4a2";
import Angry2a4a3 from "./components/angryemo/angry2a4a3";
import Angry2a4b from "./components/angryemo/angry2a4b";
import Angry2a4b1 from "./components/angryemo/angry2a4b1";
import Angry2a4b2 from "./components/angryemo/angry2a4b2";
import Angry2b from "./components/angryemo/angry2b";
import Angry2b1 from "./components/angryemo/angry2b1";
import Angry2b1a from "./components/angryemo/angry2b1a";
import Angry2b1a1 from "./components/angryemo/angry2b1a1";
import Angry2b1a2 from "./components/angryemo/angry2b1a2";
import Angry2b1b from "./components/angryemo/angry2b1b";
import Angry2b1b1 from "./components/angryemo/angry2b1b1";
import Angry2b1b2 from "./components/angryemo/angry2b1b2";
import Angry2b2 from "./components/angryemo/angry2b2";
import Angry2b2a from "./components/angryemo/angry2b2a";
import Angry2b2a1 from "./components/angryemo/angry2b2a1";
import Angry2b2a2 from "./components/angryemo/angry2b2a2";
import Angry2b2b from "./components/angryemo/angry2b2b";
import Angry2b2b1 from "./components/angryemo/angry2b2b1";
import Angry2b2b2 from "./components/angryemo/angry2b2b2";
import Angry2b3 from "./components/angryemo/angry2b3";
import Angry2b3a from "./components/angryemo/angry2b3a";
import Angry2b3a1 from "./components/angryemo/angry2b3a1";
import Angry2b3a2 from "./components/angryemo/angry2b3a2";
import Angry2b3b from "./components/angryemo/angry2b3b";
import Angry2b3b1 from "./components/angryemo/angry2b3b1";
import Angry2b3b2 from "./components/angryemo/angry2b3b2";
import Angry2b3b3 from "./components/angryemo/angry2b3b3";
import Angry2b3c from "./components/angryemo/angry2b3c";
import Angry2b3c1 from "./components/angryemo/angry2b3c1";
import Angry2b3c2 from "./components/angryemo/angry2b3c2";
import Angry2b4 from "./components/angryemo/angry2b4";
import Angry2b4a from "./components/angryemo/angry2b4a";
import Angry2b4a1 from "./components/angryemo/angry2b4a1";
import Angry2b4a2 from "./components/angryemo/angry2b4a2";
import Angry2b4a3 from "./components/angryemo/angry2b4a3";
import Angry2b4b from "./components/angryemo/angry2b4b";
import Angry2b4b1 from "./components/angryemo/angry2b4b1";
import Angry2b4b2 from "./components/angryemo/angry2b4b2";

import Fear from "./components/fear";
import Fear1a from "./components/fearemo/fear1a";
import Fear1a1 from "./components/fearemo/fear1a1";
import Fear1a1a from "./components/fearemo/fear1a1a";
import Fear1a1a1 from "./components/fearemo/fear1a1a1";
import Fear1a1a2 from "./components/fearemo/fear1a1a2";
import Fear1a1b from "./components/fearemo/fear1a1b";
import Fear1a1b1 from "./components/fearemo/fear1a1b1";
import Fear1a2 from "./components/fearemo/fear1a2";
import Fear1a2a from "./components/fearemo/fear1a2a";
import Fear1a2b from "./components/fearemo/fear1a2b";
import Fear1b from "./components/fearemo/fear1b";
import Fear1b1 from "./components/fearemo/fear1b1";
import Fear1b1a from "./components/fearemo/fear1b1a";
import Fear1b1a1 from "./components/fearemo/fear1b1a1";
import Fear1b1b from "./components/fearemo/fear1b1b";
import Fear1b1b1 from "./components/fearemo/fear1b1b1";
import Fear1b1b2 from "./components/fearemo/fear1b1b2";
import Fear1b2 from "./components/fearemo/fear1b2";
import Fear1b2a from "./components/fearemo/fear1b2a";
import Fear1b2a1 from "./components/fearemo/fear1b2a1";
import Fear1b2b from "./components/fearemo/fear1b2b";
import Fear1b2b1 from "./components/fearemo/fear1b2b1";
import Fear1c from "./components/fearemo/fear1c";
import Fear1c1 from "./components/fearemo/fear1c1";
import Fear1c1a from "./components/fearemo/fear1c1a";
import Fear1c1a1 from "./components/fearemo/fear1c1a1";
import Fear1c1b from "./components/fearemo/fear1c1b";
import Fear1c1b1 from "./components/fearemo/fear1c1b1";
import Fear1c2 from "./components/fearemo/fear1c2";
import Fear1c2a from "./components/fearemo/fear1c2a";
import Fear1c2b from "./components/fearemo/fear1c2b";
import Fear1c3 from "./components/fearemo/fear1c3";
import Fear1c3a from "./components/fearemo/fear1c3a";
import Fear1c3b from "./components/fearemo/fear1c3b";

import Surprise from "./components/surprise";
import Surprise1a from "./components/surpriseemo/surprise1a";
import Surprise1a1 from "./components/surpriseemo/surprise1a1";
import Surprise1a1a from "./components/surpriseemo/surprise1a1a";
import Surprise1a1a1 from "./components/surpriseemo/surprise1a1a1";
import Surprise1a1a2 from "./components/surpriseemo/surprise1a1a2";
import Surprise1a1a3 from "./components/surpriseemo/surprise1a1a3";
import Surprise1a1b from "./components/surpriseemo/surprise1a1b";
import Surprise1a1c from "./components/surpriseemo/surprise1a1c";
import Surprise1a2 from "./components/surpriseemo/surprise1a2";
import Surprise1a2a from "./components/surpriseemo/surprise1a2a";
import Surprise1a2a1 from "./components/surpriseemo/surprise1a2a1";
import Surprise1a2a2 from "./components/surpriseemo/surprise1a2a2";
import Surprise1a2a3 from "./components/surpriseemo/surprise1a2a3";
import Surprise1a2b from "./components/surpriseemo/surprise1a2b";
import Surprise1a2c from "./components/surpriseemo/surprise1a2c";
import Surprise1a3 from "./components/surpriseemo/surprise1a3";
import Surprise1a3a from "./components/surpriseemo/surprise1a3a";
import Surprise1a3b from "./components/surpriseemo/surprise1a3b";
import Surprise1a3c from "./components/surpriseemo/surprise1a3c";
import Surprise1b from "./components/surpriseemo/surprise1b";
import Surprise1b1 from "./components/surpriseemo/surprise1b1";
import Surprise1b1a from "./components/surpriseemo/surprise1b1a";
import Surprise1b1a1 from "./components/surpriseemo/surprise1b1a1";
import Surprise1b1b from "./components/surpriseemo/surprise1b1b";

import Surprise1b1c from "./components/surpriseemo/surprise1b1c";
import Surprise1b2 from "./components/surpriseemo/surprise1b2";
import Surprise1b2a from "./components/surpriseemo/surprise1b2a";
import Surprise1b2a1 from "./components/surpriseemo/surprise1b2a1";
import Surprise1b2b from "./components/surpriseemo/surprise1b2b";
import Surprise1b2c from "./components/surpriseemo/surprise1b2c";
import Surprise1b3 from "./components/surpriseemo/surprise1b3";
import Surprise1b3a from "./components/surpriseemo/surprise1b3a";
import Surprise1b3b from "./components/surpriseemo/surprise1b3b";
import Surprise1b3b1 from "./components/surpriseemo/surprise1b3b1";
import Surprise1b3c from "./components/surpriseemo/surprise1b3c";
import Surprise1b3d from "./components/surpriseemo/surprise1b3d";
import Surprise1b3e from "./components/surpriseemo/surprise1b3e";
import Surprise1b4 from "./components/surpriseemo/surprise1b4";
import Surprise1b4a from "./components/surpriseemo/surprise1b4a";
import Surprise1b4a1 from "./components/surpriseemo/surprise1b4a1";
import Surprise1b4b from "./components/surpriseemo/surprise1b4b";
import Surprise1b4c from "./components/surpriseemo/surprise1b4c";
import Surprise1b4d from "./components/surpriseemo/surprise1b4d";
import Surprise1b4d1 from "./components/surpriseemo/surprise1b4d1";
import Surprise1b4e from "./components/surpriseemo/surprise1b4e";
import Surprise1b5 from "./components/surpriseemo/surprise1b5";
import Surprise1b5a from "./components/surpriseemo/surprise1b5a";
import Surprise1b5b from "./components/surpriseemo/surprise1b5b";
import Surprise1b5c from "./components/surpriseemo/surprise1b5c";
import Surprise1b5d from "./components/surpriseemo/surprise1b5d";
import Surprise1b5e from "./components/surpriseemo/surprise1b5e";
import Surprise1c from "./components/surpriseemo/surprise1c";
import Surprise1c1 from "./components/surpriseemo/surprise1c1";
import Surprise1c1a from "./components/surpriseemo/surprise1c1a";
import Surprise1c1a1 from "./components/surpriseemo/surprise1c1a1";
import Surprise1c1b from "./components/surpriseemo/surprise1c1b";
import Surprise1c1c from "./components/surpriseemo/surprise1c1c";
import Surprise1c1d from "./components/surpriseemo/surprise1c1d";
import Surprise1c1e from "./components/surpriseemo/surprise1c1e";

import Disgust from "./components/disgust";
import Disgust1a from "./components/disgustemo/disgust1a";
import Disgust1a1 from "./components/disgustemo/disgust1a1";
import Disgust1a1a from "./components/disgustemo/disgust1a1a";
import Disgust1a1a1 from "./components/disgustemo/disgust1a1a1";
import Disgust1a1a2 from "./components/disgustemo/disgust1a1a2";
import Disgust1a1b from "./components/disgustemo/disgust1a1b";
import Disgust1a1b1 from "./components/disgustemo/disgust1a1b1";
import Disgust1a1b2 from "./components/disgustemo/disgust1a1b2";
import Disgust1a2 from "./components/disgustemo/disgust1a2";
import Disgust1a2a from "./components/disgustemo/disgust1a2a";
import Disgust1a2a1 from "./components/disgustemo/disgust1a2a1";
import Disgust1a2a2 from "./components/disgustemo/disgust1a2a2";
import Disgust1a2b from "./components/disgustemo/disgust1a2b";
import Disgust1a2b1 from "./components/disgustemo/disgust1a2b1";
import Disgust1a2b2 from "./components/disgustemo/disgust1a2b2";
import Disgust1a3 from "./components/disgustemo/disgust1a3";
import Disgust1a3a from "./components/disgustemo/disgust1a3a";
import Disgust1a3a1 from "./components/disgustemo/disgust1a3a1";
import Disgust1a3a2 from "./components/disgustemo/disgust1a3a2";
import Disgust1a3b from "./components/disgustemo/disgust1a3b";
import Disgust1a3b1 from "./components/disgustemo/disgust1a3b1";
import Disgust1a3b2 from "./components/disgustemo/disgust1a3b2";
import Disgust1b from "./components/disgustemo/disgust1b";
import Disgust1b1 from "./components/disgustemo/disgust1b1";
import Disgust1b1a from "./components/disgustemo/disgust1b1a";
import Disgust1b1b from "./components/disgustemo/disgust1b1b";
import Disgust1b2 from "./components/disgustemo/disgust1b2";
import Disgust1b2a from "./components/disgustemo/disgust1b2a";
import Disgust1b2b from "./components/disgustemo/disgust1b2b";
import Disgust1c from "./components/disgustemo/disgust1c";
import Disgust1c1 from "./components/disgustemo/disgust1c1";
import Disgust1c1a from "./components/disgustemo/disgust1c1a";
import Disgust1c1b from "./components/disgustemo/disgust1c1b";
import Disgust1c2 from "./components/disgustemo/disgust1c2";
import Disgust1c2a from "./components/disgustemo/disgust1c2a";
import Disgust1c2a1 from "./components/disgustemo/disgust1c2a1";
import Disgust1c2b from "./components/disgustemo/disgust1c2b";
import Disgust1c3 from "./components/disgustemo/disgust1c3";
import Disgust1c3a from "./components/disgustemo/disgust1c3a";
import Disgust1c3b from "./components/disgustemo/disgust1c3b";

function TopRightButton() {
  const location = useLocation();
  const isOnInsights = location.pathname === "/insights";

  return (
    <Link to={isOnInsights ? "/" : "/insights"} className="top-right-button">
      {isOnInsights ? "New Session" : "Insights"}
    </Link>
  );
}

function App() {
  return (
    <div className="app-container">
      <TopRightButton />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/emotion-detection" element={<EmotionDetection />} />
        <Route path="/insights" element={<MindfulExercises />} />
        <Route path="/sad" element={<Sad />} />
        <Route path="/sad1a" element={<Sad1a />} />
        <Route path="/sad1b" element={<Sad1b />} />
        <Route path="/sad1c" element={<Sad1c />} />
        <Route path="/sad1d" element={<Sad1d />} />
        <Route path="/sad1a1" element={<Sad1a1 />} />
        <Route path="/sad1a2" element={<Sad1a2 />} />
        <Route path="/sad1a3" element={<Sad1a3 />} />
        <Route path="/sad1a1a" element={<Sad1a1a />} />
        <Route path="/sad1a1b" element={<Sad1a1b />} />
        <Route path="/sad1a1b1" element={<Sad1a1b1 />} />
        <Route path="/sad1a2a" element={<Sad1a2a />} />
        <Route path="/sad1a2a1" element={<Sad1a2a1 />} />
        <Route path="/sad1a2a2" element={<Sad1a2a2 />} />
        <Route path="/sad1a2a3" element={<Sad1a2a3 />} />
        <Route path="/sad1a2b" element={<Sad1a2b />} />
        <Route path="/sad1a2b1" element={<Sad1a2b1 />} />
        <Route path="/sad1a2c" element={<Sad1a2c />} />
        <Route path="/sad1a2b2a" element={<Sad1a2b2a />} />
        <Route path="/sad1b1" element={<Sad1b1 />} />
        <Route path="/sad1b1a" element={<Sad1b1a />} />
        <Route path="/sad1b2" element={<Sad1b2 />} />
        <Route path="/sad1b2a" element={<Sad1b2a />} />
        <Route path="/sad1b1a1" element={<Sad1b1a1 />} />
        <Route path="/sad1b2b" element={<Sad1b2b />} />
        <Route path="/sad1c1" element={<Sad1c1 />} />
        <Route path="/sad1c2" element={<Sad1c2 />} />
        <Route path="/sad1c2a" element={<Sad1c2a />} />
        <Route path="/sad1c2a1" element={<Sad1c2a1 />} />
        <Route path="/sad1c3" element={<Sad1c3 />} />
        <Route path="/sad1c3a" element={<Sad1c3a />} />
        <Route path="/sad1c3a1" element={<Sad1c3a1 />} />
        <Route path="/sad1c3a1a" element={<Sad1c3a1a />} />
        <Route path="/sad1c4" element={<Sad1c4 />} />
        <Route path="/sad1c4a" element={<Sad1c4a />} />
        <Route path="/sad1c4a1" element={<Sad1c4a1 />} />

        <Route path="/happy" element={<Happy />} />
        <Route path="/happy1" element={<Happy1 />} />
        <Route path="/happy1a" element={<Happy1a />} />
        <Route path="/happy1a1" element={<Happy1a1 />} />
        <Route path="/happy1a2" element={<Happy1a2 />} />
        <Route path="/happy1b" element={<Happy1b />} />
        <Route path="/happy1b1" element={<Happy1b1 />} />
        <Route path="/happy1b2" element={<Happy1b2 />} />
        <Route path="/happy2" element={<Happy2 />} />
        <Route path="/happy2a" element={<Happy2a />} />
        <Route path="/happy2a1" element={<Happy2a1 />} />
        <Route path="/happy2a2" element={<Happy2a2 />} />
        <Route path="/happy2b" element={<Happy2b />} />
        <Route path="/happy2b1" element={<Happy2b1 />} />
        <Route path="/happy2b2" element={<Happy2b2 />} />
        <Route path="/happy3" element={<Happy3 />} />
        <Route path="/happy3a" element={<Happy3a />} />
        <Route path="/happy3a1" element={<Happy3a1 />} />
        <Route path="/happy3a2" element={<Happy3a2 />} />
        <Route path="/happy3b" element={<Happy3b />} />
        <Route path="/happy3b1" element={<Happy3b1 />} />
        <Route path="/happy3b2" element={<Happy3b2 />} />

        <Route path="/neutral" element={<Neutral />} />
        <Route path="/neutral1a" element={<Neutral1a />} />
        <Route path="/neutral1a1" element={<Neutral1a1 />} />
        <Route path="/neutral1a1a" element={<Neutral1a1a />} />
        <Route path="/neutral1a1a1" element={<Neutral1a1a1 />} />
        <Route path="/neutral1a1b" element={<Neutral1a1b />} />
        <Route path="/neutral1a1b1" element={<Neutral1a1b1 />} />
        <Route path="/neutral1a1c" element={<Neutral1a1c />} />
        <Route path="/neutral1a1c" element={<Neutral1a1c />} />
        <Route path="/neutral1a1c1" element={<Neutral1a1c1 />} />
        <Route path="/neutral1a2" element={<Neutral1a2 />} />
        <Route path="/neutral1a2a" element={<Neutral1a2a />} />
        <Route path="/neutral1a2a1" element={<Neutral1a2a1 />} />
        <Route path="/neutral1a2b" element={<Neutral1a2b />} />
        <Route path="/neutral1a2b1" element={<Neutral1a2b1 />} />
        <Route path="/neutral1a2c" element={<Neutral1a2c />} />
        <Route path="/neutral1a2c1" element={<Neutral1a2c1 />} />
        <Route path="/neutral1b" element={<Neutral1b />} />
        <Route path="/neutral1b1" element={<Neutral1b1 />} />
        <Route path="/neutral1b1a" element={<Neutral1b1a />} />
        <Route path="/neutral1b2" element={<Neutral1b2 />} />
        <Route path="/neutral1b3" element={<Neutral1b3 />} />
        <Route path="/neutral1b4" element={<Neutral1b4 />} />
        <Route path="/neutral1b5" element={<Neutral1b5 />} />
        <Route path="/neutral1c" element={<Neutral1c />} />
        <Route path="/neutral1c1" element={<Neutral1c1 />} />
        <Route path="/neutral1c1a" element={<Neutral1c1a />} />
        <Route path="/neutral1c2" element={<Neutral1c2 />} />
        <Route path="/neutral1c2a" element={<Neutral1c2a />} />
        <Route path="/neutral1c3" element={<Neutral1c3 />} />
        <Route path="/neutral1c3a" element={<Neutral1c3a />} />
        <Route path="/neutral1d" element={<Neutral1d />} />
        <Route path="/neutral1d1" element={<Neutral1d1 />} />
        <Route path="/neutral1d1a" element={<Neutral1d1a />} />

        <Route path="/angry" element={<Angry />} />
        <Route path="/angry3" element={<Angry3 />} />
        <Route path="/angry3a" element={<Angry3a />} />
        <Route path="/angry1" element={<Angry1 />} />
        <Route path="/angry1a" element={<Angry1a />} />
        <Route path="/angry1a1" element={<Angry1a1 />} />
        <Route path="/angry1a1a" element={<Angry1a1a />} />
        <Route path="/angry1a1b" element={<Angry1a1b />} />
        <Route path="/angry1a2" element={<Angry1a2 />} />
        <Route path="/angry1a3" element={<Angry1a3 />} />
        <Route path="/angry1a3a" element={<Angry1a3a />} />
        <Route path="/angry1b" element={<Angry1b />} />
        <Route path="/angry1b1" element={<Angry1b1 />} />
        <Route path="/angry1b2" element={<Angry1b2 />} />
        <Route path="/angry1b2a" element={<Angry1b2a />} />
        <Route path="/angry1c" element={<Angry1c />} />
        <Route path="/angry1c1" element={<Angry1c1 />} />
        <Route path="/angry1c1a" element={<Angry1c1a />} />
        <Route path="/angry1c2" element={<Angry1c2 />} />
        <Route path="/angry1c2a" element={<Angry1c2a />} />
        <Route path="/angry2" element={<Angry2 />} />
        <Route path="/angry2a" element={<Angry2a />} />
        <Route path="/angry2a1" element={<Angry2a1 />} />
        <Route path="/angry2a1a" element={<Angry2a1a />} />
        <Route path="/angry2a1a1" element={<Angry2a1a1 />} />
        <Route path="/angry2a1a2" element={<Angry2a1a2 />} />
        <Route path="/angry2a1b" element={<Angry2a1b />} />
        <Route path="/angry2a1b1" element={<Angry2a1b1 />} />
        <Route path="/angry2a1b2" element={<Angry2a1b2 />} />
        <Route path="/angry2a1c" element={<Angry2a1c />} />
        <Route path="/angry2a1c1" element={<Angry2a1c1 />} />
        <Route path="/angry2a1c2" element={<Angry2a1c2 />} />
        <Route path="/angry2a2" element={<Angry2a2 />} />
        <Route path="/angry2a2a" element={<Angry2a2a />} />
        <Route path="/angry2a2a1" element={<Angry2a2a1 />} />
        <Route path="/angry2a2a2" element={<Angry2a2a2 />} />
        <Route path="/angry2a2b" element={<Angry2a2b />} />
        <Route path="/angry2a2b1" element={<Angry2a2b1 />} />
        <Route path="/angry2a2b2" element={<Angry2a2b2 />} />
        <Route path="/angry2a2c" element={<Angry2a2c />} />
        <Route path="/angry2a3" element={<Angry2a3 />} />
        <Route path="/angry2a3a" element={<Angry2a3a />} />
        <Route path="/angry2a3a1" element={<Angry2a3a1 />} />
        <Route path="/angry2a3a2" element={<Angry2a3a2 />} />
        <Route path="/angry2a3b" element={<Angry2a3b />} />
        <Route path="/angry2a3b1" element={<Angry2a3b1 />} />
        <Route path="/angry2a3b2" element={<Angry2a3b2 />} />
        <Route path="/angry2a4" element={<Angry2a4 />} />
        <Route path="/angry2a4a" element={<Angry2a4a />} />
        <Route path="/angry2a4a1" element={<Angry2a4a1 />} />
        <Route path="/angry2a4a2" element={<Angry2a4a2 />} />
        <Route path="/angry2a4a3" element={<Angry2a4a3 />} />
        <Route path="/angry2a4b" element={<Angry2a4b />} />
        <Route path="/angry2a4b1" element={<Angry2a4b1 />} />
        <Route path="/angry2a4b2" element={<Angry2a4b2 />} />
        <Route path="/angry2b" element={<Angry2b />} />
        <Route path="/angry2b1" element={<Angry2b1 />} />
        <Route path="/angry2b1a" element={<Angry2b1a />} />
        <Route path="/angry2b1a1" element={<Angry2b1a1 />} />
        <Route path="/angry2b1a2" element={<Angry2b1a2 />} />
        <Route path="/angry2b1b" element={<Angry2b1b />} />
        <Route path="/angry2b1b1" element={<Angry2b1b1 />} />
        <Route path="/angry2b1b2" element={<Angry2b1b2 />} />
        <Route path="/angry2b2" element={<Angry2b2 />} />
        <Route path="/angry2b2a" element={<Angry2b2a />} />
        <Route path="/angry2b2a1" element={<Angry2b2a1 />} />
        <Route path="/angry2b2a2" element={<Angry2b2a2 />} />
        <Route path="/angry2b2b" element={<Angry2b2b />} />
        <Route path="/angry2b2b1" element={<Angry2b2b1 />} />
        <Route path="/angry2b2b2" element={<Angry2b2b2 />} />
        <Route path="/angry2b3" element={<Angry2b3 />} />
        <Route path="/angry2b3a" element={<Angry2b3a />} />
        <Route path="/angry2b3a1" element={<Angry2b3a1 />} />
        <Route path="/angry2b3a2" element={<Angry2b3a2 />} />
        <Route path="/angry2b3b" element={<Angry2b3b />} />
        <Route path="/angry2b3b1" element={<Angry2b3b1 />} />
        <Route path="/angry2b3b2" element={<Angry2b3b2 />} />
        <Route path="/angry2b3b3" element={<Angry2b3b3 />} />
        <Route path="/angry2b3c" element={<Angry2b3c />} />
        <Route path="/angry2b3c1" element={<Angry2b3c1 />} />
        <Route path="/angry2b3c2" element={<Angry2b3c2 />} />
        <Route path="/angry2b4" element={<Angry2b4 />} />
        <Route path="/angry2b4a" element={<Angry2b4a />} />
        <Route path="/angry2b4a1" element={<Angry2b4a1 />} />
        <Route path="/angry2b4a2" element={<Angry2b4a2 />} />
        <Route path="/angry2b4a3" element={<Angry2b4a3 />} />
        <Route path="/angry2b4b" element={<Angry2b4b />} />
        <Route path="/angry2b4b1" element={<Angry2b4b1 />} />
        <Route path="/angry2b4b2" element={<Angry2b4b2 />} />

        <Route path="/fear" element={<Fear />} />
        <Route path="/fear1a" element={<Fear1a />} />
        <Route path="/fear1a1" element={<Fear1a1 />} />
        <Route path="/fear1a1a" element={<Fear1a1a />} />
        <Route path="/fear1a1a1" element={<Fear1a1a1 />} />
        <Route path="/fear1a1a2" element={<Fear1a1a2 />} />
        <Route path="/fear1a1b" element={<Fear1a1b />} />
        <Route path="/fear1a1b1" element={<Fear1a1b1 />} />
        <Route path="/fear1a2" element={<Fear1a2 />} />
        <Route path="/fear1a2a" element={<Fear1a2a />} />
        <Route path="/fear1a2b" element={<Fear1a2b />} />
        <Route path="/fear1b" element={<Fear1b />} />
        <Route path="/fear1b1" element={<Fear1b1 />} />
        <Route path="/fear1b1a" element={<Fear1b1a />} />
        <Route path="/fear1b1a1" element={<Fear1b1a1 />} />
        <Route path="/fear1b1b" element={<Fear1b1b />} />
        <Route path="/fear1b1b1" element={<Fear1b1b1 />} />
        <Route path="/fear1b1b2" element={<Fear1b1b2 />} />
        <Route path="/fear1b2" element={<Fear1b2 />} />
        <Route path="/fear1b2a" element={<Fear1b2a />} />
        <Route path="/fear1b2a1" element={<Fear1b2a1 />} />
        <Route path="/fear1b2b" element={<Fear1b2b />} />
        <Route path="/fear1b2b1" element={<Fear1b2b1 />} />
        <Route path="/fear1c" element={<Fear1c />} />
        <Route path="/fear1c1" element={<Fear1c1 />} />
        <Route path="/fear1c1a" element={<Fear1c1a />} />
        <Route path="/fear1c1a1" element={<Fear1c1a1 />} />
        <Route path="/fear1c1b" element={<Fear1c1b />} />
        <Route path="/fear1c1b1" element={<Fear1c1b1 />} />
        <Route path="/fear1c2" element={<Fear1c2 />} />
        <Route path="/fear1c2a" element={<Fear1c2a />} />
        <Route path="/fear1c2b" element={<Fear1c2b />} />
        <Route path="/fear1c3" element={<Fear1c3 />} />
        <Route path="/fear1c3a" element={<Fear1c3a />} />
        <Route path="/fear1c3b" element={<Fear1c3b />} />

        <Route path="/surprise" element={<Surprise />} />
        <Route path="/surprise1a" element={<Surprise1a />} />
        <Route path="/surprise1a1" element={<Surprise1a1 />} />
        <Route path="/surprise1a1a" element={<Surprise1a1a />} />
        <Route path="/surprise1a1a1" element={<Surprise1a1a1 />} />
        <Route path="/surprise1a1a2" element={<Surprise1a1a2 />} />
        <Route path="/surprise1a1a3" element={<Surprise1a1a3 />} />
        <Route path="/surprise1a1b" element={<Surprise1a1b />} />
        <Route path="/surprise1a1c" element={<Surprise1a1c />} />
        <Route path="/surprise1a2" element={<Surprise1a2 />} />
        <Route path="/surprise1a2a" element={<Surprise1a2a />} />
        <Route path="/surprise1a2a1" element={<Surprise1a2a1 />} />
        <Route path="/surprise1a2a2" element={<Surprise1a2a2 />} />
        <Route path="/surprise1a2a3" element={<Surprise1a2a3 />} />
        <Route path="/surprise1a2b" element={<Surprise1a2b />} />
        <Route path="/surprise1a2c" element={<Surprise1a2c />} />
        <Route path="/surprise1a3" element={<Surprise1a3 />} />
        <Route path="/surprise1a3a" element={<Surprise1a3a />} />
        <Route path="/surprise1a3b" element={<Surprise1a3b />} />
        <Route path="/surprise1a3c" element={<Surprise1a3c />} />
        <Route path="/surprise1b" element={<Surprise1b />} />
        <Route path="/surprise1b1" element={<Surprise1b1 />} />
        <Route path="/surprise1b1a" element={<Surprise1b1a />} />
        <Route path="/surprise1b1a1" element={<Surprise1b1a1 />} />
        <Route path="/surprise1b1b" element={<Surprise1b1b />} />
        <Route path="/surprise1b1c" element={<Surprise1b1c />} />
        <Route path="/surprise1b2" element={<Surprise1b2 />} />
        <Route path="/surprise1b2a" element={<Surprise1b2a />} />
        <Route path="/surprise1b2a1" element={<Surprise1b2a1 />} />
        <Route path="/surprise1b2b" element={<Surprise1b2b />} />
        <Route path="/surprise1b2c" element={<Surprise1b2c />} />
        <Route path="/surprise1b3" element={<Surprise1b3 />} />
        <Route path="/surprise1b3a" element={<Surprise1b3a />} />
        <Route path="/surprise1b3b" element={<Surprise1b3b />} />
        <Route path="/surprise1b3b1" element={<Surprise1b3b1 />} />
        <Route path="/surprise1b3c" element={<Surprise1b3c />} />
        <Route path="/surprise1b3d" element={<Surprise1b3d />} />
        <Route path="/surprise1b3e" element={<Surprise1b3e />} />
        <Route path="/surprise1b4" element={<Surprise1b4 />} />
        <Route path="/surprise1b4a" element={<Surprise1b4a />} />
        <Route path="/surprise1b4a1" element={<Surprise1b4a1 />} />
        <Route path="/surprise1b4b" element={<Surprise1b4b />} />
        <Route path="/surprise1b4c" element={<Surprise1b4c />} />
        <Route path="/surprise1b4d" element={<Surprise1b4d />} />
        <Route path="/surprise1b4d1" element={<Surprise1b4d1 />} />
        <Route path="/surprise1b4e" element={<Surprise1b4e />} />
        <Route path="/surprise1b5" element={<Surprise1b5 />} />
        <Route path="/surprise1b5a" element={<Surprise1b5a />} />
        <Route path="/surprise1b5b" element={<Surprise1b5b />} />
        <Route path="/surprise1b5c" element={<Surprise1b5c />} />
        <Route path="/surprise1b5d" element={<Surprise1b5d />} />
        <Route path="/surprise1b5e" element={<Surprise1b5e />} />
        <Route path="/surprise1c" element={<Surprise1c />} />
        <Route path="/surprise1c1" element={<Surprise1c1 />} />
        <Route path="/surprise1c1a" element={<Surprise1c1a />} />
        <Route path="/surprise1c1a1" element={<Surprise1c1a1 />} />
        <Route path="/surprise1c1b" element={<Surprise1c1b />} />
        <Route path="/surprise1c1c" element={<Surprise1c1c />} />
        <Route path="/surprise1c1d" element={<Surprise1c1d />} />
        <Route path="/surprise1c1e" element={<Surprise1c1e />} />

        <Route path="/disgust" element={<Disgust />} />

        <Route path="/disgust1a" element={<Disgust1a />} />
        <Route path="/disgust1a1" element={<Disgust1a1 />} />
        <Route path="/disgust1a1a" element={<Disgust1a1a />} />
        <Route path="/disgust1a1a1" element={<Disgust1a1a1 />} />
        <Route path="/disgust1a1a2" element={<Disgust1a1a2 />} />
        <Route path="/disgust1a1b" element={<Disgust1a1b />} />
        <Route path="/disgust1a1b1" element={<Disgust1a1b1 />} />
        <Route path="/disgust1a1b2" element={<Disgust1a1b2 />} />
        <Route path="/disgust1a2" element={<Disgust1a2 />} />
        <Route path="/disgust1a2a" element={<Disgust1a2a />} />
        <Route path="/disgust1a2a1" element={<Disgust1a2a1 />} />
        <Route path="/disgust1a2a2" element={<Disgust1a2a2 />} />
        <Route path="/disgust1a2b" element={<Disgust1a2b />} />
        <Route path="/disgust1a2b1" element={<Disgust1a2b1 />} />
        <Route path="/disgust1a2b2" element={<Disgust1a2b2 />} />
        <Route path="/disgust1a3" element={<Disgust1a3 />} />
        <Route path="/disgust1a3a" element={<Disgust1a3a />} />
        <Route path="/disgust1a3a1" element={<Disgust1a3a1 />} />
        <Route path="/disgust1a3a2" element={<Disgust1a3a2 />} />
        <Route path="/disgust1a3b" element={<Disgust1a3b />} />
        <Route path="/disgust1a3b1" element={<Disgust1a3b1 />} />
        <Route path="/disgust1a3b2" element={<Disgust1a3b2 />} />
        <Route path="/disgust1b" element={<Disgust1b />} />
        <Route path="/disgust1b1" element={<Disgust1b1 />} />
        <Route path="/disgust1b1a" element={<Disgust1b1a />} />
        <Route path="/disgust1b1b" element={<Disgust1b1b />} />
        <Route path="/disgust1b2" element={<Disgust1b2 />} />
        <Route path="/disgust1b2a" element={<Disgust1b2a />} />
        <Route path="/disgust1b2b" element={<Disgust1b2b />} />
        <Route path="/disgust1c" element={<Disgust1c />} />
        <Route path="/disgust1c1" element={<Disgust1c1 />} />
        <Route path="/disgust1c1a" element={<Disgust1c1a />} />
        <Route path="/disgust1c1b" element={<Disgust1c1b />} />
        <Route path="/disgust1c2" element={<Disgust1c2 />} />
        <Route path="/disgust1c2a" element={<Disgust1c2a />} />
        <Route path="/disgust1c2a1" element={<Disgust1c2a1 />} />
        <Route path="/disgust1c2b" element={<Disgust1c2b />} />
        <Route path="/disgust1c3" element={<Disgust1c3 />} />
        <Route path="/disgust1c3a" element={<Disgust1c3a />} />
        <Route path="/disgust1c3b" element={<Disgust1c3b />} />
      </Routes>
    </div>
  );
}

export default App;
