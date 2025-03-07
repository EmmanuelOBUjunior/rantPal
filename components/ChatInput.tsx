'use client'
import { useChat } from "@/providers/ChatContext"
import { useState } from "react"

const ChatInput = () => {
    const [input, setInput] = useState('second')
    const {sendMessage, isLoading} = useChat()

    
  return (
    <div>ChatInput</div>
  )
}

export default ChatInput