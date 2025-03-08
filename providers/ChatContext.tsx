"use client";

import { getRandomResponse } from "@/utils/aiResponses";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp : number;
};

type ChatContextType = {
  messages: Message[];
  isLoading: boolean;
  sendMessage: (content: string) => void;
  clearChat: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const initialMessage:Message = {
  id: "1",
  content:
    "I'm RantAI, your sarcastic AI therapist. Tell me what's bothering you in your dev life, and I'll give you the most impractical advice possible",
  sender: "ai",
  timestamp: Date.now()
}

const STORAGE_KEY = 'rantpal-chat-history'

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [initialized, setInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  //Load messages from localStorage on initial render
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const storedMessages = localStorage.getItem(STORAGE_KEY);
      if(storedMessages){
        try {
          const parsedMessages = JSON.parse(storedMessages)
          if(Array.isArray(parsedMessages) && parsedMessages.length > 0){
            setMessages(parsedMessages)
          }
        } catch (error) {
          console.error("Failed to parse saved messages: ", error)
  
          //If parsing fails, reset to initial message
          setMessages([initialMessage])
        }
      }
    }
  },[])

  //Save messages to localStorage whenever they change
  useEffect(()=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  },[messages])

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    //Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: Date.now()
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
        timestamp: Date.now()
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };
  const clearChat = () => {
    const newInitialMessage = {
      ...initialMessage,
      timestamp : Date.now()
    }
    setMessages([newInitialMessage]);
  };

  return(
    <ChatContext.Provider value={{messages, isLoading, sendMessage,clearChat}}>
        {children}
    </ChatContext.Provider>
  )
};

export const useChat = () =>{
    const context = useContext(ChatContext)
    if(context === undefined){
        throw new Error("useChat must be used within ChatProvider")
    }
    return context
}


