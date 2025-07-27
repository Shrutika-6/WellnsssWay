# 
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np 
import tensorflow as tf
from tensorflow.keras.models import load_model
import base64
import cv2
from io import BytesIO
from PIL import Image
from pymongo import MongoClient
from datetime import datetime
import random

# Initialize Flask app
app = Flask(__name__)
from flask_cors import CORS

CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)



# Load trained Keras model
model = load_model("noraml-saving-best-model-of-all-epochs.h5")

# Define emotion labels
emotion_labels = ["angry", "disgust", "fear", "happy", "neutral", "sad", "surprise"]

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client["emotionDB"]
questions_col = db["questions"]
responses_col = db["emotion_responses"]
recommendations_col = db["recommendations"]

# Utility: Decode base64 image
# def decode_image(image_base64):
#     try:
#         header, encoded = image_base64.split(",", 1)
#         image_bytes = base64.b64decode(encoded)
#         image = Image.open(BytesIO(image_bytes)).convert("L")  # grayscale
#         image = image.resize((48, 48))
#         image_array = np.array(image) / 255.0
#         image_array = np.expand_dims(image_array, axis=0)
#         image_array = np.expand_dims(image_array, axis=-1)
#         return image_array
#     except Exception as e:
#         print("Image decoding error:", e)
#         return None
import os

# Load Haar cascade safely
cascade_path = "haarcascade_frontalface_default.xml"
if not os.path.exists(cascade_path):
    raise FileNotFoundError(f"Haar cascade file not found at: {cascade_path}")

face_cascade = cv2.CascadeClassifier(cascade_path)
if face_cascade.empty():
    raise Exception("❌ Failed to load Haar cascade XML file!")

# Update your decode_image function to be more robust
def decode_image(image_base64):
    try:
        # Add debugging
        print("Processing image...")
        
        # Decode base64
        header, encoded = image_base64.split(",", 1) if "," in image_base64 else ("", image_base64)
        image_bytes = base64.b64decode(encoded)

        # Convert to numpy array
        image = Image.open(BytesIO(image_bytes))
        image_np = np.array(image.convert("L"))  # Convert to grayscale

        # Save original for debugging
        cv2.imwrite("debug_original.jpg", image_np)

        # Detect faces with more conservative parameters
        faces = face_cascade.detectMultiScale(
            image_np,
            scaleFactor=1.05,
            minNeighbors=3,
            # minSize=(30, 30),
            # flags=cv2.CASCADE_SCALE_IMAGE
        )

        # if len(faces) == 0:
        #     print("No face detected - using full image")
        #     # Use center crop if no face detected
        #     h, w = image_np.shape
        #     size = min(h, w)
        #     offset_h = (h - size) // 2
        #     offset_w = (w - size) // 2
        #     face_roi = image_np[offset_h:offset_h+size, offset_w:offset_w+size]
        # else:
        #     # Use the largest face found
        #     x, y, w, h = max(faces, key=lambda f: f[2] * f[3])
        #     face_roi = image_np[y:y+h, x:x+w]
        
        for x,y,w,h in faces:
            sub_face_img=image_np[y:y+h, x:x+w]
            resized=cv2.resize(sub_face_img,(48,48))
            normalize=resized/255.0
            reshaped=np.reshape(normalize, (1, 48, 48, 1))

        # # Resize and normalize
        # face = cv2.resize(face_roi, (48, 48)) / 255.0
        # face = np.expand_dims(face, axis=(0, -1))  # Add batch and channel dims

        return reshaped

    except Exception as e:
        print(f"Image processing error: {str(e)}")
        return None
# --------------------------
# Route: Home
# --------------------------
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Emotion Detection Flask API is live!"})

# --------------------------
# Route 1: Predict Emotion
# --------------------------
@app.route("/predict", methods=["POST"])
def predict_emotion():
    data = request.get_json()

    if "image" not in data:
        return jsonify({"error": "Missing image data"}), 400

    image_array = decode_image(data["image"])

    if image_array is None:
        return jsonify({"error": "Image processing failed"}), 400

    prediction = model.predict(image_array)
    predicted_emotion = emotion_labels[np.argmax(prediction)]

    return jsonify({"emotion": predicted_emotion})


# --------------------------
# Run Flask App
# --------------------------
if __name__ == "__main__":
    app.run(debug=True)