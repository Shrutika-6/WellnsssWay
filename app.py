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
emotion_labels = ["angry", "disgust", "fear", "happy", "sad", "surprise", "neutral"]

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client["emotionDB"]
questions_col = db["questions"]
responses_col = db["emotion_responses"]
recommendations_col = db["recommendations"]

# Utility: Decode base64 image
def decode_image(image_base64):
    try:
        header, encoded = image_base64.split(",", 1)
        image_bytes = base64.b64decode(encoded)
        image = Image.open(BytesIO(image_bytes)).convert("L")  # grayscale
        image = image.resize((48, 48))
        image_array = np.array(image) / 255.0
        image_array = np.expand_dims(image_array, axis=0)
        image_array = np.expand_dims(image_array, axis=-1)
        return image_array
    except Exception as e:
        print("Image decoding error:", e)
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