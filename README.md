

# 🌟 AI Story Generator

A web-based AI-powered story generator that creates unique stories based on user inputs such as theme, tone, character name, and story idea. This project uses  **Google's Gemini API**  to generate human-like narratives in real time.

---

## ✨ Features

- Prompt-based story generation
- Customizable theme, tone, length, and character name
- Option to continue the story
- Responsive and styled UI using Materialize CSS
- Secure backend integration (optional)
- Gemini API  backend compatibility

---

## 🛠 Technologies Used

- **Frontend**: HTML, CSS (Materialize), JavaScript
- **Backend (Optional)**: Flask (for securing API keys)
- **AI Models**:
  - Gemini (`@google/generative-ai`)
 

---

## 🚀 How to Run the Project

### Option 1: Using Gemini API (Cloud-based)

#### 1. 🔑 Get a Gemini API Key

- Visit [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
- Copy the key and store it securely.

#### 2. 🖥️ Setup Frontend

- Clone the repository:
  ```bash
  git clone https://github.com/yourusername/ai-story-generator.git
  cd ai-story-generator


- Open index.html in a browser.

- In script.js, replace the placeholder API key:

- const GEMINI_API_KEY = "YOUR_API_KEY_HERE";

- Enter a prompt like "A robot finds a talking cactus in the desert"

- Select theme, tone, length, and name

- Click Generate Story
