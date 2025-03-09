"use client";
import ChatInput from "@/components/ChatInput";
import ChatMessage from "@/components/ChatMessage";
import { useChat } from "@/providers/ChatContext";
import Link from "next/link";
import { useEffect, useRef} from "react";


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
    <div className="flex flex-col h-screen dark:bg-gray-900 bg-gray-50">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 p-4 text-white flex justify-between  items-center">
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
            <ChatMessage key={message.id} message={message}/>
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
