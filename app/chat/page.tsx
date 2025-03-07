"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
};

const page = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "I'm RantPal, your sarcastic AI therapist. Tell me what's bothering you in your dev life, and I'll give you the most impractical advice possible",
      sender: "ai", 
    },
  ]);

  
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Some funny responses to test with
  const funnyResponses = [
    "Have you tried turning your career off and on again?",
    "Sounds like you need to rewrite your entire codebase in Brainfuck. That'll solve everything!",
    "The solution is simple: just create your own programming language where bugs are features.",
    "Have you considered printing your code, burning it in a ritual, and then retyping it all from memory?",
    "Maybe the real bug was the friends we made along the way.",
    "I recommend solving this by adding at least 17 more frameworks to your tech stack.",
    "Have you tried coding blindfolded? I hear it improves intuition by 300%.",
    "The problem is clearly that you're not using enough nested ternary operators.",
    "My professional recommendation is to blame it all on the intern and take a two-week vacation.",
    "Just add 'TODO: Fix later' comments everywhere and call it a day.",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async(e:React.FormEvent) =>{
    e.preventDefault();
    if(!input) return

    //Add user message
    const userMessage:Message = {
        id: Date.now().toString(),
        content: input,
        sender: 'user'
    }
    setMessages((prev)=>[...prev, userMessage])
    setInput('')
    setIsLoading(true);

    //Simulate AI thinking
    setTimeout(()=>{
        //set random funny response
        const randomResponse = funnyResponses[Math.floor(Math.random() * funnyResponses.length)]

        const aiMessage:Message = {
            id: Date.now().toString(),
            content: randomResponse,
            sender: 'ai'
        }
        setMessages((prev)=>[...prev, aiMessage])
        setIsLoading(false);
    }, 1500)
  }

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
