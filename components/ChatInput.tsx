"use client";
import { useChat } from "@/providers/ChatContext";
import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ChatInput = () => {
  const [input, setInput] = useState('');
  const { sendMessage, isLoading } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md p-4 flex gap-2 transition-colors duration-200">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
        placeholder="Rant away.. What's bothering you today"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg disabled:opacity-50 transition-colors duration-200 flex items-center gap-1"
      >
        Send <PaperAirplaneIcon className="h-4 w-4 text-white" />
      </button>
    </form>
  );
};

export default ChatInput;
