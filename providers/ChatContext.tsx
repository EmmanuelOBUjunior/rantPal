"use client";

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
  const [messages, setMßessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "I'm RantAI, your sarcastic AI therapist. Tell me what's bothering you in your dev life, and I'll give you the most impractical advice possible!",
      sender: "ai", 
    },
  ]);
};
