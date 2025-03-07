'use client'

export type Message = {
    id: string,
    content: string,
    sender: 'user'| 'ai'
}

type ChatContextType = {
    messages: Message[],
    isLoading: boolean,
    sendMessage: (content:string)=> void
}