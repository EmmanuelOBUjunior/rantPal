"use client";
import ChatInput from "@/components/ChatInput";
import { useChat } from "@/providers/ChatContext";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
};

const page = () => {
  const {messages, isLoading} = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null);



  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 p-4 text-white flex justify-between  items-center">
        <Link href="/" className="text-xl font-bold text-purple-400">
          RantPal
        </Link>
        <div className="text-sm bg-purple-600 px-3 py-1 rounded-full">
          Therapy Mode
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message)=>(
            <div key={message.id} className={`flex ${message.sender=== 'user'? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-4 ${message.sender === 'user'?'bg-purple-600 text-white':'bg-gray-700 text-white'}`}>
                    {message.content}
                </div>
            </div>
        ))}

        {isLoading && (
            <div className="flex justify-start">
                <div className="bg-gray-700 text-white rounded-lg p-4 max-w-[80%]">
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                </div>
            </div>
        )}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input Area */}
    <ChatInput/>
    </div>
  );
};

export default page;
