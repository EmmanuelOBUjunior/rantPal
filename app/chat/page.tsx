"use client";
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
      <form onSubmit={handleSubmit} className="bg-gray-800 p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Rant away...what's bothering you today?"
          className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg disabled:opacity-50 transition-colors duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default page;
