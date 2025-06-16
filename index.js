import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = "AIzaSyCwkw2sFgvY0Xz0vDG9pwIgD6kl_CPjskY"; // Replace with your Gemini API Key

const generateStoryBtn = document.getElementById("generate-story-btn");
generateStoryBtn.addEventListener("click", generateStory);

async function generateStory() {
  const promptText = document.getElementById("story-input").value.trim();
  const theme = document.getElementById("story-theme").value;
  const tone = document.getElementById("story-tone").value;
  const characterName = document.getElementById("character-name").value.trim();
  const length = document.getElementById("story-length").value;

  if (!promptText) {
    displayError("Please enter a story prompt.");
    return;
  }

  // Smart Prompt Filtering
  if (promptText.length < 10) {
    displayError("Prompt is too short. Please write a more detailed story idea.");
    return;
  }

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const composedPrompt = `You are a creative story generator. Write a ${theme} story of approximately ${length} words with a ${tone} tone. The main character's name is ${characterName}. Story idea: ${promptText}`;

  document.getElementById("prompt-preview").innerText = `Prompt Sent: ${composedPrompt}`;

  try {
    const result = await model.generateContent(composedPrompt);
    const response = await result.response;
    const story = await response.text();
    displayStory(story);
  } catch (error) {
    displayError("Sorry, something went wrong while generating your story.");
  }
}

// Interactive Story Mode
function continueStory() {
  const newPrompt = prompt("Continue the story from here:");
  if (newPrompt) {
    document.getElementById("story-input").value = newPrompt;
    generateStory();
  }
}

function displayStory(story) {
  const generatedContent = document.getElementById("generated-content");
  generatedContent.innerHTML = `<p>${story}</p><button onclick='continueStory()' class='btn blue'>Continue Story</button>`;
  document.getElementById("download-pdf-btn").style.display = "block";
}

// Voice Output
function readStoryAloud() {
  const storyText = document.getElementById("generated-content").innerText;
  const speech = new SpeechSynthesisUtterance(storyText);
  window.speechSynthesis.speak(speech);
}

document.getElementById("download-pdf-btn").addEventListener("click", readStoryAloud);

function displayError(message) {
  const generatedContent = document.getElementById("generated-content");
  generatedContent.innerHTML = `<p class="red-text">${message}</p>`;
}
