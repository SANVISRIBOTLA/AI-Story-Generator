from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

# Securely set your Gemini API key here
genai.configure(api_key="gemini key")

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    prompt = data.get("prompt")

    if not prompt:
        return jsonify({"error": "Prompt is missing"}), 400

    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)
        return jsonify({"story": response.text})
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "Story generation failed"}), 500

if __name__ == "__main__":
    app.run(debug=True)
