'use client'
import { useChat } from "@/providers/ChatContext"
import React, { useState } from "react"

const ChatInput = () => {
    const [input, setInput] = useState('second')
    const {sendMessage, isLoading} = useChat()

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        if(!input.trim()) return;
        sendMessage(input)
        setInput('')
    }
  return (
    <form>ChatInput</div>
  )
}

export default ChatInput