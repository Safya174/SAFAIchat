// src/services/gemini.js
import { GoogleGenAI } from '@google/genai';


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey });

export const getGeminiResponse = async (userMessage) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // أحدث وأسرع موديل وممتاز جداً للمحادثات
      contents: userMessage,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، واجهت مشكلة في الاتصال. يرجى المحاولة مرة أخرى.";
  }
};