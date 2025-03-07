'use client'

import { createContext, ReactNode } from "react"

export type Message = {
    id: string,
    content: string,
    sender: 'user'| 'ai'
}

type ChatContextType = {
    messages: Message[],
    isLoading: boolean,
    sendMessage: (content:string)=> void,
    clearChat: ()=> void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const ChatProvider = ({children}:{children:ReactNode})=>{
    
}