"use client";
import { useChat } from "@/providers/ChatContext";
import React, { useState } from "react";

const ChatInput = () => {
  const [input, setInput] = useState("second");
  const { sendMessage, isLoading } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default ChatInput;
