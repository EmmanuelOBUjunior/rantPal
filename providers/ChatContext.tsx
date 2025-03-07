"use client";

import { getRandomResponse } from "@/utils/aiResponses";
import { createContext, ReactNode, useState } from "react";

export type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
};

type ChatContextType = {
  messages: Message[];
  isLoading: boolean;
  sendMessage: (content: string) => void;
  clearChat: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "I'm RantAI, your sarcastic AI therapist. Tell me what's bothering you in your dev life, and I'll give you the most impractical advice possible!",
      sender: "ai",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    //Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    //Simulate AI thinking
    setTimeout(() => {
      //Get random funny response based on the user's rant
      const aiResponse = getRandomResponse(content);

      //Add AI Response
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: aiResponse,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };
  const clearChat = () => {
    setMessages([
      {
        id: "1",
        content:
          "I'm RantAI, your sarcastic AI therapist. Tell me what's bothering you in your dev life, and I'll give you the most impractical advice possible!",
        sender: "ai",
      },
    ]);
  };

  return(
    <ChatContext.Provider value={{messages, isLoading, sendMessage,clearChat}}>
        {children}
    </ChatContext.Provider>
  )
};


