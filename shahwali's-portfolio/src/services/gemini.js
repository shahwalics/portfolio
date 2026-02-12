import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || "dummy-key");

// Configure the model once
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  // Log the model being used for debugging
  // console.log("Using Gemini Model: gemini-1.5-flash");
  systemInstruction: `You are Shahwali's AI assistant. 
    Shahwali is a senior developer specializing in Vue.js, React, Laravel, and Webflow.
    Answer questions about his skills, experience, and the services he offers. 
    Be professional, brief, and helpful. 
    If asked about his specific stack: 
    - Vue.js (Specialty)
    - JavaScript / React.js
    - Laravel (Backend/Blade)
    - Webflow (Design/Rapid prototyping)
    Always maintain a friendly hiring-ready tone.`,
});

// Store the chat session in memory
let chatSession = null;

export async function getChatResponse(message) {
  if (!apiKey) {
    console.error("Gemini API Error: VITE_GEMINI_API_KEY is missing.");
    return "Configuration Error: API Key missing.";
  }

  try {
    // Initialize chat session if it doesn't exist
    if (!chatSession) {
      chatSession = model.startChat({
        history: [], // Starts with no history, builds up as you chat
      });
    }

    // Send the message and wait for the stream/response
    const result = await chatSession.sendMessage(message);
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error("Gemini Error:", error);
    // If the session crashes (e.g. token limit), reset it
    chatSession = null; 
    return "I'm having a little trouble connecting right now. Please try again in a moment!";
  }
}