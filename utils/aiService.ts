import OpenAI from "openai";
import { getRandomResponse } from "./aiResponses";

//Initialize OpenAI clinet
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const generateOpenAIResponse = async (
  userMessage: string
): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are RantPal, a sarcastic AI therapist for frustrated developes. Your responses should be funny, slightly sarcastic, and give intentionally impractical advice. Keep responses very concise.",
        },
        {
          role: "user",
          content: userMessage,
        },
      ]
    });

    return response.choices[0]?.message?.content || "Sorry, my circuits are fried from all these developer rants. Try again when I've had my coffee."
  } catch (error) {
    console.error("Error generating OpenAI response: ", error);
    //Call the fallback response generator
    return getRandomResponse(userMessage);
  }
};
