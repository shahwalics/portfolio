
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getChatResponse(message: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
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
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting right now, but feel free to reach out to Shahwali directly via the contact form!";
  }
}
